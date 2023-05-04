let sps = document.querySelectorAll(".sp");
let scr = document.querySelector(".Screens");
let progs = document.querySelectorAll(".Skills progress");
let fluty = document.querySelector(".flout");
window.onscroll = () => {
	if (scrollY >= 350) {
		fluty.style.display = "block";
	} else {
		fluty.style.display = "none";
	}
	if (window.scrollY >= scr.offsetTop - 150) {
		progs.forEach((prog) => {
			prog.value = prog.dataset.vm;
		});
		sps.forEach((sp, i) => {
			sp.style.setProperty(`--p${i + 1}`, `${sp.dataset.vm}%`);
		});
	}
};
fluty.onclick = () => {
	window.scrollTo({ top: "0", behavior: "smooth" });
};
