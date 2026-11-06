//Get hold of elements from the HTML page 
const navList = document.querySelector("#navList");
const openIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");

// Make the openIcon respond to a 'click' event
openIcon.addEventListener("click", () => {
    toggleNav();
})

// Make the closeIcon respond to a 'click' event
closeIcon.addEventListener("click", () => {
    toggleNav();
})

// Toggle the hide css class for these elements
const toggleNav = () => {
    navList.classList.toggle('hide')
    openIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
}
