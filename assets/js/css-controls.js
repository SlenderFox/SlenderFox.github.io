// A switch that enables and disables light theme
const button = document.querySelector('input[type="checkbox"]');
const html = document.querySelector('html');
const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const li = document.querySelectorAll('li');

button.addEventListener('click', function() {
    if (button.value === "enabled") {
        button.value = "disabled";
        //console.log("Light theme enabled");
        // Colours changes
        html.style.backgroundColor = "rgb(255, 255, 255)";
        body.style.color = "rgb(5, 5, 5)";
        Array.from(h1).forEach((ele) => { ele.style.color = "rgb(5, 5, 5)"; });
        Array.from(h2).forEach((ele) => { ele.style.color = "rgb(5, 5, 5)"; });
        Array.from(h3).forEach((ele) => { ele.style.color = "rgb(5, 5, 5)"; });
        Array.from(h4).forEach((ele) => { ele.style.color = "rgb(5, 5, 5)"; });
        Array.from(li).forEach((ele) => { ele.style.color = "rgb(5, 5, 5)"; });
    } else {
        button.value = "enabled";
        //console.log("Light theme disabled");
        // Colours changes
        html.style.backgroundColor = "rgb(12, 13, 14)";
        body.style.color = "rgb(230, 230, 230)";
        Array.from(h1).forEach((ele) => { ele.style.color = "rgb(230, 230, 230)" });
        Array.from(h2).forEach((ele) => { ele.style.color = "rgb(230, 230, 230)" });
        Array.from(h3).forEach((ele) => { ele.style.color = "rgb(230, 230, 230)" });
        Array.from(h4).forEach((ele) => { ele.style.color = "rgb(230, 230, 230)" });
        Array.from(li).forEach((ele) => { ele.style.color = "rgb(230, 230, 230)" });
    }
})
