<template>
  <section class="page-not-found-section">
    <img
      src="../assets/icons/404-icon.png"
      alt="Floating in space"
      class="floating-image"
    />
    <div>
      <h2>It's so empty in here</h2>
      <h3>...Page not found, robot, shutting down, beep boop</h3>
      <main-btn routeTo="/" type="Link">Go back home</main-btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page-not-found-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 85px;

  div {
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h2 {
    font-weight: 500;
    line-height: 38px;
    margin-bottom: 5px;
  }
  h3 {
    font-weight: 300;
    line-height: 38px;
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  img {
    width: 200px;
  }
}

.floating-image {
  animation: rotate 10s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

  //   100% {
  //     transform: rotate(0deg);
  //   }
}
</style>
