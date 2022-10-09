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

function save() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Отправка форм
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault()
    save();
    closePopup();
    
});

// Загрузка первичных карточек
const initialCards = [
    {
        name: 'Барселона',
        link: './images/image6.jpeg'
    },
    {
        name: 'Венеция',
        link: './images/image2.jpeg'
    },
    {
        name: 'Озеро Гарда',
        link: './images/image3.jpeg'
    },
    {
        name: 'Флоренция',
        link: './images/image4.jpeg'
    },
    {
        name: 'Тосса де Мар',
        link: './images/image5.jpeg'
    },
    {
        name: 'Ватикан',
        link: './images/image6.jpeg'
    }
];

const section = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.elements__element-template').content;

function render() {
    initialCards.forEach(renderCards)
}

function renderCards(cards) {
    const newHtmlElement = cardsTemplate.cloneNode(true);
    const cardText = newHtmlElement.querySelector('.elements__text');
    const cardPhoto = newHtmlElement.querySelector('.elements__photo');
    cardText.textContent = cards.name;
    cardPhoto.src = cards.link;

    setListenersForCard(newHtmlElement);
    section.appendChild(newHtmlElement);
}

//Cоздание новой карточки фотографий
const popupAddPhoto = document.querySelector('#popup_photo');
let newPhotoForm = popupAddPhoto.querySelector('.popup__form')
const popupCloseButtonAdd = popupAddPhoto.querySelector('.popup__close-icon');
const popupButtonAdd = profileElement.querySelector('.profile__add');
const createNewCardButton = popupAddPhoto.querySelector('.popup__save')
createNewCardButton.addEventListener('click', addCard);
let inputName = popupAddPhoto.querySelector('#name');
let inputLink = popupAddPhoto.querySelector('#url');

function addCard() {
    renderCards({
        name: inputName.value,
        link: inputLink.value,
    });
}

//Удаление карточек и лайки фотографий
function setListenersForCard(element) {
    const deleteButton = element.querySelector('.elemеnts__delete');
    deleteButton.addEventListener('click', cardDelete);

    const likeButton = element.querySelector('.elements__like');
    likeButton.addEventListener('click', cardLike);
}

function cardDelete(event) {
    const currentElementItem = event.target.closest('.elements__element');
    currentElementItem.remove();
}

function cardLike(event) {
    const currentElementItem = event.target.closest('.elements__like');
    currentElementItem.classList.add('elements__like_active');
}

//Открытие / закрытие попапа добавления фотографий
function openPopupAdd() {
    popupAddPhoto.classList.add('popup_is-opened');
}
popupButtonAdd.addEventListener('click', openPopupAdd);
function closePopupAdd() {
    popupAddPhoto.classList.remove('popup_is-opened');
}
popupCloseButtonAdd.addEventListener('click', closePopupAdd);

render();

// Отправка форм
newPhotoForm.addEventListener('submit', function (evtAdd) {
    evtAdd.preventDefault();
    closePopupAdd();
    });