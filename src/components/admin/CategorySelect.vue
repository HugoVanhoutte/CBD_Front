<script setup lang="ts">
import {
  onMounted,
  ref,
  defineEmits,
  defineProps,
} from 'vue';
import { Category } from '../../../config';

const categories = ref<Category[]>([]);
const selected = ref<number>(0);
const emits = defineEmits(['remove-category', 'set-category']);
const props = defineProps(['value', 'index']);

const getCategories = async () => {
  const res = await fetch(`${process.env.BACK_HOST_URL}:${process.env.BACK_PORT}/api/categories`, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(res.status, data.json);
  }
  categories.value = data; // Fill the categories with fetched data
};

const changeCategory = () => {
  emits('set-category', selected.value);
};

const removeCategory = () => {
  emits('remove-category', props.index);
};

onMounted(() => {
  getCategories();
});
</script>

<template>
  <label for="category">
    <p>Selected: {{ selected }}</p>
    <select
      name="category"
      id="category"
      @change="changeCategory"
      v-model="selected"
    >
      <option value="0" disabled>Veuillez sélectionner une catégorie</option>
      <option v-for="category in categories" :value="category.id" :key="category.id">
        {{ category.name }}
      </option>
    </select>
    <button @click="removeCategory">Supprimer Catégorie</button>
  </label>
</template>

<style scoped lang="scss">
</style>
