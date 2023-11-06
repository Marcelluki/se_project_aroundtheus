!function(){"use strict";class e{constructor(e,t,s){let{name:r,link:o}=e;this._name=r,this._link=o,this._cardSelector=t,this._handleImageClick=s}_setEventListeners(){this._cardElement.querySelector(".cards__like-button").addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".cards__delete-button").addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardElement.querySelector(".cards__image").addEventListener("click",(()=>{this._handleImageClick(this._name,this._link)}))}_handleDeleteCard(){this._cardElement.remove()}_handleLikeIcon(){this._cardElement.querySelector(".cards__like-button").classList.toggle("cards__like-button_active")}getView(){const e=this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".cards__list-item").cloneNode(!0),t=e.querySelector(".cards__image");return t.src=this._link,t.alt=this._name,e.querySelector(".cards__title").textContent=this._name,this._setEventListeners(),e}}class t{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._submitButton=this._form.querySelector(this._submitButtonSelector)}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}toggleButtonState(){if(this._hasInvalidInput(this._inputEls))return this._submitButton.classList.add(this._inactiveButtonClass),void(this._submitButton.disabled=!0);this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_hasInvalidInput(e){return!e.every((e=>e.validity.valid))}_checkInputValidity(){this._inputEls.forEach((e=>{if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}))}_setEventListeners(){this._inputEls=[...this._form.querySelectorAll(this._inputSelector)],this._inputEls.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(this._form,e),this.toggleButtonState(this._submitButton)}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened")}close(){this._popupElement.classList.remove("modal_opened")}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popupElement.querySelector(".modal__close").addEventListener("click",(()=>{this.close()})),document.addEventListener("keydown",this._handleEscClose),this._popupElement.addEventListener("click",(e=>{e.target.classList.contains("modal_opened")&&this.close()}))}}class r extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t,this._inputItems=this._popupForm.querySelector(".modal__input")}close(){this._popupForm.reset(),super.close()}_getInputValues(){const e={};return this._inputItems.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",this._handleFormSubmit)}}const o=[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],n=document.querySelector("#profile__edit-button"),i=document.querySelector("#profile__edit-modal"),a=(i.querySelector(".modal__close"),document.querySelector(".profile__title")),l=document.querySelector(".profile__description"),c=document.querySelector("#profile-title-input"),u=document.querySelector("#profile-description-input"),_=i.querySelector(".modal__form"),d=document.querySelector("#card__add-modal"),m=(d.querySelector(".modal__close"),document.querySelector("#card-template").content.firstElementChild,document.querySelector(".cards__list")),p=document.querySelector("#profile__add-button"),h=d.querySelector("#add__card-form"),v=h.querySelector(".modal__input_type_title"),S=h.querySelector(".modal__input_type_url"),E=document.querySelector("#preview__image-modal");function y(t){return new e(t,"#card-template",((e,t)=>{k.open(e,t)})).getView()}function f(e){const t=y(e);m.prepend(t)}E.querySelector(".modal__close"),E.querySelector(".modal__preview-image"),E.querySelector(".modal__preview-text"),o.forEach((e=>{const t=y(e);m.prepend(t)}));const g={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},q=new t(g,_),w=new t(g,h);w.enableValidation(),q.enableValidation();const L=new r("#card__add-modal",(function(e){e.preventDefault(),f({name:v.value,link:S.value}),L.close(),h.reset(),w.toggleButtonState()}));L.setEventListeners(),p.addEventListener("click",(()=>{L.open()}));const b=new r("#profile__edit-modal",(function(e){e.preventDefault(),a.textContent=c.value,l.textContent=u.value,b.close()}));b.setEventListeners(),n.addEventListener("click",(()=>{const e=C.getUserInfo();c.value=e.name,u.value=e.job,b.open()}));const k=new class extends s{constructor(e){super({popupSelector:e}),this._image=this._popupElement.querySelector(".modal__preview-image"),this._description=this._popupElement.querySelector(".modal__preview-text")}open(e,t){this._image.src=t,this._image.alt=e,this._description.textContent=e,super.open()}close(){super.close()}}("#preview__image-modal");k.setEventListeners();const C=new class{constructor(e,t){this._name=document.querySelector(e),this._job=document.querySelector(t)}getUserInfo(){return{name:this._name.textContent,job:this._job.textContent}}setUserInfo(e,t){this._name.textContent=e,this._job.textContent=t}}(".profile__title",".profile__description");new class{constructor(e,t){let{items:s,renderer:r}=e;this._items=s,this._container=t,this._renderer=r}_renderItems(){this._items.forEach(this._renderer)}addItem(e){this._container.prepend(e)}}({items:o,renderer:f},".cards__list-item")._renderItems()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FFQUksWUFBQUEsR0FDRTFILEtBQUt1SCxPQUFPakUsUUFBUXRELEtBQUt5SCxVQUMzQixDQUVBRSxPQUFBQSxDQUFRQyxHQUNONUgsS0FBS3dILFdBQVdsQixRQUFRc0IsRUFDMUIsR0g2TkEsQ0FBRVAsTUFBT3BDLEVBQWNxQyxTQUFVbEIsR0FDakMscUJBRVVzQixjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rIH0sIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xyXG4gIH1cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBMSUtFIEJVVFRPTlxyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gREVMRVRFIEJVVFRPTlxyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2RlbGV0ZS1idXR0b25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpO1xyXG4gICAgICB9KTtcclxuICAgIC8vICAgSU1BR0UgUFJFVklFV1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2VJY29uKCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtYnV0dG9uXCIpXHJcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICBjb25zdCBub2RlID0gKHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0LWl0ZW1cIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgY29uc3QgY2FyZEltYWdlRWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpO1xyXG4gICAgY2FyZEltYWdlRWwuc3JjID0gdGhpcy5fbGluaztcclxuICAgIGNhcmRJbWFnZUVsLmFsdCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgY29uc3QgY2FyZFRpdGxlRWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX3RpdGxlXCIpO1xyXG4gICAgY2FyZFRpdGxlRWwudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtID0gZm9ybUVsO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0RWxzKSkge1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSB7XHJcbiAgICByZXR1cm4gIWlucHV0TGlzdC5ldmVyeSgoaW5wdXRFbCkgPT4gaW5wdXRFbC52YWxpZGl0eS52YWxpZCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KCkge1xyXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0RWxzID0gWy4uLnRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XHJcblxyXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KHRoaXMuX2Zvcm0sIGlucHV0RWwpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5fc3VibWl0QnV0dG9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5lZFwiKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5faW5wdXRJdGVtcyA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbnB1dFwiKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRJdGVtcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWtlLWxvdWlzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhdGVtYXIuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3Zhbm9pc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogRWxlbWVudHMgcHJvZmlsZSBlZGl0IG1vZGFsICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgcHJvZmlsZUVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9fZWRpdC1tb2RhbFwiKTtcclxuY29uc3QgcHJvZmlsZUVkaXRDbG9zZSA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XHJcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXHJcbik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybSA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFbGVtZW50cyBOZXcgQ2FyZCBNb2RhbCAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IGFkZE5ld0NhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZF9fYWRkLW1vZGFsXCIpO1xyXG5jb25zdCBhZGROZXdDYXJkQ2xvc2VCdXR0b24gPSBhZGROZXdDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENhcmQgdGVtcGxhdGUgYW5kIGNhcmQgbGlzdCAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCBjYXJkVGVtcGxhdGUgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5jb25zdCBjYXJkTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENhcmQgYWRkIEJ1dHRvbiAvIEZvcm0gKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IGFkZE5ld0NhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcbmNvbnN0IGFkZE5ld0NhcmRGb3JtID0gYWRkTmV3Q2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX19jYXJkLWZvcm1cIik7XHJcbmNvbnN0IGNhcmRUaXRsZUlucHV0ID0gYWRkTmV3Q2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV90aXRsZVwiKTtcclxuY29uc3QgY2FyZFVybElucHV0ID0gYWRkTmV3Q2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV91cmxcIik7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBQUkVWSUVXIElNQUdFIE1PREFMICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCBwcmV2aWV3SW1hZ2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlld19faW1hZ2UtbW9kYWxcIik7XHJcbmNvbnN0IHByZXZpZXdJbWFnZUNsb3NlID0gcHJldmlld0ltYWdlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbmNvbnN0IHByZXZpZXdJbWFnZUVsZW1lbnQgPSBwcmV2aWV3SW1hZ2VNb2RhbC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCJcclxuKTtcclxuY29uc3QgcHJldmlld0ltYWdlVGV4dCA9IHByZXZpZXdJbWFnZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIubW9kYWxfX3ByZXZpZXctdGV4dFwiXHJcbik7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBSRU1PVkUgQ0FSRCwgT1BFTiBBTkQgQ0xPU0UgTU9EQUwgRlVOQ1RJT05TXHJcbiAqID9JbmNsdWRlcyBcIkVzY1wiIGtleSBsb2dpYyAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIGZ1bmN0aW9uIG9wZW5Qb3B1cChtb2RhbCkge1xyXG4vLyAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbi8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VCeUVzY2FwZSk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY2xvc2VQb3B1cChtb2RhbCkge1xyXG4vLyAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbi8vICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VCeUVzY2FwZSk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY2xvc2VCeUVzY2FwZShldnQpIHtcclxuLy8gICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4vLyAgICAgY29uc3Qgb3BlbmVkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKTtcclxuLy8gICAgIGlmIChvcGVuZWRQb3B1cCkge1xyXG4vLyAgICAgICBjbG9zZVBvcHVwKG9wZW5lZFBvcHVwKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8qKioqKioqKioqXHJcbiAqIEFSUkFZUyAqXHJcbiAqKioqKioqKioqL1xyXG5jb25zdCBtb2RhbHMgPSBbcHJvZmlsZUVkaXRNb2RhbCwgYWRkTmV3Q2FyZE1vZGFsLCBwcmV2aWV3SW1hZ2VNb2RhbF07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXcgQ2FyZChjYXJkRGF0YSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgbmV3SW1hZ2VQb3B1cC5vcGVuKG5hbWUsIGxpbmspO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjYXJkRWxlbWVudC5nZXRWaWV3KCk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRGF0YSkge1xyXG4gIGNvbnN0IGNhcmROb2RlID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XHJcblxyXG4gIGNhcmRMaXN0RWwucHJlcGVuZChjYXJkTm9kZSk7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogRVZFTlQgSEFORExFUlMgRk9SIFNVTUJJVFRJTkcgUFJPRklMRSBBTkQgQ0FSRCBEQVRBICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvZmlsZVRpdGxlLnRleHRDb250ZW50ID0gcHJvZmlsZVRpdGxlSW5wdXQudmFsdWU7XHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgcHJvZmlsZUVkaXRQb3B1cC5jbG9zZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmFtZSA9IGNhcmRUaXRsZUlucHV0LnZhbHVlO1xyXG4gIGNvbnN0IGxpbmsgPSBjYXJkVXJsSW5wdXQudmFsdWU7XHJcbiAgcmVuZGVyQ2FyZChcclxuICAgIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgbGluayxcclxuICAgIH0sXHJcbiAgICBjYXJkTGlzdEVsXHJcbiAgKTtcclxuICBuZXdDYXJkUG9wdXAuY2xvc2UoKTtcclxuICBhZGROZXdDYXJkRm9ybS5yZXNldCgpO1xyXG4gIGFkZEZvcm1WYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFVkVOVCBMSVNURU5FUlMgKlxyXG4gKioqKioqKioqKioqKioqKioqKi9cclxuLy8gcHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBwcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudDtcclxuLy8gICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcclxuLy8gICBvcGVuUG9wdXAocHJvZmlsZUVkaXRNb2RhbCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gcHJvZmlsZUVkaXRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgIGNsb3NlUG9wdXAocHJvZmlsZUVkaXRNb2RhbCk7XHJcbi8vIH0pO1xyXG4vLyBhZGROZXdDYXJkQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBjbG9zZVBvcHVwKGFkZE5ld0NhcmRNb2RhbCk7XHJcbi8vIH0pO1xyXG4vLyBwcmV2aWV3SW1hZ2VDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgIGNsb3NlUG9wdXAocHJldmlld0ltYWdlTW9kYWwpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGFkZE5ld0NhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBvcGVuUG9wdXAoYWRkTmV3Q2FyZE1vZGFsKTtcclxuLy8gfSk7XHJcbi8vIHByb2ZpbGVFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KTtcclxuLy8gYWRkTmV3Q2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBZGRDYXJkRm9ybVN1Ym1pdCk7XHJcblxyXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcclxuICBjb25zdCBjYXJkTm9kZSA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xyXG4gIGNhcmRMaXN0RWwucHJlcGVuZChjYXJkTm9kZSk7XHJcbn0pO1xyXG4vKioqKioqKioqKioqKipcclxuICogVmFsaWRhdGlvbiAqXHJcbiAqKioqKioqKioqKioqKi9cclxuY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xyXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogRURJVCBGT1JNIFZBTElEQVRPUiAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXHJcbiAgcHJvZmlsZUVkaXRGb3JtXHJcbik7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEFERCBGT1JNIFZBTElEQVRPUiAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgYWRkTmV3Q2FyZEZvcm0pO1xyXG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogTkVXIENBUkQgRk9STSBQT1BVUCAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNvbnN0IG5ld0NhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIFwiI2NhcmRfX2FkZC1tb2RhbFwiLFxyXG4gIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0XHJcbik7XHJcbm5ld0NhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuYWRkTmV3Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG5ld0NhcmRQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKipcclxuICogUFJPRklMRSBFRElUIFBPUFVQICpcclxuICoqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHByb2ZpbGVFZGl0UG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIiNwcm9maWxlX19lZGl0LW1vZGFsXCIsXHJcbiAgaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXRcclxuKTtcclxucHJvZmlsZUVkaXRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBwcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IHVzZXIubmFtZTtcclxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHVzZXIuam9iO1xyXG4gIHByb2ZpbGVFZGl0UG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKipcclxuICogUE9QVVBXSVRISU1BR0UgKlxyXG4gKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCBuZXdJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiI3ByZXZpZXdfX2ltYWdlLW1vZGFsXCIpO1xyXG5uZXdJbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKioqKioqKioqKioqKlxyXG4gKiBVU0VSIElORk8gKlxyXG4gKioqKioqKioqKioqKi9cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oXCIucHJvZmlsZV9fdGl0bGVcIiwgXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XHJcblxyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHsgaXRlbXM6IGluaXRpYWxDYXJkcywgcmVuZGVyZXI6IHJlbmRlckNhcmQgfSxcclxuICBcIi5jYXJkc19fbGlzdC1pdGVtXCJcclxuKTtcclxuY2FyZFNlY3Rpb24uX3JlbmRlckl0ZW1zKCk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENMT1NFIE1PREFMIEJZIENMSUNLICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIG1vZGFscy5mb3JFYWNoKChtb2RhbCkgPT4ge1xyXG4vLyAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuLy8gICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm1vZGFsXCIpKSB7XHJcbi8vICAgICAgIGNsb3NlUG9wdXAobW9kYWwpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIubW9kYWxfX3ByZXZpZXctdGV4dFwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGpvYikge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSk7XHJcbiAgICB0aGlzLl9qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX2pvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdXNlckRhdGE7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhuYW1lLCBqb2IpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fam9iLnRleHRDb250ZW50ID0gam9iO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXIpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCh0aGlzLl9yZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiX3JlZiIsImNhcmRTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJuYW1lIiwibGluayIsInRoaXMiLCJfbmFtZSIsIl9saW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2NhcmRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZUljb24iLCJfaGFuZGxlRGVsZXRlQ2FyZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldFZpZXciLCJub2RlIiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZEltYWdlRWwiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiX3N1Ym1pdEJ1dHRvbiIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWwiLCJlcnJvck1lc3NhZ2VFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRFbHMiLCJkaXNhYmxlZCIsImlucHV0TGlzdCIsImV2ZXJ5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJmb3JFYWNoIiwicXVlcnlTZWxlY3RvckFsbCIsImVuYWJsZVZhbGlkYXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50Iiwib3BlbiIsImNsb3NlIiwiX2hhbmRsZUVzY0Nsb3NlIiwiZXZ0Iiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRJdGVtcyIsInJlc2V0IiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiaW5pdGlhbENhcmRzIiwicHJvZmlsZUVkaXRCdXR0b24iLCJwcm9maWxlRWRpdE1vZGFsIiwicHJvZmlsZVRpdGxlIiwicHJvZmlsZURlc2NyaXB0aW9uIiwicHJvZmlsZVRpdGxlSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsInByb2ZpbGVFZGl0Rm9ybSIsImFkZE5ld0NhcmRNb2RhbCIsImNhcmRMaXN0RWwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFkZE5ld0NhcmRCdXR0b24iLCJhZGROZXdDYXJkRm9ybSIsImNhcmRUaXRsZUlucHV0IiwiY2FyZFVybElucHV0IiwicHJldmlld0ltYWdlTW9kYWwiLCJjcmVhdGVDYXJkIiwiY2FyZERhdGEiLCJuZXdJbWFnZVBvcHVwIiwicmVuZGVyQ2FyZCIsImNhcmROb2RlIiwicHJlcGVuZCIsInZhbGlkYXRpb25TZXR0aW5ncyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsIm5ld0NhcmRQb3B1cCIsInByb2ZpbGVFZGl0UG9wdXAiLCJ1c2VyIiwidXNlckluZm8iLCJnZXRVc2VySW5mbyIsImpvYiIsIl9pbWFnZSIsIl9kZXNjcmlwdGlvbiIsIl9qb2IiLCJzZXRVc2VySW5mbyIsImNvbnRhaW5lciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfY29udGFpbmVyIiwiX3JlbmRlcmVyIiwiX3JlbmRlckl0ZW1zIiwiYWRkSXRlbSIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9