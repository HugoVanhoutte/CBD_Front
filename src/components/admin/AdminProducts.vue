<script setup lang="ts">
import { onMounted, ref } from 'vue';
import store from '@/store';
import { Category, Product } from '../../../config';

const products = ref<Product[]>([]);

const getProducts = async (): Promise<void> => {
  const res = await fetch(`${process.env.BACK_HOST_URL}:${process.env.BACK_PORT}/api/products`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(res.status, data.message);
  }
  Object.assign(products.value, data);
};

const getCategoriesByProduct = async (productId: number):Promise<number[]> => {
  const res = await fetch(`process.env.BACK_HOST_URL:process.env.BACK_PORT/api/categories/get-categories-by-product/${productId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(res.status, data.message);
  }
  return data;
};

const getCategory = async (categoryId: number):Promise<Category> => {
  const res = await fetch(`process.env.BACK_HOST_URL:process.env.BACK_PORT/api/categories/${categoryId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(res.status, data.message);
  }
  return data;
};

const removeProduct = async (id: number): Promise<void> => {
  const res = await fetch(`process.env.BACK_HOST_URL:process.env.BACK_PORT/api/products/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: store.getters.getToken() },
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(res.status, data.message);
  }
  alert('Produit Supprimé');
};

onMounted(() => {
  getProducts().then(() => {
    products.value.forEach((product: Product) => {
      if (!product.categories) {
        // eslint-disable-next-line no-param-reassign
        product.categories = [];
      }
      getCategoriesByProduct(product.id as number).then((categories) => {
        categories.forEach((categoryId: number) => {
          getCategory(categoryId).then((category: Category) => {
            (product.categories as Category[]).push(category);
          });
        });
      });
    });
  });
});
</script>
<template>
  <header>
    <h1>Produits</h1>
  </header>
  <main>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Prix</th>
        <th>Catégories</th>
        <th>Supprimer</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key='product.id'>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td class="long">{{ product.description }}</td>
        <td class="one-line">{{ (product.price / 100).toLocaleString('fr') }} €</td>
        <td>
          <p v-for="(category) in product.categories" :key="category.id">{{category.name}}</p>
        </td>
        <td>
          <button @click="removeProduct(product.id as number)">
            Supprimer
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped lang="scss">
@import '../../assets/styles/variables';
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 100%;
    background-color: $black;
    font-family: $title;
    font-weight: bold;
    font-size: 4rem;
    color: $white;
    text-align: center;
  }
  button {
    border: none;
    border-radius: 9999px;
    background-color: $black;
    color: $white;
    text-align: center;
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    margin: 0.25rem;
    cursor: pointer;
  }
}
</style>
