import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import MainBtn from "./components/Buttons/MainButton.vue"
import WhatWeAreAboutCard from "./components/Cards/WhatWeAreAbout.vue"
import Particles from "vue3-particles";
const landingPage = () => import("./pages/landing_page.vue")

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: landingPage}
    ]
})

const app = createApp(App);
(function(){
    const cursor = document.querySelector(".cursor-inner");
        const cursor2 = document.querySelector(".cursor-outer");
        document.addEventListener("mousemove", e=>{
            cursor.style.top =  e.clientY + "px";
            cursor.style.left = e.clientX + "px";
 
            cursor2.style.top =  e.clientY + "px";
            cursor2.style.left = e.clientX  + "px";
        })
})()


app.component("main-btn", MainBtn)
app.component("what-we-are-about-card", WhatWeAreAboutCard)
app.use(router).use(Particles).mount('#app')

