// import './index.css';
import { initialCards } from '../Utils/initialCards.js';
import Card from '../components/Card.js';
import Section from "../components/Section.js";

const cardTemplate = '#card-template';

function createCard(data) {
    const card = new Card(data, cardTemplate);
    return card.generateCard();
}

function addCard(data) {
    sectionCard.addItem(createCard(data));
};

const sectionCard = new Section(
    {
        items: initialCards,
        renderer: addCard
    },
    '.table'
);


sectionCard.renderAll();

ddEventListener('click', () => handleOpenPopupConfirm());