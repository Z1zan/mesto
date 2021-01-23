(()=>{"use strict";var e={cardsTemplate:".card-template",cardContainer:document.querySelector(".elements"),formEdit:document.querySelector(".popup-edit"),formAdd:document.querySelector(".popup-add")},t={formSelectorEdit:".popup-edit",formSelectorAddImg:".popup-add",formSelector:".popup-form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__field_active",errorClass:"popup__form-field-error_active"},n=document.querySelector(".profile__edit-btn"),r=document.querySelector(".profile__name"),o=document.querySelector(".profile__job"),i=document.querySelector(".popup__field_name"),a=document.querySelector(".popup__field_job"),c=document.querySelector(".profile__add-btn"),s=document.querySelector(".popup-img"),u=document.querySelector(".popup-img__img"),l=document.querySelector(".popup-img__name");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".submit-avatar-btn");var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close-btn").addEventListener("click",(function(){e.close()})),this._popupSelector.querySelector(".popup__overlay").addEventListener("click",(function(){e.close()}))}}])&&f(t.prototype,n),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._popupForm=n._popupSelector.querySelector(".popup__container"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupForm.querySelectorAll(".popup__field"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;m(v(a.prototype),"setEventListeners",this).call(this),this._popupSelector.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){m(v(a.prototype),"close",this).call(this),this._popupSelector.reset()}}])&&h(t.prototype,n),a}(p);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._imgLink=t,r._imgName=n,r}return t=a,(n=[{key:"open",value:function(e,t){this._imgLink.src=t,this._imgLink.alt=e,this._imgName.textContent=e,S(w(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),a}(p);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n,r,o){var i=o.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._cardSelector=r,this._handleCardClick=i,this._element=this._getTemplate(),this._cardImgImg=this._element.querySelector(".element__image"),this._cardImgName=this._element.querySelector(".element__name"),this._cardDelete=this._element.querySelector(".element__trash"),this._cardLike=this._element.querySelector(".element__like-btn")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0).children[0]}},{key:"_deleteHandler",value:function(){this._element.remove(),this._element=null}},{key:"_likeHandler",value:function(){this._cardLike.classList.toggle("element__like-btn_active")}},{key:"_setListeners",value:function(){var e=this;this._cardDelete.addEventListener("click",(function(){e._deleteHandler()})),this._cardLike.addEventListener("click",(function(){e._likeHandler()})),this._cardImgImg.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._cardImgName.textContent=this._name,this._cardImgImg.alt=this._name,this._cardImgImg.src=this._link,this._setListeners(),this._element}}])&&j(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t,this._formElement=document.querySelector(t),this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._formList=Array.from(document.querySelectorAll(this._formSelector)),this._button=this._formElement.querySelector(this._submitButtonSelector),this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));this._formElement.querySelector("#".concat(e.id)).classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));this._formElement.querySelector("#".concat(e.id)).classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_getErrorMessage",value:function(e){return e.validationMessage}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=this._getErrorMessage(e);this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disabledButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled",!0)}},{key:"unDisabledButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disabledButton():this.unDisabledButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var e=this;this._formList.forEach((function(){var t=e._formElement.querySelector(e._submitButtonSelector);e._formElement.addEventListener("submit",(function(n){n.preventDefault(),e.disabledButton(t)})),e._setEventListeners()}))}}])&&I(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItemStart",value:function(e){this._containerSelector.prepend(e)}},{key:"addItemEnd",value:function(e){this._containerSelector.append(e)}},{key:"rendererItem",value:function(e){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&q(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job,r=e.avatar;this._name.textContent=t,this._job.textContent=n,this._avatar.src=r}}])&&x(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t,this._token=n,this._groupId=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this._token}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&T(t.prototype,n),e}(),A=(new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"264a260c-a5ff-4494-a8c2-9dd802b24892","Content-Type":"application/json"}}),new L(s,u,l));A.setEventListeners();var V=new R({nameSelector:r,jobSelector:o}),U=function(t){return new P(t.namePhoto,t.linkPhoto,e.cardsTemplate,{handleCardClick:function(){A.open(t.namePhoto,t.linkPhoto)}}).generateCard()},F=new B({items:[{namePhoto:"Архыз",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{namePhoto:"Челябинская область",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{namePhoto:"Иваново",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{namePhoto:"Камчатка",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{namePhoto:"Холмогорский район",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{namePhoto:"Байкал",linkPhoto:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){F.addItemEnd(U(e))}},e.cardContainer);F.rendererItem(),new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",token:"264a260c-a5ff-4494-a8c2-9dd802b24892"}).getInitialCards().then((function(e){F.rendererItem(e)}));var N=new O(t.formSelectorEdit,t);N.enableValidation();var H=new b(e.formEdit,{submitForm:function(e){V.setUserInfo(e),H.close()}});H.setEventListeners(),n.addEventListener("click",(function(){N.disabledButton(),H.open();var e=V.getUserInfo();i.value=e.name,a.value=e.job}));var M=new O(t.formSelectorAddImg,t);M.enableValidation();var z=new b(e.formAdd,{submitForm:function(e){F.addItemStart(U(e)),z.close()}});z.setEventListeners(),c.addEventListener("click",(function(){M.disabledButton(),z.open()}))})();