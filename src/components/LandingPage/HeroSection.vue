<template>
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
            <span style="color: #cd8cff">WindowTopia</span>, are you going to be
            able to stop the virus before it is too late...
          </h5>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";
let typingJsComplete = ref(false);

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

onMounted(() => {
  var typed = new Typed("#element", options);
});
</script>
