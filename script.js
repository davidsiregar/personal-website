//dark mode
const themeSwitch = document.querySelector("input");

themeSwitch.addEventListener("change", () => {
	document.body.classList.toggle("dark-theme");
});

// scroll up button
window.addEventListener("scroll", (e) => {
	var el = document.getElementById("jsScroll");
	if (window.scrollY > 10) {
		el.classList.add("visible");
	} else {
		el.classList.remove("visible");
	}
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
