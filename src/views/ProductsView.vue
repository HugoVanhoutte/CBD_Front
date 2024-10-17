<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import store from '@/store';
import { Category, Product } from '../../config';

const router = useRouter();
const route = useRoute();

const category = ref<Category | object>({});
const products = ref<Product[]>([]);

const getProducts = async (): Promise<void> => {
  let requestUrl;
  if (route.params.category_id === 'all') {
    requestUrl = 'http://localhost:3001/api/products/';
  } else {
    requestUrl = `http://localhost:3001/api/products/category/${route.params.category_id}`;
  }
  const res = await fetch(requestUrl, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  if (res.ok) {
    return res.json().then(
      (data) => {
        Object.assign(products.value, data);
      },
    );
  }
  return undefined;
};

const getCategory = async (): Promise<void> => {
  const res = await fetch(`http://localhost:3001/api/categories/${route.params.category_id}`, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  if (res.ok) {
    return res.json().then(
      (data) => {
        Object.assign(category.value, data);
      },
    );
  }
  return undefined;
};

const addToBasket = (productId: number): undefined => {
  if (!store.state.user || !store.state.user.basket) {
    router.push('/register');
    return undefined;
  }
  const { basket } = store.state.user;
  const index = basket.findIndex((product) => product.id === productId);
  if (index !== -1) {
    basket[index].quantity += 1;
  } else {
    basket.push({ id: productId, quantity: 1 });
  }
  store.dispatch('updateUser');
  return undefined;
};

onMounted(() => {
  getCategory();
  getProducts();
  if (localStorage.getItem('token')) {
    store.dispatch('fetchUser', store.getters.getUserFromToken(store.getters.getToken()).id);
  }
});
</script>

<template>
  <h1>{{ category.name }}</h1>
  <div class="products">
    <ProductCard
      class="product"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-basket="addToBasket"
    />
  </div>
<!--  TODO: add colors to categories ?-->
</template>

<style scoped lang="scss">
@import '../assets/styles/variables';
h1 {
  font-family: $title;
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
}
.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
