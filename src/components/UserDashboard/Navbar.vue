<template>
  <nav>
    <h5>Modules</h5>
    <h5>Free Play</h5>
    <h5>Multiplayer</h5>
    <!-- <button class="sign-out">
      <img
        src="../../assets/icons/exit-icon.png"
        alt="Exit icon"
        class="exit-icon"
      />
      Sign Out
    </button> -->
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: absolute;
  top: 0px;
  display: flex;
  width: 100%;
  place-items: center;
  place-content: center;
  column-gap: 150px;
  margin-top: 30px;

  h5 {
    font-weight: 300;
  }

  h5:hover {
    text-decoration: underline;
  }

  .exit-icon {
    width: 13.5px;
  }

  .sign-out {
    background: #1b0636;
    font-size: 10.5px;
    width: 101px;
    height: 44px;
    border-radius: 21px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
  }
}
</style>
