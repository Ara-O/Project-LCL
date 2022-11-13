<template>
  <div class="module">
    <img :src="getImg" alt="Icon" class="module-img" />
    <div>
      <h4 class="module-title">Humble Beginnings</h4>
      <h4 class="module-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi
        eveniet fuga.
      </h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const getImg = computed(() => {
  return new URL(`../../assets/icons/${props.icon}.png`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.module {
  display: flex;
  background: linear-gradient(230deg, #1a0532 0%, rgba(15, 1, 32, 0) 100%);
  height: 200px;
  align-items: center;
  width: 392px;
  justify-content: center;
  column-gap: 17px;
  border-radius: 10px;

  .module-img {
    width: 108px;
  }

  .module-title {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  .module-description {
    font-size: 11px;
    width: 180px;
    font-weight: 300;
  }
}
</style>
