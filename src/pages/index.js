import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import {
  initialCards,
  profileEditButton,
  profileEditModal,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  cardListEl,
  addNewCardButton,
  addNewCardForm,
  cardTitleInput,
  cardUrlInput,
  addNewCardModal,
  previewImageModal,
  validationSettings,
  newName,
  newJob,
} from "../utils/constants.js";

const profileEditClose = profileEditModal.querySelector(".modal__close");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/***********************
 * PREVIEW IMAGE MODAL *
 ***********************/

const previewImageClose = previewImageModal.querySelector(".modal__close");
const previewImageElement = previewImageModal.querySelector(
  ".modal__preview-image"
);
const previewImageText = previewImageModal.querySelector(
  ".modal__preview-text"
);

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

  cardSection.addItem(cardNode);
}
/*******************************************************
 * EVENT HANDLERS FOR SUMBITTING PROFILE AND CARD DATA *
 *******************************************************/
function handleProfileEditSubmit(formData) {
  userInfo.setUserInfo(formData.name, formData.job);
  profileEditPopup.close();
}
function handleAddCardFormSubmit(formData) {
  const { name, imageUrl } = formData;
  renderCard({
    name,
    link: imageUrl,
  });
  newCardPopup.close();
  addNewCardForm.reset();
  addFormValidator.toggleButtonState();
}

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
  ".cards__list"
);
cardSection.renderItems();
