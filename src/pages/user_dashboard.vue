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
      <!-- <img src="../assets/icons/test4.png" alt="Glowing Earth" class="test" /> -->
    </section>
    <section class="module-section">
      <h3>Modules</h3>
      <module icon="plant-icon"></module>
    </section>
  </section>
</template>

<script setup>
import module from "../components/UserDashboard/Module.vue";
import navBar from "../components/UserDashboard/Navbar.vue";
</script>

<style lang="scss" scoped>
#app,
body {
  margin: 0px;
}

.test {
  width: 500px;
  height: 29px;
  position: relative;
  top: -115px;
  transform: rotate(0.9deg);
}
.main-dashboard-top {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .introduction {
    height: 460px;
    padding: 100px 161px 0px;
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

.module-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;
  h3 {
    // font-weight: 400;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
