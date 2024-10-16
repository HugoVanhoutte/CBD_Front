<script setup lang="ts">
import {
  defineProps, defineEmits,
} from 'vue';

const props = defineProps([
  'product',
]);
const emits = defineEmits(['add-to-basket']);
const addToBasket = async (itemId: number): Promise<void> => {
  emits('add-to-basket', itemId);
};
</script>

<template>
  <div class="product">
    <img v-if="props.product.images" :src="props.product.images[0]" :alt="props.product.name">
    <img v-else src="https://placehold.co/150x150" alt="Image indisponible">
    <h1>{{ props.product.name }}</h1>
    <div class="description">
      <p>{{ props.product.description }}</p>
    </div>
    <div class="details">
      <p>{{(props.product.price / 100).toLocaleString('fr')}} € / g</p>
      <p>TODO</p>
  <!--    TODO: DB, Ajouter concentration (%)-->
    </div>
<!--    eslint-disable-next-line max-len-->
    <button @click="addToBasket(props.product.id)">Ajouter au panier</button>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/variables';
.product {
  background-color: $light-green;
  width: 43%;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
  img {
    margin: 1rem 0;
  }
  h1 {
    font-family: $title;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-family: $body;
    line-height: 1rem;
    word-break: break-all;
  }
  .description {
    text-align: start;
    height: 4rem;
    width: 78%;
    justify-self: flex-start;
    overflow-y: scroll;
    overflow-x: clip;
    //Hides scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .description::-webkit-scrollbar {
    display: none;
  }
  .details {
    background-color: lightgreen;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
  button {
    cursor: pointer;
    background-color: $black;
    color: $white;
    border: none;
    padding: .5rem;
  }
}

</style>
