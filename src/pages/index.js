import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*******************************
 * Elements profile edit modal *
 *******************************/
const profileEditButton = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile__edit-modal");
const profileEditClose = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
/***************************
 * Elements New Card Modal *
 ***************************/
const addNewCardModal = document.querySelector("#card__add-modal");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
/*******************************
 * Card template and card list *
 *******************************/
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
/**************************
 * Card add Button / Form *
 **************************/
const addNewCardButton = document.querySelector("#profile__add-button");
const addNewCardForm = addNewCardModal.querySelector("#add__card-form");
const cardTitleInput = addNewCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addNewCardForm.querySelector(".modal__input_type_url");
/***********************
 * PREVIEW IMAGE MODAL *
 ***********************/
const previewImageModal = document.querySelector("#preview__image-modal");
const previewImageClose = previewImageModal.querySelector(".modal__close");
const previewImageElement = previewImageModal.querySelector(
  ".modal__preview-image"
);
const previewImageText = previewImageModal.querySelector(
  ".modal__preview-text"
);
/***********************************************
 * REMOVE CARD, OPEN AND CLOSE MODAL FUNCTIONS
 * ?Includes "Esc" key logic *
 ***********************************************/

// function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeByEscape);
// }
// function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeByEscape);
// }
// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     if (openedPopup) {
//       closePopup(openedPopup);
//     }
//   }
// }

/**********
 * ARRAYS *
 **********/
const modals = [profileEditModal, addNewCardModal, previewImageModal];

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", (name, link) => {
    newImagePopup.open(name, link);
  });
  return cardElement.getView();
}
function renderCard(cardData) {
  const cardNode = createCard(cardData);

  cardListEl.prepend(cardNode);
}
/*******************************************************
 * EVENT HANDLERS FOR SUMBITTING PROFILE AND CARD DATA *
 *******************************************************/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditPopup.close();
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard(
    {
      name,
      link,
    },
    cardListEl
  );
  newCardPopup.close();
  addNewCardForm.reset();
  addFormValidator.toggleButtonState();
}
/*******************
 * EVENT LISTENERS *
 *******************/
// profileEditButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openPopup(profileEditModal);
// });

// profileEditClose.addEventListener("click", () => {
//   closePopup(profileEditModal);
// });
// addNewCardCloseButton.addEventListener("click", () => {
//   closePopup(addNewCardModal);
// });
// previewImageClose.addEventListener("click", () => {
//   closePopup(previewImageModal);
// });

// addNewCardButton.addEventListener("click", () => {
//   openPopup(addNewCardModal);
// });
// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
// addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => {
  const cardNode = createCard(cardData);
  cardListEl.prepend(cardNode);
});
/**************
 * Validation *
 **************/
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
/***********************
 * EDIT FORM VALIDATOR *
 ***********************/
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
/**********************
 * ADD FORM VALIDATOR *
 **********************/

const addFormValidator = new FormValidator(validationSettings, addNewCardForm);
addFormValidator.enableValidation();
editFormValidator.enableValidation();
/***********************
 * NEW CARD FORM POPUP *
 ***********************/

const newCardPopup = new PopupWithForm(
  "#card__add-modal",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addNewCardButton.addEventListener("click", () => {
  newCardPopup.open();
});

/**********************
 * PROFILE EDIT POPUP *
 **********************/
const profileEditPopup = new PopupWithForm(
  "#profile__edit-modal",
  handleProfileEditSubmit
);
profileEditPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  profileTitleInput.value = user.name;
  profileDescriptionInput.value = user.job;
  profileEditPopup.open();
});

/******************
 * POPUPWITHIMAGE *
 ******************/
const newImagePopup = new PopupWithImage("#preview__image-modal");
newImagePopup.setEventListeners();

/*************
 * USER INFO *
 *************/
const userInfo = new UserInfo(".profile__title", ".profile__description");

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list-item"
);
cardSection._renderItems();

/************************
 * CLOSE MODAL BY CLICK *
 ************************/

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (e) => {
//     if (e.target.matches(".modal")) {
//       closePopup(modal);
//     }
//   });
// });