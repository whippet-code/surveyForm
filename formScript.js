// create array of ratings selections
let ratingsElementsArray = document.querySelectorAll(".rating");

let selectedRating;

// for each rating in the array, add an eventListener
// when clicked, add a class of "selected" to the element
// if another element has the class of "selected", remove it
// set the selectedRating variable to the value of the element
for (el of ratingsElementsArray) {
  let ratingValue = el.id;
  el.addEventListener("click", function () {
    selectedRating = ratingValue;
    let previousSelectedElement = document.querySelector(".selected");
    if (previousSelectedElement) {
      previousSelectedElement.classList.remove("selected");
    }
    let element = document.getElementById(ratingValue);
    element.classList.add("selected");
  });
}

// get button element
let submitButton = document.querySelector(".btn");
//add an eventListener to button to send rating and trigger thankyou message.
submitButton.addEventListener("click", () => {
  // ensure a rating has been selected
  if (selectedRating == undefined) {
    console.log("Please select a rating");
  } else {
    console.log(selectedRating);
    thankyouMessage();
  }
});

// funtion to add a thankyou message to page after submit button is clicked
const thankyouMessage = () => {
  let thankyouElement = document.querySelector(".thankyou");
  thankyouElement.innerHTML = "Thank you for your feedback!";
};
