<template>
  <div class="about-us-page">
    <div class="text-section">
      <h1 class="main-title">RENCONTREZ LES FONDATEURS</h1>
      <p class="description">
        Vous sentir commence par vous sentir au mieux.
        Rejoignez notre communauté de personnes qui ressentent et sont elles-mêmes authentiques.
      </p>
      <div class="button-container">
        <button class="about-button">À propos de nous</button>
      </div>
    </div>

    <!-- Section pour les images -->
    <div class="about-section">
      <!-- Nouveau container pour les images et le rectangle -->
      <div class="image-rectangle-container">
        <div class="image-container">
          <div class="image-wrapper">
            <img src="../assets/images/gallery14.png" alt="Image 1" class="about-image">
          </div>
          <div class="image-wrapper second-wrapper">
            <img src="../assets/images/gallery15.png"
             alt="Image 2" class="about-image second-image">
          </div>
        </div>

        <!-- Rectangle placé ici -->
        <div class="rectangle"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
// Importation des polices
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

// Définition des variables de couleurs
$black: #000000;
$dark_green: #006633;
$olive: #487669;
$light_green: #9ebe67;
$white: #ffffff;
$footer-bg: #3C3A3A;
$about-button-color: #988888; /* Couleur du bouton À propos de nous */
$rectangle-color: #48B94A; /* Couleur du rectangle */

// Définition des polices
$body: "Inter", sans-serif;
$title: "Jost", serif;

.about-us-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between; /* Espacement entre les sections */
  text-align: left; /* Alignement par défaut à gauche */

  .text-section {
    padding: 50px 20px;
    text-align: left; /* Aligne tout le texte à gauche */

    .main-title {
      font-family: $title; /* Utilisation de la police Jost pour le titre */
      font-size: 1.8rem; /* Taille du titre réduite pour être sur une seule ligne */
      margin-bottom: 10px; /* Réduit l'espace en bas pour rapprocher le bouton */
    }

    .description {
      font-family: $body; /* Utilisation de la police Inter pour la description */
      font-size: 1.2rem; /* Taille de la description ajustée */
      line-height: 1.5;
      max-width: 700px;
      margin: 0 auto; /* Centrer le texte horizontalement */
      text-align: left; /* Aligne le texte à gauche */
    }

    /* Conteneur pour centrer le bouton */
    .button-container {
      display: flex; /* Utiliser flex pour centrer le bouton */
      justify-content: center; /* Centrer le bouton horizontalement */
      margin-top: 20px; /* Espace au-dessus du bouton */
    }

    .about-button {
      background-color: $about-button-color;
      color: $white; /* Utilisation de la variable blanche */
      padding: 10px 20px;
      border: none;
      font-size: 1.4rem; /* Taille du bouton ajustée */
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      display: inline-block; /* Pour centrer le bouton */
    }
  }

  // Section À propos de nous
  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrer les éléments */
    padding: 20px;

    .image-rectangle-container {
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%; /* Prendre toute la largeur */
      gap: 20px; /* Espacement entre les images et le rectangle */
    }

    .image-container {
      gap: 10px;
      display: flex;
      align-items: center; /* Aligner les images */
      justify-content: center; /* Centrer horizontalement */
      position: relative;
      margin-bottom: 30px;

      .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .about-image {
          width: 100px; /* Réduction de la taille des images */
          height: 250px;
          object-fit: cover; /* Remplir le conteneur tout en gardant le ratio d'aspect */
        }
        .second-image {
          position: relative;
          top: 30px;
        }
      }
    }

    // Rectangle placé à droite des images
    .rectangle {
      width: 150px; /* Taille du rectangle adaptée aux images */
      height: 100px;
      background-color: $rectangle-color;
      position: relative;
      right: 50px;
      bottom: 5px;
    }
  }
}
</style>
