// This should remove the scrollbar
const block = document.getElementById('MainContainer');
block.style.paddingRight = block.offsetWidth - block.clientWidth + "px";

const html = document.querySelector('html');
const localStyle = getComputedStyle(html);

const button = document.querySelector('theme-switch');
button.addEventListener("switch", function() {
    if (button.value === "enabled") {
        // Light theme enabled
        localStyle.backgroundColor = "rgb(255, 255, 255)";
    } else {
        // Dark theme enabled
        localStyle.backgroundColor = "rgb(55, 55, 55)";
    }
})
