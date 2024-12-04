export const initialCards = [
   {
     name: "Архыз",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
   },
   {
     name: "Челябинская область",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
   },
   {
     name: "Иваново",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
   },
   {
     name: "Камчатка",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
   },
   {
     name: "Холмогорский район",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
   },
   {
     name: "Байкал",
     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
   }
];



//Функция создания карточки
export function createCard(cardData, deleteCard) {
  //Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

// описаны функции для работы с карточками: функция создания карточки, функции-обработчики событий удаления и лайка карточки;