//7. Escribe un programa que pida un número y diga si es divisible por 2.
const ps = require("prompt-sync");
const prompt = ps();
let num = parseInt(prompt("Primer Numero?"));

if (num % 2 == 0) {
  console.log("lol");
}
