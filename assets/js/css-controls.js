// A switch that enables and disables light theme
const button = document.querySelector('input[type="checkbox"]');

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        // Light theme enabled
        console.log("Light theme selected");
        document.querySelector('html').style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        button.value = "enabled";
        // Dark theme enabled
        console.log("Dark theme selected");
        document.querySelector('html').style.backgroundColor = "rgb(12, 13, 14)";
    }
})
