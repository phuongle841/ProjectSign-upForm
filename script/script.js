let Password = document.querySelector("#Password");
let ConfirmPassword = document.querySelector("#ConfirmPassword");
let confirm = document.querySelector("#confirm");
console.log(confirm);
let password = "";
Password.addEventListener("change", (event) => {
  password = event.target.value;
  console.log(event.target.value);
});
ConfirmPassword.addEventListener("input", (event) => {
  let confirmPassword = event.target.value;
  console.log(confirmPassword.localeCompare(password));
});
