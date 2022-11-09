<template>
  <nav-bar></nav-bar>
  <section id="main-section-dashboard">
    <section class="main-dashboard-top">
      <div class="introduction">
        <h3>Welcome!</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod officia deserunt mollit anim id est laborum.
        </h5>
        <main-btn>Continue</main-btn>
      </div>
    </section>
  </section>
</template>

<script setup>
import navBar from "../components/UserDashboard/Navbar.vue";
</script>

<style lang="scss" scoped>
#app,
body {
  margin: 0px;
}
.main-dashboard-top {
  width: 100%;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;

  .introduction {
    height: 460px;
    padding: 100px 161px;
    display: flex;

    background: linear-gradient(180deg, rgb(6 0 12 / 93%), transparent);
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;

    h5 {
      width: 50%;
      font-weight: 300;
      margin-bottom: 30px;
    }

    h3 {
      margin-top: 0px;
      font-size: 36px;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
}
</style>
