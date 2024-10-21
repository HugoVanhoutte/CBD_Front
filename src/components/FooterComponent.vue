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
</script>

<template>
  <footer>
    <div>
      <h1>Produits</h1>
      <ul>
        <li>
          <router-link :to="{name: 'products', params: {category_id: 'all'}}">
            Tout
          </router-link>
        </li>
<!--        todo: links-->
        <li v-for="category in mainCategories" :key="category.id">
          <router-link :to="{name: 'products', params: {category_id: category.id}}">
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <h1>À propos</h1>
      <ul>
        <li>À props de nous</li>
        <li>Contactez nous</li>
        <li>De gros</li>
        <li>Label privé</li>
        <li>Demande d'affiliation</li>
        <li>Abonnez-vous et économisez</li>
        <li>Emplois</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <h1>Juridique</h1>
      <ul>
        <li><router-link to="/condition">Conditions d'utilisation</router-link></li>
        <li><router-link to="/mentions">Mentions Légales</router-link></li>
        <li><router-link to="/accord">Payement</router-link></li>
        <li><router-link to="/conditions">Politique de confidentialités</router-link></li>
        <li><router-link to="/expedition">Expédition</router-link></li>
        <li>Remboursement</li>
      </ul>
    </div>
    <div>
      <p>
        Les compléments alimentaires ne remplacent pas une alimentation variée. Un régime équilibré
        et un mode de vie sain sont essentiels. Ne dépassez pas les doses journalières recommandées.
        Maintenir hors de portée des enfants. Ne convient pas aux femmes enceintes et allaitantes,
        aux enfants et aux adolescents. Nous vous recommandons de consulter votre médecin avant de
        consommer des produits CBD, car pour des raisons juridiques nous ne sommes pas autorisés à
        faire des déclarations médicales concernant le mode d'action et les domaines d'application.
      </p>
      <p>
        Article L3421-4 :la vente ou la publicité pour des produits stupéfiants est
        passible d’une peine de 5 ans d’emprisonnement et de 75 000 € d’amende.
      </p>
    </div>
    <div class="icons-container">
      <img src="" alt="logo Facbook">
      <img src="" alt="Logo Instagram">
      <img src="" alt="Logo Tiktok">
    </div>
    <hr>
    <div class="icons-container">
      <img src="" alt="Logo Visa">
      <img src="" alt="Logo Mastercard">
      <img src="" alt="Logo PayPal">
      <img src="" alt="Logo American Express">
    </div>
    <div>
      <ul class="row">
        <li>À props de nous</li>
        <li>Contactez nous</li>
        <li>De gros</li>
        <li>Label privé</li>
        <li>Demande d'affiliation</li>
        <li>Abonnez-vous et économisez</li>
        <li>Emplois</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="far">
      <p>@2024 LOT.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '../assets/styles/variables';
  footer {
    color: $white;
    background-color: $footer-bg;
    padding: 4rem 2rem;
    font-family: $body;
    a {
      color: $white;
      text-decoration: none;
    }
    div {
      padding-bottom: 2rem;
      h1 {
        text-transform: uppercase;
        padding-bottom: 1rem;
      }
      ul {
        li {
          padding: .5rem;
        }
        padding-bottom: 1rem;
      }
      ul.row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          padding-right: 3rem;
        }
      }
      p {
        padding-bottom: 1rem;
      }
    }
    div.icons-container {
      display: flex;
      flex-direction: row;
    }
    div.far {
      padding: 3rem 0;
    }
  }
</style>
