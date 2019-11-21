// A switch that enables and disables light theme
const button = document.querySelector('input[type="checkbox"]');
const html = document.querySelector('html');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        console.log("Light theme enabled");
        // Colours changed
        html.style.backgroundColor = "rgb(255, 255, 255)";
        body.style.color, h1.style.color, h2.style.color, h3.style.color, h4.style.color = "rbg(5, 5, 5)";
    } else {
        button.value = "enabled";
        console.log("Light theme disabled");
        // Colours changed
        html.style.backgroundColor = "rgb(12, 13, 14)";
        body.style.color, h1.style.color, h2.style.color, h3.style.color, h4.style.color = "rgb(230, 230, 230)";
    }
})
