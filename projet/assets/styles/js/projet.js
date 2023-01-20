import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { App } from "./app.js";

window.addEventListener("DOMContentLoaded", function() {
    createApp(App).mount('#app');
    
    let navTitle = document.getElementsByClassName("navTitle");
    let submenu = document.getElementsByClassName("submenu");

    for (let i = 0; i < submenu.length; i++) {

        navTitle[i].addEventListener("click", function(event) {

            submenu[i].classList.toggle("close");
        });
    }

    let btn = document.getElementById("btn");
    let aside = document.getElementById("aside");
    let right = document.getElementsByClassName("border-right");

    btn.addEventListener("click", function(event) {
        aside.classList.toggle("close");
        right.classList.toggle("border-bottom");
    });
});