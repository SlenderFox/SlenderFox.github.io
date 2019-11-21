// A switch that enables and disables light theme
const button = document.querySelector('input[type="checkbox"]');
const html = document.querySelector('html').style;
const body = document.querySelector('body').style;
const h1 = document.querySelector('h1').style;
const h2 = document.querySelector('h2').style;
const h3 = document.querySelector('h3').style;
const h4 = document.querySelector('h4').style;

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        console.log("Light theme enabled");
        // Colours changed
        html.backgroundColor = "rgb(255, 255, 255)";
        body.color, h1.color, h2.color, h3.color, h4.color = "rbg(5, 5, 5)";
    } else {
        button.value = "enabled";
        console.log("Light theme disabled");
        // Colours changed
        html.backgroundColor = "rgb(12, 13, 14)";
        body.color, h1.color, h2.color, h3.color, h4.color = "rgb(230, 230, 230)";
    }
})
