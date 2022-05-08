export default class Card {
    constructor(data, cardSelector) {
        this.image = data.image;
        this.title = data.name;
        this.price = data.price;
        this._cardSelector = cardSelector; //  записали селектор в приватное поле
    };

    _getTemplate() {
        // получаем разметку из HTML, клонируем элемент
        // и возвращаем DOM-элемент карточки
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    };

    generateCard() {
        // сохраняем разметку в приватное поле _element
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__image');

        this._cardTitle = this._element.querySelector('.card__text');
        this._cardPrice = this._element.querySelector('.card__price');


        // Добавляем данные
        this._cardImage.src = this.image;
        this._cardTitle.textContent = this.title;
        this._cardImage.alt = this.title;
        this._cardPrice.textContent = this.price;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}
