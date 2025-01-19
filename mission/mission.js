theme = document.getElementById("theme").addEventListener("change");

const themeSelector = // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme(light) {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
themeSelector.value
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

if (theme === "dark") {
    Image.src = "mission/byui-logo_white (1).png";
} else {
    Image.src = "mission/byui.webp";
}


// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
addEventListener("dark");