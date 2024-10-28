<script setup lang="ts">
import AdminNavBar from '@/components/admin/AdminNavBar.vue';
import { ref } from 'vue';
import AdminProducts from '@/components/admin/AdminProducts.vue';

const selected = ref<string>('products');
</script>

<template>
  <AdminNavBar/>
  <AdminProducts v-if="selected === 'products'"/>
</template>

<style scoped lang="scss">

</style>
