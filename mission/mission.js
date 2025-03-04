const theme = document.querySelector("#theme");

const logo = document.querySelector("#img")

function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
console.log(theme.value)
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
if (theme === "dark") {
    logo.src = "byui-logo_white (1).png"
} else {
    logo.src = "byui.webp";
}
}




// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
theme.addEventListener('change', changeTheme());
