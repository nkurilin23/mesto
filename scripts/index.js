// Открытие / закрытие попапа(по кнопке)

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-icon');
const popupOpenButtonElement = document.querySelector('.profile__edit');

const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    console.log('open popup clicked');
};

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
    console.log('close popup clicked');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

//Закрытие попапа по клику в оверлей

const closePopupByOverlay = function (event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
}

popupElement.addEventListener('click', closePopupByOverlay);

// Работа полей попапа

document.querySelector('.popup__save').onclick = save;
function save() {
    let popupName = popupElement.querySelector('.popup__name').value;
    console.log(popupName);
    document.querySelector('.profile__info-name').innerHTML = popupName;

    let popupJob = popupElement.querySelector('.popup__job').value;
    console.log(popupJob);
    document.querySelector('.profile__info-job').innerHTML = popupJob;
}

let popupCloseSaveButtonElement = document.querySelector('.popup__save');
popupCloseSaveButtonElement.addEventListener('click', closePopup);