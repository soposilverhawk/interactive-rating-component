document.addEventListener("DOMContentLoaded", () => {
    // if Storage is not undefined proceed with the block of code:
    if (typeof(Storage) !== "undefined") {
        // retrievew the value of the selected rating from the storage (get it by referencing the key name)
        const ratingValue = localStorage.getItem("rating");
        // store user rating display span
        const userRating = document.querySelector("#user-rating-display");
        // set user rating display span's textContent to ratingValue retrieved from the loaded storage
        userRating.textContent = ratingValue;
    } 
    // if the storage type is "undefined" then log an error
    else {
        console.log("Not supported")
    }
})