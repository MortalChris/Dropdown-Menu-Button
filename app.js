const button = document.getElementById("dropdown-button");
// button.addEventListener("click", () => {
//   const dropdown = document.getElementById("dropdown");

//     dropdown.classList.add("show");
// });
button.addEventListener("mouseover", (event) => {
    dropdown.classList.add("show");
});
button.addEventListener("mouseout", (event) => {
    dropdown.classList.remove("show");
});