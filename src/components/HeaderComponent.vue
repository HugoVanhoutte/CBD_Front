<script setup lang="ts">

</script>

<template>
<header>
  <div class="left">
    <div class="burger-menu"><img src="../assets/images/menu-burger.svg" alt="Menu"></div>
    <div></div>
  </div>
  <div class="logo"><img src="../assets/images/logo.png" alt="Logo"></div>
  <div class="right">
    <div class="profile"><img src="../assets/images/profile.svg" alt="Profile"></div>
    <div class="basket"><img src="../assets/images/shopping-basket.svg" alt="Panier"></div>
  </div>
</header>
</template>

<style scoped lang="scss">
header {
  margin-top: -1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10rem;
  div.left, div.right {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 30%;
    div {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 30%;
        width: 50%;
      }
    }
  }
  div.logo {
    width: 30%;
    display: flex;
    justify-content: center;
    img {
      height: 75%;
      width: auto
    }
  }
}

</style>
