window.addEventListener("load", function () {
	/**
	 * Menampilkan dropdown link-link pada navbar 
	 */
	let isNavlinkShowed = false;
	let navLinkToggler = document.getElementById("nav-link-toggler");
	
	navLinkToggler.addEventListener("click", function(event) {
		event.preventDefault();

		let navLinkDropdown = document.getElementById("nav-link-container");

		if (isNavlinkShowed) {
			navLinkDropdown.style["max-height"] = null;
			isNavlinkShowed = false;
		} else {
			// Ukuran asli kurang dari 175px. Disini digunakan ukuran
			// max-height 175px agar ukuran dari dropdown mengikuti
			// ukuran konten di dalamnya 
			//
			// (untuk menghindari ukuran yang spesifik)
			navLinkDropdown.style["max-height"] = "175px";
			isNavlinkShowed = true;	
		}	
	});

	/**
	 * Scroll otomatis ke bagian tertentu sesuai dengan
	 * link yang diklik
	 */
	let navLink = document.querySelectorAll(".nav-link");
	navLink.forEach(function (link) {
		link.addEventListener("click", function () {
			var nav = document.querySelector(".navbar");
			setTimeout(function () {
				window.scrollBy(0, -nav.clientHeight);
			}, 0);
		});
	});

	
	window.addEventListener("scroll", function () {
		/*
		 * Menampilkan navbar ketika posisi scroll tidak berada
		 * di tingkat paling atas
		 *
		 * (DEPRECATED)
		 */
		//	let nav = document.querySelector(".navbar");
		//	if (window.pageYOffset > 0) {
		//		nav.style['background-color'] = "black";
		//	} else {
		//		// ketika posisi tepat di paling atas halaman
		//		nav.style['background-color'] = "transparent";
		//	}

		/** 
		 * Menampilkan ilustrasi ketika scroll hingga titik
		 * tertentu
		 */
		let illustration = document.querySelectorAll(".animated");
		illustration.forEach(function (pic) {
			if (window.pageYOffset >= pic.offsetTop - window.innerHeight / 2) {
				pic.classList.add("animated-fadein");
			}
		});
	});

	/**
	 * Untuk menampilkan dropdown pada prosedur
	 * pemesanan layanan
	 */
	let dropItemTitles = document.querySelectorAll('.dd-item-title');
	const DROP_ITEMS_NUM = 4;

	for (let i = 0; i < DROP_ITEMS_NUM; i++) {
		dropItemTitles[i].addEventListener('click', function() {
			let content = this.nextElementSibling;

			// selector untuk id dengan pola
			// 		plus-1, plus-2, ..., plus-DROP_ITEMS_NUM
			let ddActiveSign = 'plus-' + (i+1);

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
