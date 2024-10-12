document.body.style.overflow = "hidden";
let button = document.querySelector(".showScroll");

window.onscroll;

button.addEventListener("click", () => {
  button.disabled = true;
  button.classList.remove("active");
  runScrolls();
});

window.addEventListener("scroll", (evt) => {
  if (isAutoScrolling) {
    console.log("Скролл отключен");
    evt.preventDefault();
  }
});

function scroll(element) {
  document.querySelector(`#${element}`).scrollIntoView({
    behavior: "smooth",
  });
}

function scrollWithDelay(pos, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      scroll(pos);
      resolve();
    }, delay);
  });
}

async function runScrolls() {
  await setTimeout(() => {
    button.classList.add("visually-hidden");
  }, 1000);
  await scrollWithDelay("anchor-1", 500);
  await scrollWithDelay("anchor-2", 2000);
  await scrollWithDelay("anchor-3", 2000);
  await scrollWithDelay("anchor-4", 2000);
  await scrollWithDelay("anchor-5", 2000);

  await scrollWithDelay("anchor-6", 2000);
  await setTimeout(() => {
    button.classList.remove("visually-hidden");
  }, 250);
  await setTimeout(() => {
    button.classList.add("active");
    button.disabled = false;
  }, 2000);
}
