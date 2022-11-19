//объект с используемыми классами
const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
};

//показать ошибку
const showError = (formElement, inputElement, selectors) => {
    const inputErrorClass = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass);
    inputErrorClass.textContent = inputElement.validationMessage;
};

//скрыть ошибку
const hideError = (formElement, inputElement, selectors) => {
    const inputErrorClass = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    inputErrorClass.textContent = " ";
};

//проверка валидности полей и вызов ошибок на полях
const checkInputValidity = (formElement, inputElement, selectors) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, selectors)
    }
    else {
        hideError(formElement, inputElement, selectors);
    }
};

//события на всех полях
const setEventListener = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, selectors);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, selectors);
            toggleButtonState(inputList, buttonElement, selectors);
        });
    });
};

//отправка форм
enableValidation = (selectors) => {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));
    formList.forEach((formElement) => {
        setEventListener(formElement, selectors);
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            disableSubmitButton(formElement, selectors);
        });
    }); 
};

//проверка валиности полей для проверки активности кнопок отправки форм
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//активность кнопок отправки форм
const toggleButtonState = (inputList, buttonElement, selectors) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(selectors.inactiveButtonClass);
    }
    else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
};

// дизейбл кнопки для повторного открытия
const disableSubmitButton = (formElement, selectors) => {
    formElement.querySelector(selectors.submitButtonSelector).setAttribute('disabled', true);
    formElement.querySelector(selectors.submitButtonSelector).classList.add(selectors.inactiveButtonClass);
};

enableValidation(selectors);