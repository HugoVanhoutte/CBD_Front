<script setup lang="ts">
import { defineProps } from 'vue';
import store from '@/store';

const props = defineProps([
  'product',
]);
const updateUser = async () => {
  const res = await fetch(`http://localhost:3001/api/users/${store.state.user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: store.state.user,
    }),
  });
  if (!res.ok) {
    console.error(res.status);
  }
};

const addToBasket = async (itemId: number): Promise<void> => {
  const basket = store.getters.getUserBasket;
  // Check if itemId already exists in store, if true: increment quantity, else push with quantity 1
  // eslint-disable-next-line max-len
  if (basket[basket.indexOf(basket.find((item: number) => item.product_id === itemId))] !== undefined) {
    basket[basket.indexOf(basket.find((item: number) => item.product_id === itemId))].quantity += 1;
  } else {
    basket.push({
      product_id: itemId,
      quantity: 1,
    });
  }
  await updateUser();
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
    //Hide scrollbar
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
