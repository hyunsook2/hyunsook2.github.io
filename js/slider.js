window.addEventListener("DOMContentLoaded", (event) => {
  const carousels = document.querySelectorAll(".Projects_img-carousel__e8hwy");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".Projects_img-wrapper__0b8Tt");
    const pageNumber = carousel.querySelector(".Projects_page__zHIqO");
    const prevButton = carousel.querySelector(".Projects_prev__wS3_z");
    const nextButton = carousel.querySelector(".Projects_next__3RYWe");

    let index = 0;

    // 페이지 번호 표시를 갱신하고 슬라이드를 업데이트하는 함수
    function updatePageAndSlide() {
      pageNumber.textContent = `${index + 1}/${slides.length}`;

      // 모든 슬라이드를 숨김
      slides.forEach((slide) => {
        slide.style.display = "none";
      });

      // 현재 슬라이드만 보이게 함
      slides[index].style.display = "block";
    }

    prevButton.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updatePageAndSlide();
    });

    nextButton.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updatePageAndSlide();
    });

    // 처음 페이지 번호 표시를 갱신하고 슬라이드를 업데이트
    updatePageAndSlide();
  });
});
