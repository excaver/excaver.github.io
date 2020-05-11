window.addEventListener("load", function () {
	var navLink = document.querySelectorAll(".nav-link");
	navLink.forEach(function (link) {
		link.addEventListener("click", function () {
			var nav = document.querySelector(".navbar");
			setTimeout(function () {
				window.scrollBy(0, -nav.clientHeight);
			}, 0);
		});
	});
	window.addEventListener("scroll", function () {
		var nav = document.querySelector(".navbar");
		if (window.pageYOffset > 0) {
			nav.classList.add("nav-scroll");
		} else {
			nav.classList.remove("nav-scroll");
		}
		var illustration = document.querySelectorAll(".illustration");
		illustration.forEach(function (pic) {
			if (window.pageYOffset >= pic.offsetTop - window.innerHeight / 2) {
				pic.classList.add("illustration-show");
			} else {
				pic.classList.remove("illustration-show");
			}
		});
	});
});
