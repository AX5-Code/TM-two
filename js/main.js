let fluty = document.querySelector(".flout");
window.onscroll = () => {
	if (scrollY >= 350) {
		fluty.style.display = "block";
  } else {
    fluty.style.display = "none";
  }
};
fluty.onclick = () => {
	window.scrollTo({ top: "0", behavior: "smooth" });
};
