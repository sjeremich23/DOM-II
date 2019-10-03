////////////////
// Mouseover //
//////////////
const navbar = document.querySelector(".main-navigation");
navbar.addEventListener("mouseover", () => {
	navbar.style.backgroundColor = "green";
});

////////////////
// Mouseleave //
//////////////
navbar.addEventListener("mouseleave", () => {
	navbar.style.backgroundColor = "";
});

//////////////
// Keydown //
////////////
const changeColor = document.querySelector("body");
changeColor.addEventListener("keydown", e => {
	if (e.keyCode == "65") {
		changeColor.style.color = "red";
	} else {
		addEventListener("keyup", () => {
			changeColor.style.color = "black";
		});
	}
});

////////////
// Wheel //
//////////
window.addEventListener("wheel", e => {
	let h2Color = document.querySelector(".home h2");
	h2Color.style.color = "blue";
});

//////////////////
// Drag / Drop //
////////////////
// FIXME:

const img = document.querySelector(".img-content img");
const setPlace = document.querySelector(".img-content");

img.addEventListener("dragstart", e => {
	console.log("start");
	img.style.border = "2px solid black";
});

img.addEventListener("dragend", e => {
	console.log("end");
});

///////////
// Load //
/////////
window.addEventListener("load", e => {
	alert("Welcome");
});

////////////
// Focus //
//////////
document.querySelector;

/////////////
// Resize //
///////////

/////////////
// Scroll //
///////////
const flex = document.querySelector(".inverse-content .text-content");
window.addEventListener("scroll", () => {
	flex.style.display = "flex";
	setTimeout(() => {
		flex.style.display = "";
	}, 500);
});

/////////////
// Select //
///////////

//////////////
// DbClick //
////////////
const img2 = document.querySelector(".intro img");
img2.addEventListener("dblclick", () => {
	img2.style.height = "150px";
	img2.style.width = "500px";
});

///////////////////////
// Stop Propagation //
/////////////////////
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => alert("Button clicked"));

// let h1 = document.querySelector(".intro p");
// h1.addEventListener("click", e => {
// 	e.stopPropagation();
// 	h1.style.border = "2px solid black";
// });
