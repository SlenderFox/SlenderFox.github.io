// This should remove the scrollbar
const block = document.getElementById('MainContainer');
block.style.paddingRight = block.offsetWidth - block.clientWidth + "px";

const html = document.querySelector('html');

const button = document.querySelector('input');
button.addEventListener("switch", function() {
    if (button.value === "enabled") {
        // Light theme enabled
        console.log("Light theme selected");
        html.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        // Dark theme enabled
        console.log("Dark theme selected");
        html.style.backgroundColor = "rgb(55, 55, 55)";
    }
})
