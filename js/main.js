/* Adding an event listener to the button. When the button is clicked, it toggles the dark-mode class
on the body. */
document.querySelector("#btn").addEventListener("click", () => {
    /* Toggling the class "dark-mode" on the body. */
    document.body.classList.toggle("dark-mode");
});