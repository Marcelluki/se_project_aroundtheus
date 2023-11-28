export const initialCards = [
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

export const profileEditButton = document.querySelector(
  "#profile__edit-button"
);
export const profileEditModal = document.querySelector("#profile__edit-modal");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileAvatar = document.querySelector(".profile__image");
export const profileAvatarInput = document.querySelector("#avata-url-input");
export const newName = profileTitleInput.value;
export const newJob = profileDescriptionInput.value;
export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addNewCardModal = document.querySelector("#card__add-modal");
export const cardListEl = document.querySelector(".cards__list");
export const addNewCardButton = document.querySelector("#profile__add-button");
export const addNewCardForm = addNewCardModal.querySelector("#add__card-form");
export const cardTitleInput = addNewCardForm.querySelector(
  ".modal__input_type_title"
);

export const cardUrlInput = addNewCardForm.querySelector(
  ".modal__input_type_url"
);
export const previewImageModal = document.querySelector(
  "#preview__image-modal"
);
export const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
