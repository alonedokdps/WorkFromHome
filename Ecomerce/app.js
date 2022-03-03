let hero_slide = document.querySelector("#hero-slide");

let hero_slide_items = hero_slide.querySelectorAll(".slide");

let hero_slide_index = 0;
let header = document.querySelector("header");
let hero_slide_play = true;
let hero_slide_control_items = hero_slide.querySelectorAll(
  ".slide-control-item"
);
let slide_next = hero_slide.querySelector(".slide-next");
let slide_prev = hero_slide.querySelector(".slide-prev");
showSlide = (index) => {
  hero_slide.querySelector(".slide.active").classList.remove("active");
  hero_slide
    .querySelector(".slide-control-item.active")
    .classList.remove("active");
  hero_slide_control_items[index].classList.add("active");
  hero_slide_items[index].classList.add("active");
};
nextSlide = () => {
  hero_slide_index =
    hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
  showSlide(hero_slide_index);
};
prevSlide = () => {
  hero_slide_index =
    hero_slide_index - 1 < 0
      ? hero_slide_items.length - 1
      : hero_slide_index - 1;
  showSlide(hero_slide_index);
};
console.log(">>>", hero_slide_items);
hero_slide_control_items.forEach((item, index) => {
  item.addEventListener("click", () => showSlide(index));
});
slide_next.addEventListener("click", () => nextSlide());
slide_prev.addEventListener("click", () => prevSlide());
// pause slide when mouse come in slider
hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));
// resume slide when mouse leaveout slider.
hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));
setTimeout(() => {
  hero_slide_items[0].classList.add("active");
}, 200);
setInterval(() => {
  if (!hero_slide_play) return;
  nextSlide();
}, 2500);

///33p53s
//change header when scroll

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
let el_to_show = document.querySelectorAll(".show-on-scroll");
isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  let distance = 200;
  return (
    rect.top <=
    (window.innerHeight - distance ||
      document.documentElement.clientHeight - distance)
  );
};
loop = () => {
  el_to_show.forEach((el) => {
    if (isElInViewPort(el)) el.classList.add("show");
  });
  scroll(loop);
};
loop();
