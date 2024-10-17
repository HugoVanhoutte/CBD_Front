<template>
  <div class="subscription-page">
    <h1 class="main-title">Confiez votre équilibre quotidien au pouvoir du CBD</h1>
    <h2 class="subtitle">Devenir Poumon d'Or</h2>

    <p class="description">
      Notre meilleure offre se déroule toute l'année. Faites facilement une pause,
      modifiez ou annulez à tout moment.
      Mais ce n’est que le début auquel
      notre Gold Member s’intéresse:
    </p>

    <ul class="benefits-list">
      <li>⬩ Édition Limitée Cadeaux Gratuits</li>
      <li>⬩ Meilleur prix garanti</li>
      <li>⬩ Assistance VIP</li>
    </ul>

    <button class="subscribe-button">ABONNEZ VOUS ET ÉCONOMISEZ</button>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
// Importation des polices
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

// Définition des variables de couleurs
$black: #000000;
$white: #ffffff;
$button-color: #909090; /* Couleur du bouton d'abonnement */
$background-image: url('../assets/images/gallery8.png'); /* Image de fond */

// Définition des polices
$body: "Inter", sans-serif;

.subscription-page {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre les éléments horizontalement */
  justify-content: flex-start; /* Aligne les éléments en haut */
  height: 100vh; /* Prend toute la hauteur de la vue */
  text-align: left; /* Aligne le texte par défaut à gauche */
  background-image: $background-image;
  background-size: cover;
  background-position: center;
  padding: 20px; /* Ajuste le padding si nécessaire */
  position: relative;
  overflow: hidden;

  box-shadow: inset 0 0 0 1000px rgba(185, 185, 186, 0.589);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.29);
    z-index: 1;
  }

  h1, h2, p, ul, button {
    position: relative;
    z-index: 2;
    max-width: 800px; /* Assurez-vous que la largeur maximum est appropriée */
    margin: 0; /* Supprime les marges par défaut */
  }

  .main-title, .subtitle {
    font-family: $body;
    font-size: 1.2rem; /* Taille de police pour tous les écrans */
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center; /* Centre le texte */
  }

  .description {
    font-family: $body;
    font-size: 1.2rem; /* Taille de police pour tous les écrans */
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;

    li {
      font-size: 1.2rem; /* Taille de police pour tous les écrans */
      line-height: 1.5;
    }
  }

  .subscribe-button {
    background-color: $button-color;
    color: $white;
    padding: 10px 20px;
    border: none;
    font-size: 1.2rem; /* Taille de police pour tous les écrans */
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s;
    margin-top: 20px;

    &:hover {
      background-color: darken($button-color, 10%);
    }
  }
}
</style>
