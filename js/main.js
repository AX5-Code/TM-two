let link = document.querySelector(".linkes");
let ul = document.querySelector("#ul");
let minupanel = document.querySelector("#minupanel");
function minu() {
	if (ul.style.display == "none") {
		ul.style.display = "block";
	} else {
		ul.style.display = "none";
	}
}
function valed() {
	ul.style.display = "none";
}
link.addEventListener("click", minu);
minupanel.addEventListener("mouseenter", valed);