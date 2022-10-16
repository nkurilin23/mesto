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
const popupElement = document.querySelector('#popup_edit');
const formElement = popupElement.querySelector('.popup__form');
const profileElement = document.querySelector('.profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-icon'); // закрытия ред профиля
const popupOpenButtonElement = profileElement.querySelector('.profile__edit'); // открытия ред профиля
let nameInput = popupElement.querySelector('#name');
let jobInput = popupElement.querySelector('#job');
let profileName = profileElement.querySelector('.profile__info-name');
let profileJob = profileElement.querySelector('.profile__info-job');

//Переменные добавления новой карточки
const popupAddPhoto = document.querySelector('#popup_photo');
const newPhotoForm = popupAddPhoto.querySelector('.popup__form')
const popupCloseButtonAdd = popupAddPhoto.querySelector('.popup__close-icon'); // закртия добавления карточки
const popupButtonAdd = profileElement.querySelector('.profile__add'); // открытия добавления карточки
const createNewCardButton = popupAddPhoto.querySelector('.popup__save') // сохранения добавленной карточки
let inputName = popupAddPhoto.querySelector('#name');
let inputLink = popupAddPhoto.querySelector('#url');

//Переменные попапа открытия фотографии
const popupOpen = document.querySelector('#popup_open');
const popupCloseButtonPhoto = popupOpen.querySelector('.popup__close-icon'); // закрытия попапа с фотографией
const popupImage = popupOpen.querySelector('.popup__opened-photo');
const popupText = popupOpen.querySelector('.popup__photo-name');

//Переменные для создания первичной страницы с карточками
const section = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.elements__element-template').content.querySelector('.elements__element');

//Открытие и закрытие попапов редактирования профиля и добавления карточки
function openPopup(modalPopup) {
    nameInput.value = profileName.textContent; // имя профиля
    jobInput.value = profileJob.textContent; // работа профиля
    modalPopup.classList.add('popup_is-opened'); // функциия открытия попапа
}

// Функция закрытия попапа
function closePopup(modalPopup) {
    modalPopup.classList.remove('popup_is-opened'); 
}

// открыть ред профиля
popupOpenButtonElement.addEventListener('click', () => openPopup(popupElement)); 

 // закрыть ред профиля
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));

 // открыть добавление карточки
popupButtonAdd.addEventListener('click', () => openPopup(popupAddPhoto));

// закрыть добавление карточки
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAddPhoto)); 

// закрыть фотографиюю
popupCloseButtonPhoto.addEventListener('click', () => closePopup(popupOpen)); 

// Функция сохранения данных профиля
function save() {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Отправка форм данных профиля
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault()
    save();
    closePopup(popupElement);
});

//Создание первичной страницы с карточками

// Удаление, лайк, открытие фото
function setListenersForCard(element, cards) {
    // слушатель клика на удаление
    const deleteButton = element.querySelector('.elemеnts__delete');
    deleteButton.addEventListener('click', cardDelete);

    // слушатель слика на лайк
    const likeButton = element.querySelector('.elements__like');
    likeButton.addEventListener('click', cardLike);

    // слушатель клика на открытие фото
    const openedPhoto = element.querySelector('.elements__photo');
    openedPhoto.addEventListener('click', () => {
        openPhoto(cards);
    });
}

// удаление элемента
function cardDelete(event) {
    event.target.closest('.elements__element').remove(); 
}

// лайк элемента
function cardLike(event) {
    event.target.classList.toggle('elements__like_active'); 
}

// открыть попап с фото
function openPhoto(cards) {
    popupImage.src = cards.link;
    popupText.textContent = cards.name;
    openPopup(popupOpen); 
}

// Создание карточки
function createCard(cards) {
    const newHtmlElement = cardsTemplate.cloneNode(true);
    const cardText = newHtmlElement.querySelector('.elements__text');
    const cardPhoto = newHtmlElement.querySelector('.elements__photo');
    cardText.textContent = cards.name;
    cardPhoto.src = cards.link
    setListenersForCard(newHtmlElement, cards);
    return newHtmlElement;
}

// Отрисовка карточки
function render(cards) {
    const newCards = createCard(cards)
    section.append(newCards); 
}

//Функция создания новой карточки
function addCard() {
    const newCards2 = createCard({
        name: inputName.value,
        link: inputLink.value,
    });
    section.prepend(newCards2); 
    reset ();
 }

 //Очистка полей формы после добавления карточки
 function reset () {
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
function cardDelete(event) {
    event.target.closest('.elements__element').remove(); 
}

// лайк элемента
function cardLike(event) {
    event.target.classList.toggle('elements__like_active'); 
}

// открыть попап с фото
function openPhoto(cards) {
    popupImage.src = cards.link;
    popupText.textContent = cards.name;
    openPopup(popupOpen); 
}

initialCards.forEach(render);