import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import mainBtn from "./components/mainButton.vue"
const landingPage = () => import("./pages/landing_page.vue")

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: landingPage}
    ]
})

const app = createApp(App);
app.component("main-btn", mainBtn)
app.use(router).mount('#app')

