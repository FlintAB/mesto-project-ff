import './pages/index.css';
import {initialCards, createCard} from './scripts/cards.js'



//DOM узлы
const cardContainer = document.querySelector('.places__list');

//Функция удаления карточки
function deleteCard(cardElement) {
   cardElement.remove();
}

//Вывести карточки на страницу
initialCards.forEach((cardData) => {
const cardElement = createCard(cardData, deleteCard);
cardContainer.append(cardElement);
});

// описана инициализация приложения и основная логика страницы: поиск DOM-элементов на странице и навешивание на них обработчиков событий; обработчики отправки форм, функция-обработчик события открытия модального окна для редактирования профиля; функция открытия модального окна изображения карточки.