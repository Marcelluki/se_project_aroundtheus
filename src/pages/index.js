import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import Api from "../components/Api.js";
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
  profileAvatar,
  profileAvatarInput,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e9b30f62-f32d-45b6-96ae-c516b6b7d5cd",
    "Content-Type": "application/json",
  },
});
// api.getInitialCards().then();
// use the function below when you create the card via the modal
// api.createCard({
//   name: "hello",
//   link: "https://images6.alphacoders.com/133/1331137.png",
// });

// const profileEditClose = profileEditModal.querySelector(".modal__close");
// const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;

/***********************
 * PREVIEW IMAGE MODAL *
 ***********************/

// const previewImageClose = previewImageModal.querySelector(".modal__close");
// const previewImageElement = previewImageModal.querySelector(
//   ".modal__preview-image"
// );
// const previewImageText = previewImageModal.querySelector(
//   ".modal__preview-text"
// );

/**********
 * ARRAYS *
 **********/
// const modals = [profileEditModal, addNewCardModal, previewImageModal];

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    (name, link) => {
      newImagePopup.open(name, link);
    },
    (card) => {
      //isLiked ? api.dislikeCard(id) : api.likeCard(id);
      if (card.isLiked) {
        return api
          .dislikeCard(card.id)
          .then((res) => {
            card.disLikeCard();
            card.isLiked = !card.isLiked;
          })
          .catch((err) => {
            console.error(`${err}. Cannot dislike like button`);
            //messageModal.setMessage(`${err}. Cannot dislike like button`)
            //messageModal.open();
          });
      } else {
        return api.likeCard(card.id).then((res) => {
          card.likeCard();
          card.isLiked = !card.isLiked;
        });
      }
    },
    handleDeleteClick
  );
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
  profileEditPopup.setLoading(true);
  api.updateUserInfo(formData).then((res) => {
    userInfo.setUserInfo(formData.name, formData.job);
    profileEditPopup.close();
  });
}
function handleAddCardFormSubmit(formData) {
  newCardPopup.setLoading(true);
  const { title, imageUrl } = formData;
  api
    .createCard({
      name: title,
      link: imageUrl,
    })
    .then((card) => {
      renderCard(card);
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

/*********************
 * DELETE CARD POPUP *
 *********************/
const cardDeletePopup = new PopupWithConfirmation("#delete__card-modal");
// cardDeletePopup.setEventListeners();

function handleDeleteClick(card) {
  cardDeletePopup.setSubmitAction(() => {
    cardDeletePopup.setLoading(true);
    return api.deleteCard(card.id).then((res) => {
      card.deleteCard();
    });
  });
  cardDeletePopup.open();
}

// function handleConfirmFormSubmit() {
//   //api.deleteCard(cardid).then.apply.
// }
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

/*********************
 * AVATAR EDIT POPUP *
 *********************/
const avatarEditPopup = new PopupWithForm("#avatar__edit-modal", (formData) => {
  avatarEditPopup.setLoading(true);
  api.setUserAvatar(formData.avatar).then((res) => {
    userInfo.setAvatar(res.avatar);
    avatarEditPopup.close();
  });
});

avatarEditPopup.setEventListeners();

/******************************
 * AVATAR EDIT EVENT LISTENER *
 ******************************/
profileAvatar.addEventListener("click", () => {
  avatarEditPopup.open();
});

/******************
 * POPUPWITHIMAGE *
 ******************/
const newImagePopup = new PopupWithImage("#preview__image-modal");
newImagePopup.setEventListeners();

/*************
 * USER INFO *
 *************/
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user.name, user.about);
  userInfo.setAvatar(user.avatar);
});

// declare, but don't assign a value
let cardSection;

api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section(
      { items: cards.reverse(), renderer: renderCard },
      ".cards__list"
    );

    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });
