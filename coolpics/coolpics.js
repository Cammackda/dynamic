const menuButton = document.querySelector(".menu");

function toggleMenu() {
  const menu = document.querySelector(".navi");
  menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu);



function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
  document.querySelector(".viewer").remove()
}

function viewHandler(event) {


	// create a variable to hold the element that was clicked on from event.target
  
 const image = event.target
 console.log(image)

	// get the src attribute from that element and 'split' it on the "-"

let image_array = image.src.split("-")
console.log(image_array)

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

image_array[0] += "-full.jpeg"
console.log(image_array)
  
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

let body = document.querySelector("body")
  body.insertAdjacentHTML("afterbegin", viewerTemplate(image_array[0],image.alt))
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
const close = document.querySelector(".close-viewer")
close.addEventListener("click", closeViewer)

}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);