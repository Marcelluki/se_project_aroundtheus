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

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

/**********
 * ARRAYS *
 **********/
const modals = [profileEditModal, addNewCardModal, previewImageModal];
/***************************
 * Card TEMPLATE FUNCTIONS *
 ***************************/
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardDeleteButton = cardElement.querySelector(".cards__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  /**********************
   * Card Preview Popup *
   **********************/
  const cardImageEl = cardElement.querySelector(".cards__image");
  cardImageEl.addEventListener("click", () => {
    previewImageElement.src = cardData.link;
    previewImageText.textContent = cardData.name;
    previewImageElement.alt = cardData.name;
    openPopup(previewImageModal);
  });
  const cardTitleEl = cardElement.querySelector(".cards__title");
  /****************************************
   * Like Button Listener for Like ACTIVE *
   ****************************************/
  const likeButton = cardElement.querySelector(".cards__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("cards__like-button_active");
  });
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}
function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}
/*******************************************************
 * EVENT HANDLERS FOR SUMBITTING PROFILE AND CARD DATA *
 *******************************************************/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
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
  closePopup(addNewCardModal);
  addNewCardForm.reset();
}
/*******************
 * EVENT LISTENERS *
 *******************/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditClose.addEventListener("click", () => {
  closePopup(profileEditModal);
});
addNewCardCloseButton.addEventListener("click", () => {
  closePopup(addNewCardModal);
});
previewImageClose.addEventListener("click", () => {
  closePopup(previewImageModal);
});

addNewCardButton.addEventListener("click", () => {
  openPopup(addNewCardModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((renderCard) => {
  const cardElement = getCardElement(renderCard);
  cardListEl.prepend(cardElement);
});
/************************
 * CLOSE MODAL BY CLICK *
 ************************/

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (e) => {
    if (e.target.matches(".modal")) {
      closePopup(modal);
    }
  });
});
