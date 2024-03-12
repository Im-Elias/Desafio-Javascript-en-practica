let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let btn6 = document.querySelector("#btn-6");

btn1.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #e53e3e"
    );
});

btn2.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #dd6b20"
    );
});

btn3.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #faf089"
    );
});

btn4.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #48bb78"
    );
});

btn5.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #81e6d9"
    );
});

btn6.addEventListener("click", () => {
  document
    .querySelector("#caja")
    .setAttribute(
      "style",
      "border:1px solid black;width: 100%;height: 100%;background-color: #d53f8c"
    );
});
