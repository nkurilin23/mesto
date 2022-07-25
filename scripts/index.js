// Пременные

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-icon');
const profileElement = document.querySelector('.profile');
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('#name');
let jobInput = popupElement.querySelector('#job');
let profileElementInfo = profileElement.querySelector('.profile__info-text');
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
popupSaveButtonElement.addEventListener('click', save);

// Отправка формы
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault()
    console.log('Форма отправлена');
});
popupSaveButtonElement.addEventListener('click', closePopup);