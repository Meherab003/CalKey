const display = document.getElementById("display");

function keyPad(keyValue) {
  const currentValue = display.value;
  const newValue = keyValue;
  display.value = currentValue + newValue;
}

function clearDisplay() {
  display.value = "";
}

function deleteNumber() {
  if (display.value) {
    const keyValue = display.value.split("");
    keyValue.pop();
    display.value = keyValue.join("");
  }
}

function solution() {
  if (display.value) {
    display.value = eval(display.value);
  } else {
    alert("You haven't typed anything, have you?");
  }
}
