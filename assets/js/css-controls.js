// A switch that enables and disables light theme
const light = document.querySelector('html').style.getPropertyValue("--localWhite");
const dark = document.querySelector('html').style.getPropertyValue("--localBlack");
const button = document.querySelector('input[type="checkbox"]');
const html = document.querySelector('html');
const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const strong = document.querySelectorAll('strong');
const li = document.querySelectorAll('li');

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        //console.log("Light theme enabled");
        // Colours changes
        html.style.backgroundColor = "rgb(255, 255, 255)";
        body.style.color = dark;
        Array.from(h1).forEach((ele) => { ele.style.color = dark; });
        Array.from(h2).forEach((ele) => { ele.style.color = dark; });
        Array.from(h3).forEach((ele) => { ele.style.color = dark; });
        Array.from(h4).forEach((ele) => { ele.style.color = dark; });
        Array.from(strong).forEach((ele) => { ele.style.color = dark; });
        Array.from(li).forEach((ele) => { ele.style.color = dark; });
    } else {
        button.value = "enabled";
        //console.log("Light theme disabled");
        // Colours changes
        html.style.backgroundColor = "rgb(12, 13, 14)";
        body.style.color = light;
        Array.from(h1).forEach((ele) => { ele.style.color = light });
        Array.from(h2).forEach((ele) => { ele.style.color = light });
        Array.from(h3).forEach((ele) => { ele.style.color = light });
        Array.from(h4).forEach((ele) => { ele.style.color = light });
        Array.from(strong).forEach((ele) => { ele.style.color = light; });
        Array.from(li).forEach((ele) => { ele.style.color = light });
    }
})
