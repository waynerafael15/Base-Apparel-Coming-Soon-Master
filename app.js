const formEmail = document.querySelector("#post__form-email");
const errorIcon = document.querySelector(".post__form-img-error");
const errorText = document.querySelector(".post__error");
const formBtn = document.querySelector(".post__form-btn");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

formBtn.addEventListener("click", function () {
  if (formEmail.value.match(regExp)) {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  } else {
    errorIcon.style.display = "block";
    errorText.style.display = "block";
    formEmail.style.borderColor = "red";
    formEmail.style.background = "none";
  }

  if (formEmail.value == "") {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  }
});

formEmail.addEventListener("keyup", function () {
  if (formEmail.value.match(regExp)) {
    formEmail.style.background = "rgba(191,248,202, .5";
  } else {
    formEmail.style.background = "rgba(255, 0, 0, .5)";
  }

  if (formEmail.value == "") {
    formEmail.style.background = "none";
  }
});
