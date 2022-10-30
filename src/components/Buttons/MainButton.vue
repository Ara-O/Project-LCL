<template>
  <router-link class="btn-main" v-if="type === 'Link'" :to="routeTo">
    <h6 class="link-main-txt"><slot></slot></h6>
  </router-link>
  <button class="btn-main" v-if="type === 'Button'">
    <h6 class="btn-main-txt"><slot></slot></h6>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "Button",
  },

  routeTo: {
    type: String,
  },
});

console.log(props.routeTo);
</script>

<style scoped>
.btn-main {
  /* background: url("../../assets/icons/starry-bg.png"),
    linear-gradient(106.8deg, #3f2364 28.59%, #4c2283 61.6%); */
  background: linear-gradient(106.8deg, #3f2364 28.59%, #4c2283 61.6%);
  background-size: 30vw;
  background-repeat: repeat;
  height: 45px;
  width: auto;
  padding: 0px 27px;
  border: none;
  font-size: 12px;
  border-radius: 0px;
  letter-spacing: 0.6px;
  display: flex;
  place-items: center;
  transition: all 500ms linear;
}

.link-main-txt {
  color: white;
  font-weight: 300;
  font-size: 12px;
}

.btn-main:hover {
  /* border: none; */
  box-shadow: 0px 0px 6px black;
}

.btn-main-txt {
  font-weight: 200;
  font-size: 12px;
}
</style>
