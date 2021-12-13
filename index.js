let calculadora = document.getElementById("calculadora");
let buttons = document.querySelectorAll("#buttons button");
let visor = document.getElementById("resultado");

let resultado;

buttons.forEach((button) => {
  let btnValue = button.value;

  button.addEventListener("click", (e) => {
    if (btnValue === "clear") {
      visor.value = "";
      visor.focus();
    } else if (btnValue === "result") {
      e.preventDefault();
      resultado = eval(visor.value.replace(/x/gi, "*"));
      resultado = resultado.toFixed(2);
      visor.value = resultado;
    } else {
      visor.value += btnValue;
    }
  });
});
