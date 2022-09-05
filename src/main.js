import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import mainBtn from "./components/mainButton.vue"
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
    // import {onMounted} from 'vue';
    // onMounted(()=> {
    
    //   const cursorRounded = document.querySelector('.rounded');
    //   const cursorPointed = document.querySelector('.pointed');
      
    
    //   const moveCursor = (e)=> {
    //   const mouseY = e.clientY;
    //   const mouseX = e.clientX;
    
    //   let offset = -60
       
    //   cursorRounded.style.transform = `translate3d(${mouseX }px, ${mouseY}px, 0)`;
      
    //   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
     
    // }
    
    // window.addEventListener('mousemove', moveCursor)
    // })
    const cursor = document.querySelector(".cursor-inner");
        const cursor2 = document.querySelector(".cursor-outer");
        document.addEventListener("mousemove", e=>{
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
 
            cursor2.style.top = e.pageY + "px";
            cursor2.style.left = e.pageX + "px";
        })
})()


app.component("main-btn", mainBtn)
app.use(router).use(Particles).mount('#app')

