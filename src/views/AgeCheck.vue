<template>
  <div class="age-check">
    <h1>Êtes-vous majeur ?</h1>
    <button @click="handleResponse(true)">Oui</button>
    <button @click="handleResponse(false)">Non</button>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const handleResponse = (isMajeur) => {
  if (isMajeur) {
    localStorage.setItem('isMajeur', true); // Sauvegarde dans le localStorage
    router.push({ name: 'home' }); // Rediriger vers la page d'accueil
  } else {
    localStorage.setItem('isMajeur', false); // Sauvegarde dans le localStorage
    router.push({ name: 'access-denied' }); // Rediriger vers la page d'accès refusé
  }
};

</script>

<style scoped>
.age-check {
  text-align: center;
  margin-top: 50px;
}button {margin: 10px;padding: 10px 20px;font-size: 18px;
  cursor: pointer;
}
</style>
