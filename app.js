/* Selects the buttons and input in calculator */
const btn = document.querySelectorAll(".btn");
const entry = document.querySelector("#entry");

/* Loops through buttons and adds an event listener 
that inputs the correct number or action */
for (let x of btn) {
  x.addEventListener("click", function () {
    if (x.textContent !== "=" && x.textContent !== "C") {
      entry.append(x.textContent);
    } else if (x.textContent === "=") {
      entry.textContent = eval(entry.textContent);
    } else {
      entry.textContent = "";
    }
  });
}

/* Window listens for keyboard through various keycodes and appends 
the appropriate key to the entry. Once enter is pressed the formula will
be evaluated */
window.addEventListener("keydown", function (e) {
  console.log(e);
  if (
    e.keyCode === 57 ||
    e.keyCode === 56 ||
    e.keyCode === 55 ||
    e.keyCode === 54 ||
    e.keyCode === 53 ||
    e.keyCode === 52 ||
    e.keyCode === 51 ||
    e.keyCode === 50 ||
    e.keyCode === 49 ||
    e.keyCode === 48 ||
    e.keyCode === 46 ||
    e.keyCode === 106 ||
    e.keyCode === 107 ||
    e.keyCode === 109 ||
    e.keyCode === 111 ||
    e.keyCode === 110 ||
    e.keyCode === 189 ||
    e.keyCode === 190 ||
    e.keyCode === 116 ||
    e.keyCode === 191
  ) {
    console.log(e.key);
    entry.append(e.key);
  }
  if (e.code === "Equal" && e.key === "+") {
    entry.append(e.key);
  }
  if (e.keyCode === 13) {
    entry.textContent = eval(entry.textContent);
  }
  if (e.keyCode === 8) {
    entry.textContent = entry.textContent.slice(0, -1);
  }
});
