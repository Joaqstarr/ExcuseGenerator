let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let text = document.getElementById("excuse");

function GenerateExcuse() {
  let excuse = `${GetRandomItem(who)} ${GetRandomItem(action)} ${GetRandomItem(
    what
  )} ${GetRandomItem(when)}`;

  return excuse;
}

function GetRandomItem(array) {
  const index = Math.ceil(Math.random() * array.length) - 1;
  return array[index];
}

window.onload = function() {
  //write your code here
  text.innerText = GenerateExcuse();
};
