import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import MainBtn from "./components/Buttons/MainButton.vue";
import WhatWeAreAboutCard from "./components/Cards/WhatWeAreAbout.vue";
// import Particles from "vue3-particles";
const landingPage = () => import("./pages/landing_page.vue");
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: landingPage }],
});

const app = createApp(App);
(function () {
  const cursor = document.querySelector(".cursor-inner");
  const cursor2 = document.querySelector(".cursor-outer");
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    cursor2.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
  });
})();

app.component("main-btn", MainBtn);
app.component("what-we-are-about-card", WhatWeAreAboutCard);
app.use(router).mount("#app");
