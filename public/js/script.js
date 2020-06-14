window.addEventListener("load", function () {

	/**
	 * Agar ilustrasi langsung ditampilkan ketika ter-redirect
	 * ke bagian yang beranimasi tanpa perlu scroll terlebih
	 * dahulu.
	 */
	let illustration = document.querySelectorAll(".animated");
	illustration.forEach(function (pic) {
		if (window.pageYOffset >= pic.offsetTop - window.innerHeight / 1.5) {
			pic.classList.add("animated-fadein");
		}
	});

	/**
	 * Variabel-variabel terkait navbar 
	 */
	let navLinkContainer = document.getElementById("nav-link-container");
	let navLinkContainerHeight = "175px";
	let navLinkContainerToggler = document.getElementById("nav-link-toggler");
	let isNavlinkShowed = false;

	/**
	 * Menampilkan dropdown link-link pada navbar 
	 */
	navLinkContainerToggler.addEventListener("click", function(event) {
		event.preventDefault();

		if (isNavlinkShowed) {
			navLinkContainer.style["max-height"] = null;
			isNavlinkShowed = false;
		} else {
			// Ukuran asli kurang dari 175px. Disini digunakan ukuran
			// max-height 175px agar ukuran dari dropdown mengikuti
			// ukuran konten di dalamnya 
			//
			// (untuk menghindari ukuran yang spesifik)
			navLinkContainer.style["max-height"] = navLinkContainerHeight;
			isNavlinkShowed = true;	
		}	
	});

	/**
	 * Scroll otomatis ke bagian tertentu sesuai dengan
	 * link yang diklik.
	 */
	let navbar = document.querySelector(".navbar");
	let navbarHeight = navbar.clientHeight;
	let navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			setTimeout(function () {
				window.scrollBy(0, -navbarHeight);

				// (mobile) menutup navbar setelah salah satu
				// link diklik 
				navLinkContainer.style["max-height"] = null;
				isNavlinkShowed = false;
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
		//let illustration = document.querySelectorAll(".animated");
		illustration.forEach(function (pic) {
			if (window.pageYOffset >= pic.offsetTop - window.innerHeight / 1.5) {
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
