<template>
  <div class="error-div">
    <h2>Error!</h2>
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<style scoped lang="scss">
.error-div {
  position: absolute;
  top: 30px;
  right: 30px;
  background: linear-gradient(#8d1f1fd9, hsl(0deg 86% 68% / 74%));
  width: 200px;
  /* background: linear-gradient(#1c003f, #110224); */
  height: auto;
  z-index: 5;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  padding: 20px 25px;
  gap: 8px;

  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 13px;
    font-weight: 300;
  }
  h2,
  h3 {
    margin: 0px;
  }
}
</style>
