const theme = document.querySelector("#theme");

const logo = document.querySelector("#img")

function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
console.log(theme.value)
// if the value is dark then:

// add the dark class to the body
body = document.querySelector('body')
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
if (theme.value === "dark") {
    
    console.log("dark")
    logo.src = "byui-dark.png"
    body.classList.add("dark")
} else {
    console.log("light")
    logo.src = "byui.webp"
    body.classList.remove("dark")
    ;
}

}




// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
theme.addEventListener('change', changeTheme);
