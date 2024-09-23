let loginBtn = document.querySelector("#LoginBtn");
let UserName = document.querySelector("#text");
let password = document.querySelector("#password");
let messageFaild = document.querySelector("#FaildLogin");
let messageSuccessfuly = document.querySelector("#messageSuccessfuly");

loginBtn.addEventListener("click", () => {
  let UserNameValue = UserName.value;
  let passwordValue = UserName.value;

  if (UserNameValue.length >= 2 || passwordValue.length >= 2) {
    localStorage.setItem("user", UserNameValue);
    messageSuccessfuly.style.opacity = "1";
    setTimeout(() => {
      messageSuccessfuly.style.opacity = "0";
      window.location.replace("/index.html");
    }, 1000);
  } else {
    // <!-- Message -->
    messageFaild.style.opacity = "1";
    setTimeout(() => {
      messageFaild.style.opacity = "0";
    }, 2000);
  }
});
