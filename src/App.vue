<template>
  <main class="main-app">
    <Transition name="slide-in">
      <error-popup-component v-if="hasError" class="slide">
        {{ errorMessage }}
      </error-popup-component>
    </Transition>
    <router-view></router-view>
  </main>
</template>

<script setup>
import ErrorPopupComponent from "./components/Error/ErrorPopup.vue";
import mainStore from "./store/store";
import { storeToRefs } from "pinia";

const store = mainStore();

const { hasError, errorMessage } = storeToRefs(store);
</script>

<style scoped>
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateY(-20px);
  /* display: none; */
  opacity: 0;
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease;
}
</style>
