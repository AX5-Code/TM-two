let sps = document.querySelectorAll(".sp");
let scr = document.querySelector(".Screens");
let trigger = document.querySelector(".flout");
//showing or hiding the trigger scroll to top
window.onscroll = () => {
	if (scrollY >= 350) {
		trigger.style.display = "block";
	} else {
		trigger.style.display = "none";
	}
	// progress bar value animation
	if (window.scrollY >= scr.offsetTop - 200) {
		sps.forEach((sp, i) => {
			sp.value = sp.dataset.vm;
			sp.style.setProperty(`--p${++i}`, `${sp.dataset.vm}%`);
		});
	}
};
// if clicked the trigger scroll to top
trigger.onclick = () => {
	window.scrollTo({ top: "0", behavior: "smooth" });
};
