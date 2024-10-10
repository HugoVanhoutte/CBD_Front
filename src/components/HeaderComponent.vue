<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Category } from '../../config';

const mainCategories = ref<Category[]>([]);
const getMainCategories = async ():Promise<void> => {
  const res = await fetch('http://localhost:3001/api/categories/main', {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  if (res.ok) {
    return res.json().then(
      (data) => {
        Object.assign(mainCategories.value, data);
      },
    );
  }
  return undefined;
};

onMounted(() => {
  getMainCategories();
});
const isMenuDisplayed = ref(false);
const toggleDisplay = () => {
  isMenuDisplayed.value = !isMenuDisplayed.value;
};
</script>

<template>
<header>
  <div class="left">
    <div class="burger-menu">
      <button @click="toggleDisplay">
        <img src="../assets/images/menu-burger.svg" alt="Menu">
      </button>
    </div>
    <div></div>
  </div>
  <div class="logo"><img src="../assets/images/logo.png" alt="Logo"></div>
  <div class="right">
    <div class="profile"><img src="../assets/images/profile.svg" alt="Profile"></div>
    <div class="basket"><img src="../assets/images/shopping-basket.svg" alt="Panier"></div>
  </div>
</header>
  <div class="menu" v-if="isMenuDisplayed">
    <div class="top">
      <div class="logo"><img src="../assets/images/logo.png" alt="Logo"></div>
      <button @click="toggleDisplay" class="close">
        <img src="../assets/images/cross.svg" alt="Bouton fermeture menu">
      </button>
    </div>
    <ul>
      <li v-for="category in mainCategories" :key="category.id">{{ category.name }}</li>
    </ul>
    <p>Tout voir</p>
    <ul>
      <li>À propos</li>
      <li>Contact</li>
      <li>Abonnez-vous & économisez</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 7rem;
  div.left, div.right {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 30%;
    div, button {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      cursor: pointer;
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
    align-items: center;
    img {
      height: 50%;
      width: auto
    }
  }
}
.menu {
  font-family: $body;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $olive;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 7rem;
    div, button {
      margin: 0 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      cursor: pointer;
      img {
        height: 50%;
        width: auto;
      }
    }
    button {
      height: 75%;
      align-self: center;
    }
  }
  ul {
    margin: 0 3rem;
    li {
      margin: 3rem 0;
    }
  }
  p {
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
