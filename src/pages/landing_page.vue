<template>
  <div class="bg-circle-1"></div>
  <div class="bg-circle-2"></div>
  <nav class="navbar">
    <h5>Home</h5>
    <h5>Resources</h5>
    <h5>Learn More</h5>
    <main-btn @click="registerUser">Sign Up</main-btn>
  </nav>
  <section class="top-hero-section">
    <div class="top-hero-section_left">
      <h3>Start your Command Line learning adventure</h3>
      <h5>Are you to become a command line bawse?</h5>
      <main-btn>Get Started</main-btn>
    </div>
    <div class="top-hero-section_right">
      <div class="welcome-code-section">
        <div class="welcome-code-icon-1"></div>
        <div class="welcome-code-icon-2"></div>
        <div class="welcome-code-icon-3"></div>
        <div class="welcome-typing-text">
          <h5 id="element"></h5>
          <Transition name="fade-out">
            <h5 v-if="typingJsComplete" class="welcome-code-explanation">
              > You find yourself in a mysterious world. It seems like you have
              been transported to a computer file system. Tasked with finding a
              mysterious virus wreaking havoc in the world of
              <span style="color: #cd8cff">WindowTopia</span>, are you going to
              be able to stop the virus before it is too late...
            </h5>
          </Transition>
        </div>
      </div>
    </div>
  </section>
  <br />
  <section class="about-us">
    <h2 style="margin-bottom: 35px">What are we about?</h2>
    <br />
    <article>
      <what-we-are-about-card cardImage="brain-icon.png">
        <template v-slot:card-title> Learn </template>
        <template v-slot:card-description>
          Go through an adventure while learning new commands and concepts
        </template>
      </what-we-are-about-card>
      <what-we-are-about-card cardImage="boxing-icon.png">
        <template v-slot:card-title> Compete </template>
        <template v-slot:card-description>
          Use multiplayer mode to play with friends in order to solve command
          line puzzles
        </template>
      </what-we-are-about-card>
      <what-we-are-about-card cardImage="battle-icon.png">
        <template v-slot:card-title> Save WindowTopia </template>
        <template v-slot:card-description>
          Use multiplayer mode to play with friends in order to solve command
          line puzzles
        </template>
      </what-we-are-about-card>
    </article>
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
      <div class="left">
        <h3>Cool Beans! Let's get you learning</h3>
        <form>
          <label for="email-address">Email: </label>
          <input type="text" name="" id="email-address form-field" />
          <br /><br />
          <label for="email-address">Password: </label>
          <input type="text" name="" id="password form-field" />
        </form>
        <h6 class="already-have-account">I already have an account</h6>
        <main-button>Sign Up</main-button>
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
</template>

<script setup>
import Parallax from "parallax-js";
import "../assets/styles/landingpage.scss";
import { ref, onMounted } from "vue";
import Typed from "typed.js";
import mainButton from "../components/Buttons/MainButton.vue";
let typingJsComplete = ref(false);

function registerUser() {
  console.log("start user");
  document.querySelector(".register-user").style.display = "flex";
  document.querySelector("html").style.overflow = "hidden";
}

onMounted(() => {
  var scene = document.getElementById("cloud-parallax");
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.2, 0.2);

  var options = {
    strings: [
      "> Welcome to the start of your <span style='color: yellow'>Command Line Learning Journey</span> ✌️",
    ],
    typeSpeed: 40,
    showCursor: false,
    onComplete() {
      typingJsComplete.value = true;
    },
  };

  var typed = new Typed("#element", options);
  let aboutuspoints = document.querySelectorAll(".about-us-point");
  aboutuspoints.forEach((el) => {
    console.log(el);
    el.addEventListener("mouseover", function (e) {
      console.log("e");
    });
  });
});
</script>
