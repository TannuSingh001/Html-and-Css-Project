let display = document.querySelector("#dislay");

function sinf() {
    display.value = Math.sin(display.value);
    // Degree ke liye:
    // display.value = Math.sin(display.value * Math.PI / 180);
}

function cosf() {
    display.value = Math.cos(display.value);
    // Degree ke liye:
    // display.value = Math.cos(display.value * Math.PI / 180);
}

function tanf() {
    display.value = Math.tan(display.value);
    // Degree ke liye:
    // display.value = Math.tan(display.value * Math.PI / 180);
}