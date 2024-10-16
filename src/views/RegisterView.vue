<script setup lang="ts">
import { ref } from 'vue';
import store from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLogging = ref(true);
const emailRegister = ref<string>('');
const usernameRegister = ref<string>('');
const passwordRegister = ref<string>('');
const emailLogin = ref<string>('');
const passwordLogin = ref<string>('');

const register = async () => {
  const res = await fetch('http://localhost:3001/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: {
        email: emailRegister.value,
        username: usernameRegister.value,
        password: passwordRegister.value,
      },
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(`${res.status}: ${data.message}`);
    return undefined;
  }
  await store.dispatch('setToken', data.token);
  await router.push('/');
  return undefined;
};
// TODO Ajouter verifications avant envoi user: password match, email correct, every field filled

const login = async () => {
  const res = await fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: {
        email: emailLogin.value,
        password: passwordLogin.value,
      },
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    console.log(`${res.status}: ${data.message}`);
    return undefined;
  }
  localStorage.setItem('token', data.token);
  await router.push('/');
  return undefined;
};
</script>

<template>
  <main>
    <div class="row">
      <img src="../assets/images/lock.svg" alt="Icône cadenas">
      <h2>Skio sécurisé</h2>
    </div>
    <div>
      <h1>Nouveau client</h1>
      <p>
        En créant un compte sur notre boutique, vous pourrez parcourir le processus de paiement plus
        rapidement, stocker plusieurs adresses de livraisons, afficher et suivre vos commandes dans
        votre compte et plus encore.
      </p>
      <button @click="isLogging = !isLogging" v-if="isLogging">Créer votre compte</button>
      <button @click="isLogging = !isLogging" v-else>Se connecter</button>
    </div>
    <div v-if="isLogging">
      <h1>Connexion au compte</h1>
      <label for="emailLogin">
        E-mail
        <input
          type="email"
          id="emailLogin"
          v-model="emailLogin"
          @keydown.enter="login()"
        >
      </label>
      <label for="passwordLogin">
        Mot de passe
        <input
          type="password"
          id="passwordLogin"
          v-model="passwordLogin"
          @keydown.enter="login()"
        >
      </label>
      <button @click="login()">S'identifier</button>
      <router-link to="/">Mot de passe oublié ?</router-link>
    </div>
    <div v-else>
      <h1>Création d'un compte</h1>
      <label for="emailRegister">
        E-mail
        <input
          type="email"
          id="emailRegister"
          v-model="emailRegister"
          @keydown.enter="register()"
        >
      </label>
      <label for="usernameRegister">
        Nom d'utilisateur
        <input
          type="text"
          id="usernameRegister"
          v-model="usernameRegister"
          @keydown.enter="register()"
        >
      </label>
      <label for="passwordRegister">
        Mot de passe
        <input
          type="password"
          id="passwordRegister"
          v-model="passwordRegister"
          @keydown.enter="register()"
        >
      </label>
      <label for="passwordRepeat">
        Confirmez Mot de passe
        <input
          type="password"
          id="passwordRepeat"
          @keydown.enter="register()"
        >
      </label>
      <button @click="register()">Créer un compte</button>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/variables';
  main {
    font-family: $body;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2, h1 {
      font-weight: bold;
      margin: .5rem 0;
    }
    h1 {
      text-transform: uppercase;
      font-size: 1.25rem;
    }
    h2 {
      margin: 0 .5rem;
    }
    div {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1rem 0;
      button {
        border: none;
        background-color: $black;
        color: $white;
        padding: .75rem;
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
      }
      p {
        margin: .75rem 0;
      }
      label {
        display: flex;
        flex-direction: column;
        margin: .5rem 0;
        input {
          border: none;
          background-color: #dedede; /* Todo: variable */
          height: 1.25rem;
          margin: .5rem 0;
        }
      }
      a {
        align-self: end;
        color: gray;
      }
    }
    div.row {
      flex-direction: row;
      align-items: center;
      justify-content: start;
      img {
        width: 10%
      }
    }
  }
</style>
