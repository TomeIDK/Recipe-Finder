const btnSubmit = document.getElementById("btn-submit");
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const msg = document.getElementById("message");
const errorList = document.getElementById("error-list");
let error = document.createElement("li");
error.classList.add("error");
let errors = 0;

btnSubmit.addEventListener("click", () => {
  errorList.innerHTML = "";
  errors = 0;
  validateForm();
});

function validateForm() {
  if (hasNumber(fname.value)) {
    addError("First name cannot contain a number.");
    fname.style.outlineWidth = "1px";
    fname.style.outlineColor = "red";
    fname.style.outlineStyle = "solid";
    errors++;
  } else if (fname.value.length === 0) {
    addError("Please fill in your first name.");
    fname.style.outlineWidth = "1px";
    fname.style.outlineColor = "red";
    fname.style.outlineStyle = "solid";
    errors++;
  } else {
    fname.style.outline = "";
  }
  if (hasNumber(lname.value)) {
    addError("Last name cannot contain a number.");
    lname.style.outlineWidth = "1px";
    lname.style.outlineColor = "red";
    lname.style.outlineStyle = "solid";
    errors++;
  } else if (lname.value.length === 0) {
    addError("Please fill in your last name.");
    lname.style.outlineWidth = "1px";
    lname.style.outlineColor = "red";
    lname.style.outlineStyle = "solid";
    errors++;
  } else {
    lname.style.outline = "";
  }
  if (!hasNumber(age.value)) {
    addError("Please enter a valid age.");
    age.style.outlineWidth = "1px";
    age.style.outlineColor = "red";
    age.style.outlineStyle = "solid";
    errors++;
  } else if (age.value < 1) {
    addError("You need to be at least 1 year old.");
    age.style.outlineWidth = "1px";
    age.style.outlineColor = "red";
    age.style.outlineStyle = "solid";
    errors++;
  } else {
    age.style.outline = "";
  }
  if (!email.value.includes("@")) {
    addError("Please enter a valid email");
    email.style.outlineWidth = "1px";
    email.style.outlineColor = "red";
    email.style.outlineStyle = "solid";
    errors++;
  } else {
    email.style.outline = "";
  }
  if (msg.value < 1) {
    addError("Please enter a message.");
    msg.style.outlineWidth = "1px";
    msg.style.outlineColor = "red";
    msg.style.outlineStyle = "solid";
    errors++;
  } else {
    msg.style.outline = "";
  }
  if (errors === 0) {
    form.submit();
  }
}

function hasNumber(value) {
  return /\d/.test(value);
}

function addError(errorMessage) {
  let newError = error.cloneNode(true);
  newError.innerText = errorMessage;
  errorList.appendChild(newError);
}

let numbers = [5, 9, 48, 3, 55, 663];
calcSum(...numbers);

function calcSum(...numbers){
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    console.log(sum);
}
