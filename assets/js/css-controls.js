// A switch that enables and disables light theme
const button = document.querySelector('input[type="checkbox"]');
const htmlColour = document.querySelector('html').style.backgroundColor;
const bodyColour = document.querySelector('body').style.color;
const h1Colour = document.querySelector('h1').style.color;
const h2Colour = document.querySelector('h2').style.color;
const h3Colour = document.querySelector('h3').style.color;
const h4Colour = document.querySelector('h4').style.color;

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        console.log("Light theme enabled");
        // Colours changed
        htmlColour = "rgb(255, 255, 255)";
        bodyColour, h1Colour, h2Colour, h3Colour, h4Colour = "rbg(5, 5, 5)";
    } else {
        button.value = "enabled";
        console.log("Light theme disabled");
        // Colours changed
        htmlColour = "rgb(12, 13, 14)";
        bodyColour, h1Colour, h2Colour, h3Colour, h4Colour = "rgb(230, 230, 230)";
    }
})
