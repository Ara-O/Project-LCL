<template>
  <section id="landing-page-app">
    <div class="bg-circle-1"></div>
    <div class="bg-circle-2"></div>
    <nav class="navbar">
      <h5>Home</h5>
      <h5>Resources</h5>
      <h5>Learn More</h5>
      <main-btn @click="registerUserPopup">Sign Up</main-btn>
    </nav>
    <section class="top-hero-section">
      <hero-section></hero-section>
    </section>
    <br />
    <section class="about-us">
      <about-us></about-us>
    </section>
    <br />
    <br />
    <section class="learning-quote">
      <h4>Learning about the command line can be daunting</h4>
      <h5>
        We are here to make the process easier. L.C.L gamifies the process of
        learning about the command line through a fantasy D&D type of experience
      </h5>
      <main-btn class="get-started-btn">Get Started</main-btn>
      <div class="quote-shadow"></div>
    </section>
    <section class="register-user">
      <div class="register-user_section">
        <img
          src="../assets/icons/cancel-icon.png"
          alt="Cancel Icon"
          class="cancel-icon"
          @click="cancelUserRegistration"
        />
        <div class="left">
          <h3 v-if="!userAlreadyHasAccount">
            Cool Beans! Let's get you learning
          </h3>
          <h3 v-else>Welcome back!</h3>
          <form>
            <label for="email-address">Email: </label>
            <input
              type="text"
              name="Email address"
              id="email-address form-field"
              v-model="email"
            />
            <br /><br />
            <label for="email-address">Password: </label>
            <input
              type="password"
              name="Password"
              id="password form-field"
              v-model="password"
            />
          </form>

          <h6
            class="already-have-account"
            @click="userAlreadyHasAccount = !userAlreadyHasAccount"
          >
            {{
              !userAlreadyHasAccount
                ? " I already have an account"
                : "I don't have an account"
            }}
          </h6>
          <main-button @click="registerUser">Sign Up</main-button>
        </div>
        <div class="right" id="cloud-parallax">
          <img
            src="../assets/icons/rocket-icon.png"
            alt="Rocket icon"
            class="rocket-icon"
            data-depth="0.2"
          />
          <img
            src="../assets/icons/cloud-icon.png"
            alt="Cloud icon"
            class="cloud-icon"
            data-depth="0.6"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Parallax from "parallax-js";
import {
  registerUser as registerUserModule,
  logInUser,
  userIsSignedIn,
} from "../modules/handleRegistrationFlow";
import "../assets/styles/landingpage.scss";
import useStore from "../store/store";
import mainButton from "../components/Buttons/MainButton.vue";
import AboutUs from "../components/LandingPage/AboutUs.vue";
import HeroSection from "../components/LandingPage/HeroSection.vue";

let password = ref("evwvewvew");
let email = ref("ara@gmai.com");
let userAlreadyHasAccount = ref(false);
const router = useRouter();
const store = useStore();
function registerUserPopup() {
  document.querySelector(".register-user").style.display = "flex";
  document.querySelector("html").style.overflow = "hidden";
}

function cancelUserRegistration() {
  document.querySelector(".register-user").style.display = "none";
  document.querySelector("html").style.overflow = "auto";
  document.querySelector("html").style.overflowX = "hidden";
}

function registerUser() {
  if (userAlreadyHasAccount.value == false) {
    registerUserModule(email.value, password.value)
      .then((user) => {
        console.log("user: ", user.user.uid);
        store.storeUserID(user.user.uid);
        router.push("/UserDashboard");
      })
      .catch((err) => {
        console.log("error: ", err.message);
        store.updateError(err.message);
        setTimeout(() => (store.hasError = false), 3000);
      });
  } else {
    logInUser(email.value, password.value)
      .then((user) => {
        console.log("user: ", user);
        store.storeUserID(user.user.uid);
        router.push("/UserDashboard");
      })
      .catch((err) => {
        console.log("error: ", err.message);
        store.updateError(err.message);
        setTimeout(() => {
          store.clearError();
        }, 3000);
      });
  }
}

onMounted(() => {
  userIsSignedIn()
    .then((uid) => {
      console.log("user has been signed in + ", uid);
      store.storeUserID(uid);
      router.push("/userDashboard");
    })
    .catch((err) => {
      console.log("no signed in ");
    });

  var scene = document.getElementById("cloud-parallax");
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.2, 0.2);
});
</script>
