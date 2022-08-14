import "./styles.css";

const password = document.getElementById("password");
const toggleBtn = document.getElementById("toggleIcon");

const lowerCase = document.querySelector(".lower");
const upperCase = document.querySelector(".upper");
const digit = document.querySelector(".number");
const specialChar = document.querySelector(".special");
const minLength = document.querySelector(".length");

// toggle hide password
toggleBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
});

password.onkeyup = (e) => {
  const data = e.target.value;
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  // lower case validation check
  lower.test(data)
    ? lowerCase.classList.add("validate")
    : lowerCase.classList.remove("validate");

  // upper case validation check
  upper.test(data)
    ? upperCase.classList.add("validate")
    : upperCase.classList.remove("validate");

  // number validation check
  number.test(data)
    ? digit.classList.add("validate")
    : digit.classList.remove("validate");

  // specialChar validation check
  special.test(data)
    ? specialChar.classList.add("validate")
    : specialChar.classList.remove("validate");

  // length validation check
  length.test(data)
    ? minLength.classList.add("validate")
    : minLength.classList.remove("validate");
};
