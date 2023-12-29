window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  document
    .getElementById("course-input")
    .addEventListener("change", function () {
      var hiddenCards = document.querySelectorAll(".card-hidden");
      hiddenCards.forEach(function (card) {
        card.style.display = this.checked ? "block" : "none";
      }, this);
    });
	
	const swiper = new Swiper(".js-testimonals_slider", {
		grabCursor: true,
		spaceBetween: "30px",
		loop: true,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		pagination: {
		  el: ".js-testimonals-pagination",
		  clickable: true,
		},
		breakpoints: {
		  767: {
			slidesPerView: 2,
		  },
		},
	  });
};
