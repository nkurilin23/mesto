// Массив первичных карточек
const initialCards = [
    {
        name: 'Барселона',
        link: './images/image1.jpeg'
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

// Пременные редактирования профиля 
const popupElementEdit = document.querySelector('#popup_edit');
const formElementEdit = popupElementEdit.querySelector('.popup__form');
const profileElement = document.querySelector('.profile');
const popupCloseButtonElementEdit = popupElementEdit.querySelector('.popup__close-icon'); // закрытия ред профиля
const popupOpenButtonElementEdit = profileElement.querySelector('.profile__edit'); // открытия ред профиля
const nameInput = popupElementEdit.querySelector('#name');
const jobInput = popupElementEdit.querySelector('#job');
const profileName = profileElement.querySelector('.profile__info-name');
const profileJob = profileElement.querySelector('.profile__info-job');
const popupElement = document.querySelector('.popup');

//Переменные добавления новой карточки
const popupAddPhoto = document.querySelector('#popup_photo');
const newPhotoForm = popupAddPhoto.querySelector('.popup__form');
const popupCloseButtonAdd = popupAddPhoto.querySelector('.popup__close-icon'); // закртия добавления карточки
const popupButtonAdd = profileElement.querySelector('.profile__add'); // открытия добавления карточки
const inputName = popupAddPhoto.querySelector('#text');
const inputLink = popupAddPhoto.querySelector('#url');

//Переменные попапа открытия фотографии
const popupOpenPhoto = document.querySelector('#popup_open');
const popupCloseButtonPhoto = popupOpenPhoto.querySelector('.popup__close-icon'); // закрытия попапа с фотографией
const popupImage = popupOpenPhoto.querySelector('.popup__opened-photo');
const popupText = popupOpenPhoto.querySelector('.popup__photo-name');

//Переменные для создания первичной страницы с карточками
const section = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.elements__element-template').content.querySelector('.elements__element');

//Открытие и закрытие попапов редактирования профиля и добавления карточки
function openPopup(modalPopup) {
    modalPopup.classList.add('popup_is-opened'); // функциия открытия попапа
    document.addEventListener('keydown', closePopupByEsc);
}

// Функция закрытия попапа
function closePopup(modalPopup) {
    modalPopup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

// открыть ред профиля
popupOpenButtonElementEdit.addEventListener('click', () => {
    openPopup(popupElementEdit);
    nameInput.value = profileName.textContent; // имя профиля
    jobInput.value = profileJob.textContent; // работа профиля
});

// Закрытие по Esc
function closePopupByEsc(evt) {
    if (evt.key !== "Escape") {
        return
    }
    const openedPopup = document.querySelector('.popup_is-opened')
    if (!openedPopup) {
        return
    }
    closePopup(openedPopup);
}

//закрытие по оверлею
function closePopupByOverlay(evt) {
    if (evt.target !== evt.currentTarget) {
        return;
    }
    evt.currentTarget.classList.remove('popup_is-opened');
}

popupElementEdit.addEventListener('click', closePopupByOverlay);
popupAddPhoto.addEventListener('click', closePopupByOverlay);
popupOpenPhoto.addEventListener('click', closePopupByOverlay);


// закрыть ред профиля
popupCloseButtonElementEdit.addEventListener('click', () => closePopup(popupElementEdit));

// открыть добавление карточки
popupButtonAdd.addEventListener('click', () => openPopup(popupAddPhoto));

// закрыть добавление карточки
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAddPhoto));

// закрыть фотографиюю
popupCloseButtonPhoto.addEventListener('click', () => closePopup(popupOpenPhoto));

// Функция сохранения данных профиля
function saveProfileData() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
};

// Отправка форм данных профиля
formElementEdit.addEventListener('submit', function (evt) {
    evt.preventDefault()
    saveProfileData();
    closePopup(popupElementEdit);
});

//Создание первичной страницы с карточками

// Удаление, лайк, открытие фото
function setListenersForCard(element, card) {
    // слушатель клика на удаление
    const deleteButton = element.querySelector('.elemеnts__delete');
    deleteButton.addEventListener('click', deleteCard);

    // слушатель слика на лайк
    const likeButton = element.querySelector('.elements__like');
    likeButton.addEventListener('click', likeCard);

    // слушатель клика на открытие фото
    const openedPhoto = element.querySelector('.elements__photo');
    openedPhoto.addEventListener('click', () => {
        openPhoto(card);
    });
}

// Создание карточки
function createCard(card) {
    const newHtmlElement = cardsTemplate.cloneNode(true);
    const cardText = newHtmlElement.querySelector('.elements__text');
    const cardPhoto = newHtmlElement.querySelector('.elements__photo');
    cardText.textContent = card.name;
    cardPhoto.src = card.link;
    cardPhoto.alt = card.name;
    setListenersForCard(newHtmlElement, card);
    return newHtmlElement;
}

// Отрисовка карточки
function renderCard(card) {
    const newCards = createCard(card);
    section.append(newCards);
}

//Функция создания новой карточки
function addCard() {
    const newCard = createCard({
        name: inputName.value,
        link: inputLink.value,
    });
    section.prepend(newCard);
    reset();
}

//Очистка полей формы после добавления карточки
function reset() {
    inputName.value = "";
    inputLink.value = "";
}

// Отправка форм попапа новой карточки
newPhotoForm.addEventListener('submit', function (evtAdd) {
    evtAdd.preventDefault();
    closePopup(popupAddPhoto);
    addCard();
});

// удаление элемента
function deleteCard(event) {
    event.target.closest('.elements__element').remove();
}

// лайк элемента
function likeCard(event) {
    event.target.classList.toggle('elements__like_active');
}

// открыть попап с фото
function openPhoto(card) {
    popupImage.src = card.link;
    popupText.textContent = card.name;
    popupImage.alt = card.name;
    openPopup(popupOpenPhoto);
}

initialCards.forEach(renderCard);