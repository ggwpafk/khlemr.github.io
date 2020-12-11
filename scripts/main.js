/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, Oprah! XP lol'; */

/***************************************************
              Adding an image changer 
***************************************************/
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");

  if (mySrc === "images/oprah.png") {
    myImage.setAttribute("src", "images/oprah2.png");
  } else if (mySrc === "images/oprah2.png") {
    myImage.setAttribute("src", "images/oprah3.png");
  } else {
    myImage.setAttribute("src", "images/oprah.png");
  }
};

/*****************************************************
         Adding a personalized welcome message 
******************************************************/

// taking references & storing each in a variable
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// check whether 'name' data exists
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Don't be sorry. Be Better. " + storedName + "!";
}

function setUserName() {
  let myName = prompt("Please enter your name.");

  // Check if user hasn't entered a blank name
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Don't be sorry. Be Better. " + myName + "!";
  }
}

// onclick event handler on the button
myButton.onclick = function () {
  //allows the user to enter a different name
  setUserName();
};
