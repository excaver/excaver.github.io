window.addEventListener("load", function () {
	// scroll otomatis ke bagian tertentu sesuai dengan
	// link yang diklik
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
		// menampilkan navbar ketika posisi scroll tidak berada
		// di tingkat paling atas
		var nav = document.querySelector(".navbar");
		if (window.pageYOffset > 0) {
			//nav.classList.add("nav-scroll");
			nav.style['background-color'] = 'black';
		} else {
			//nav.classList.remove("nav-scroll");
			nav.style['background-color'] = 'transparent';
		}

		// menampilkan ilustrasi ketika scroll
		var illustration = document.querySelectorAll(".animated");
		illustration.forEach(function (pic) {
			if (window.pageYOffset >= pic.offsetTop - window.innerHeight / 2) {
				pic.classList.add("animated-fadein");
			}
		});
	});

	// untuk menampilkan dropdown pada prosedur
	// pemesanan layanan
	let dropItemTitles = document.querySelectorAll('.dd-item-title');
	for (let i = 0; i < 4; i++) {
		dropItemTitles[i].addEventListener('click', function() {
			let content = this.nextElementSibling;
			let ddActiveSign = 'plus-' + (i+1);
			console.log(ddActiveSign);

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				document.getElementById(ddActiveSign).innerHTML = '+';
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
				document.getElementById(ddActiveSign).innerHTML = '-';
			}
		});
	}
});
