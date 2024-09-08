const inputText = document.querySelector(".input-text");
const products = document.querySelectorAll(".products");
const inputPrice = document.querySelector(".input-num");
const sideButton = document.querySelectorAll(".btn-side");
// console.log(sideButton);

const inputWordHandler = (event) => {
  const phrase = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const title = product.childNodes[1].innerText.toLowerCase();
    if (title.includes(phrase)) {
      product.style.display = "block";
    } else product.style.display = "none";
  });
};

const inputPriceHandler = (event) => {
  const phrase = event.target.value.trim();
  products.forEach((product) => {
    const price = product.childNodes[3].innerText;
    if (price.includes(phrase)) {
      product.style.display = "block";
    } else product.style.display = "none";
  });
};

const clickSideButtonHandler = () => {
  console.log("first");
};

window.addEventListener("load", () => {
  inputText.addEventListener("keyup", inputWordHandler);

  inputPrice.addEventListener("change", inputPriceHandler);

  sideButton.addEventListener("click", clickSideButtonHandler);
});
