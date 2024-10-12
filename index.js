let button = document.querySelector(".showScroll");

window.onscroll;

button.addEventListener("click", () => {
  button.classList.remove("active");
  runScrolls();
});

function scroll(value) {
  window.scrollTo(0, value);
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
  await scrollWithDelay(4600, 500);
  await scrollWithDelay(14720, 2000);
  await scrollWithDelay(20267, 2000);
  await scrollWithDelay(23880, 2000);
  await scrollWithDelay(43261, 2000);
  await scrollWithDelay(0, 2000);
  await setTimeout(() => {
    button.classList.add("active");
  }, 2000);
}
