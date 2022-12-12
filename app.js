let screenInput = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const reset = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
let num = [];
let operants = ["+", "-", "*", "/", "=", "(", ")", "%", "."];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screenInput.value += button.value;
    let result = screenInput.value;
    let lastNum = result[result.length - 1];
    let preNum = result[result.length - 2];
    if (operants.includes(lastNum) && operants.includes(preNum)) {
      result = result.slice(0, -1);
      screenInput.value = result;
    } else if (screenInput.value === "") {
      result = "";
      screenInput.value = result;
    } else if (operants.includes(result) || result === "0") {
      result = "";
      screenInput.value = result;
    }
    equal.addEventListener("click", () => {
      let newRes = eval(result);
      screenInput.value = newRes;
    });
  });
});

reset.addEventListener("click", () => {
  screenInput.value = "";
});
