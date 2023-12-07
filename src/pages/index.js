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
  profileAvatarForm,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e9b30f62-f32d-45b6-96ae-c516b6b7d5cd",
    "Content-Type": "application/json",
  },
});

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    (name, link) => {
      newImagePopup.open(name, link);
    },
    (card) => {
      if (card.isLiked) {
        return api
          .dislikeCard(card.id)
          .then((res) => {
            card.disLikeCard();
            card.isLiked = !card.isLiked;
          })
          .catch((err) => {
            console.error(`${err}. Cannot dislike like button`);
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
  api
    .updateUserInfo(formData)
    .then(() => {
      userInfo.setUserInfo(formData.name, formData.job);
      profileEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileEditPopup.setLoading(false);
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
      newCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newCardPopup.setLoading(false);
    });

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
    return api
      .deleteCard(card.id)
      .then((res) => {
        card.deleteCard();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        cardDeletePopup.setLoading(false);
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
  addFormValidator.toggleButtonState();
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

const avatarFormValidator = new FormValidator(
  validationSettings,
  profileAvatarForm
);
avatarFormValidator.enableValidation();
/*********************
 * AVATAR EDIT POPUP *
 *********************/
const avatarEditPopup = new PopupWithForm("#avatar__edit-modal", (formData) => {
  avatarEditPopup.setLoading(true);
  api
    .setUserAvatar(formData.avatar)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
      avatarEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarEditPopup.setLoading(false);
    });
});

avatarEditPopup.setEventListeners();
/******************************
 * AVATAR EDIT EVENT LISTENER *
 ******************************/
profileAvatar.addEventListener("click", () => {
  avatarEditPopup.open();
  avatarFormValidator.toggleButtonState();
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

api
  .getUserInfo()
  .then((user) => {
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setAvatar(user.avatar);
  })
  .catch((err) => {
    console.error(err);
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
