let Password = document.querySelector("#Password");
let ConfirmPassword = document.querySelector("#ConfirmPassword");
let confirm = document.querySelector(".confirm>p");
console.log(confirm);
var check = function () {
  if (Password.value == ConfirmPassword.value) {
    confirm.style.color = "green";
    confirm.innerHTML = "matching";
  } else {
    confirm.style.color = "red";
    confirm.innerHTML = "not matching";
  }
};
Password.addEventListener("input", (event) => {
  check();
});
ConfirmPassword.addEventListener("input", (event) => {
  check();
});
