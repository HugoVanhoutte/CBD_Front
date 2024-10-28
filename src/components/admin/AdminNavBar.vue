<script setup lang="ts">
import { defineEmits } from 'vue';

const emits = defineEmits(['change-selected']);

</script>

<template>
  <nav>
    <h1>Panneau d'administration</h1>
    <div>
      <button @click="emits('change-selected', 'Products')">Produits</button>
      <button @click="emits('change-selected', 'Users')">Utilisateurs</button>
      <button @click="emits('change-selected', 'Orders')">Commandes</button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
nav {
  h1 {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-family: $title;
    font-weight: bold;
    font-size: 1.8rem;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    button {
      border: black 1px solid;
      text-align: center;
      padding: .5rem;
      color: $black;
      text-decoration: none;
      font-family: $body;
      width: 100%;
      height: 100%;
      background-color: $white;
    }
    button:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
