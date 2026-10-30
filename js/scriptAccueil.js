"use strict";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slide = document.querySelector(".slide");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  slide.appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  slide.prepend(items[items.length - 1]);
});

// Glise ak dwèt sou telefòn
let startX = 0;

slide.addEventListener("touchstart", function (e) {
  startX = e.changedTouches[0].clientX;
}, { passive: true });

slide.addEventListener("touchend", function (e) {
  let diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) < 50) return;
  (diff < 0 ? next : prev).click();
}, { passive: true });