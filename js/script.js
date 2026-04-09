document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".about__swiper-pagination", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper(".about__swiper-main", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
    },
    thumbs: {
      swiper: swiper,
    },
  });

  const projectItems = document.querySelectorAll(".projects__item");

  projectItems[0].classList.add("item-active");

  projectItems.forEach((item) => {
    item.addEventListener("click", function () {
      projectItems.forEach((e) => {
        e.classList.remove("item-active");
      });
      this.classList.add("item-active");
    });

    item.addEventListener("mouseenter", function () {
      if (!this.classList.contains("item-active")) {
        this.classList.add("item-hover");
      }
    });
    item.addEventListener("mouseleave", function () {
      this.classList.remove("item-hover");
    });
  });
});
