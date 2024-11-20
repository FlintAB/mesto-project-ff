
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardData, deleteCard) {
   const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
   const cardImage = cardElement.querySelector('.card__image');

   cardElement.querySelector('.card__title').textContent = cardData.name;
   cardImage.src = cardData.link;
   cardImage.alt = cardData.name;

   const deleteButton = cardElement.querySelector('.card__delete-button');
   deleteButton.addEventListener('click', () => deleteCard(cardElement));

   return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
   cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
const cardElement = addCard(cardData, deleteCard);
cardContainer.append(cardElement);
});