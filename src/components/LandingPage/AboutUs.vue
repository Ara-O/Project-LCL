<template>
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
        Use multiplayer mode to play with friends in order to solve command line
        puzzles
      </template>
    </what-we-are-about-card>
    <what-we-are-about-card cardImage="battle-icon.png">
      <template v-slot:card-title> Save WindowTopia </template>
      <template v-slot:card-description>
        Use multiplayer mode to play with friends in order to solve command line
        puzzles
      </template>
    </what-we-are-about-card>
  </article>
</template>

<script setup>
import WhatWeAreAboutCard from "../../components/Cards/WhatWeAreAbout.vue";
</script>
