<template>
  <nav class="navbar">
    <h5>Home</h5>
    <h5>Resources</h5>
    <h5>Learn More</h5>
    <main-btn>Sign Up</main-btn>
  </nav>
  <div class="bg-circle-1"></div>
  <section class="top-hero-section">
    <div class="top-hero-section_left">
      <h3>Start your Command Line learning adventure</h3>
      <main-btn>Get Started</main-btn>
    </div>
    <div class="top-hero-section_right">
      <div class="welcome-code-popup"></div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.navbar {
  h5 {
    letter-spacing: 0.5px;
    cursor: pointer;
    font-weight: 300;
  }
}

.bg-circle-1 {
  height: 200px;
  width: 200px;
  border-radius: 121px;
  background: linear-gradient(180deg, #330969 0%, rgba(145, 121, 176, 0) 100%);
  position: absolute;
  top: -11px;
  left: -59px;
  transform: rotate(-12deg);
}

.top-hero-section {
  display: flex;
  justify-content: space-between;
  height: 400px;
  align-items: center;
  .top-hero-section_left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 10px;

    h3 {
      font-weight: 500;
      font-size: 30px;
      text-align: left;
      line-height: 46px;
      width: 400px;
    }
  }
}

.welcome-code-popup {
  width: 300px;
}
</style>