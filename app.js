const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");
const popUp = document.getElementById("pop-up");

function popUpAppear() {
  setTimeout(function () {
    popUp.classList.remove("pop-up-hidden");
    popUp.classList.add("pop-up-visible");
  }, 10000);
}

acceptButton.addEventListener("click", () => {
  localStorage.setItem("userResponse", "yes");
  popUp.classList.remove("pop-up-visible");
  popUp.classList.add("pop-up-hidden");
});

declineButton.addEventListener("click", () => {
  localStorage.setItem("useResponse", "no");
  popUpAppear();
});

popUpAppear();
