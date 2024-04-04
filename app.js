const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");
const popUp = document.getElementById("pop-up");

// a function that hides the pop and then makes it visible after 10 seconds
function popUpAppear() {
  setTimeout(function () {
    popUp.classList.remove("pop-up-hidden");
    popUp.classList.add("pop-up-visible");
  }, 10000);
}

// when the user clicks yes, the pop-up is hidden
acceptButton.addEventListener("click", () => {
  localStorage.setItem("userResponse", "yes");
  popUp.classList.remove("pop-up-visible");
  popUp.classList.add("pop-up-hidden");
});

// when the user clicks no, the pop-up is hidden and then reappears after 10 seconds
declineButton.addEventListener("click", () => {
  localStorage.setItem("userResponse", "no");
  popUp.classList.remove("pop-up-visible");
  popUp.classList.add("pop-up-hidden");
  popUpAppear();
});

// function to check user's previous response - display pop-up if response is no
function userResponse() {
  if (localStorage.getItem("userResponse") === "yes") {
    popUp.classList.add("pop-up-hidden");
  } else {
    popUpAppear();
  }
}

// the pop-up appears on the page after 10 seconds if the user has not already clicked yes
userResponse();
