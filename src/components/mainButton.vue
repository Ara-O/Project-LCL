<template>
    <button class="btn-main">
        <h6 class="btn-main-txt"><slot></slot></h6>
    </button>
</template>

<style scoped>
.btn-main {
    background: url("../assets/stars.png"), linear-gradient(106.8deg, #3F2364 28.59%, #4C2283 61.6%);
    background-size: 10vw;
    height: 45px;
    width: auto;
    padding: 0px 27px;
    border-radius: 0px;
    font-size: 12px;
    letter-spacing: 0.6px;
    display: flex;
    place-items: center;
}

.btn-main-txt{
    font-weight: 200;
    font-size: 12px
}
</style>