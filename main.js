const form = document.getElementById("grading-choice-form");
const ratingButtons = document.querySelectorAll(".grading-choice");

form.addEventListener("submit", (e) => {
    // prevent default behavior of the form
    e.preventDefault();
    // store the user-selected rating in a variable called "selectedRating"
    const selectedRating = document.querySelector(".grading-choice.selected")
    // if the user did not select any rating throw an alert and return from the conditional
    if(!selectedRating) {
        alert("Please select a rating before submitting.");
        return
    }
    // store the user-selected rating's value (value is indicated in html button tag)
    const ratingValue = selectedRating.value;
    // store the selected rating's value in localStorage. "rating" represents key, while ratingValue is the value of the selected rating
    localStorage.setItem("rating", ratingValue);
    // redirect the page to the submitted.html file (thank you page)
    window.location.href = "submitted.html"
})

// for each button from ratingButtons collection create click event listener
ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
        // for each of the collection's buttons remove class of "selected"
        ratingButtons.forEach(btn => btn.classList.remove("selected"))
        // for the clicked button add class of "selected"
        button.classList.add("selected")
    })
})