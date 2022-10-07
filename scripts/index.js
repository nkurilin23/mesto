// Пременные попапа профиля
const popupElement = document.querySelector('#popup_edit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-icon');
let formElement = popupElement.querySelector('.popup__form');

// Переменные данных профиля
const profileElement = document.querySelector('.profile');
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
let nameInput = popupElement.querySelector('#name');
let jobInput = popupElement.querySelector('#job');
let profileName = profileElement.querySelector('.profile__info-name');
let profileJob = profileElement.querySelector('.profile__info-job');

// Открытие / закрытие попапа(по кнопке)
const openPopup = function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupElement.classList.add('popup_is-opened');
};
popupOpenButtonElement.addEventListener('click', openPopup);
const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
};
popupCloseButtonElement.addEventListener('click', closePopup);

// Работа полей попапа
function save() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Отправка формы
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault()
    save();
    closePopup();
});

// Переменные попапа добавления фотографии
const popupAddPhoto = document.querySelector('#popup_photo');
const popupCloseButtonAdd = popupAddPhoto.querySelector('.popup__close-icon');
let formAdd = popupAddPhoto.querySelector('.popup__form');

// Переменные данных фотографии
const elementAdd = document.querySelector('.elements');
const popupButtonAdd = profileElement.querySelector('.profile__add');
let commentInput = popupAddPhoto.querySelector('#comment');
let urlInput = popupAddPhoto.querySelector('#url');
let photoName = elementAdd.querySelector('.elements__text')

//Открытие / закрытие попапа добавления фотографий
const openPopupAdd= function () {
    // commentInput.value = photoName.textContent;
     // urlInput.value = urlInput.textContent;
     popupAddPhoto.classList.add('popup_is-opened');
};
 popupButtonAdd.addEventListener('click', openPopupAdd);
  const closePopupAdd = function () {
    popupAddPhoto.classList.remove('popup_is-opened');
 };
 popupCloseButtonAdd.addEventListener('click', closePopupAdd);