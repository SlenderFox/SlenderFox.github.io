// Removes the scrollbar
// const block = document.getElementById('MainContainer');
// block.style.paddingRight = block.offsetWidth - block.clientWidth + "px";

const button = document.querySelector('input');
button.addEventListener('click', function() {
    if (button.value === "enabled") {
        // Light theme enabled
        console.log("Light theme selected");
    } else {
        // Dark theme enabled
        console.log("Dark theme selected");
    }
})
