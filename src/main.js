import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MainBtn from "./components/Buttons/MainButton.vue";
import router from "./router/router";
import { initializeApp } from "firebase/app";
import { createPinia } from "pinia";

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
app.use(createPinia()).use(router).mount("#app");
