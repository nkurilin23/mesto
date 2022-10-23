// const selectors = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__save',
//     inactiveButtonClass: 'popup__save_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'error'
// };

const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');
const inputErrorClass = formElement.querySelector(`.${inputElement.id}-error`);


//показать ошибку
const showError = (formElement, inputElement) => {
    const inputErrorClass = formElement.querySelector(`.${inputElement.id}-error`);
   
    inputElement.classList.add('popup__input_type_error');
    inputErrorClass.textContent = inputElement.validationMessage;
};
console.log(inputErrorClass)
//скрыть ошибку
const hideError = (formElement, inputElement) => {
    const inputErrorClass = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    inputErrorClass.textContent = " ";
};

//проверка валидности и вызов ошибок
const isvalid = (formElement, inputElement) => {
    if (!inputElement.valydity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage)
    }
    else {
        hideError(formElement, inputElement);
    }
};

//события на всех полях
const setEventListener = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
        });
    });
};

//формы
enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            setEventListener(formElement);
        });
    });
};

//проверка полей
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.valydity.valid;
    });
};

//кнопки
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classlist.add('popup__save_disabled');
    }
    else {
        buttonElement.classList.remove('popup__save_disabled');
    }
};










