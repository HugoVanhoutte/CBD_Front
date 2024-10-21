<template>
  <div class="sampling-page">
    <div class="text-section">
      <p class="main-title">ESSAYEZ-LES TOUS</p>
      <p class="sub-title">Échantillonnez nos meilleures ventes</p>
      <p class="description">
        Éliminez le stress lié à la décision et explorez nos formules éprouvées,
        toutes conçues pour s'adapter à votre poche et à votre routine.
      </p>
      <div class="button-container">
        <button class="cta-button">Commencez l'échantillonnage</button>
      </div>
    </div>
    <div class="image-background"></div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$sampling-bg: #ffffff; /* Fond blanc pour la partie texte */
$black: #000000;
$white: #ffffff;
$cta-bg-hover: #004d26; /* Couleur du bouton au survol */
$bg-image-url: url('../assets/images/gallery12.png'); /* URL de l'image de fond */

// Importation des polices
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

// Variables de police
$body-font: "Inter", sans-serif;
$title-font: "Jost", serif;

.sampling-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  .text-section {
    background-color: $sampling-bg;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    .main-title {
      font-size: 2rem; /* Même taille que la homepage */
      margin-bottom: 15px;
      font-weight: bold;
      font-family: $title-font;
    }

    .sub-title {
      font-size: 1.5rem; /* Taille légèrement plus petite pour le sous-titre */
      font-family: $title-font;
      margin-bottom: 15px;
    }

    .description {
      font-size: 1.2rem; /* Taille de police unifiée avec la homepage */
      line-height: 1.5;
      margin-bottom: 20px;
      font-family: $body-font;
      max-width: 700px;
      text-align: left;
    }

    .button-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .cta-button {
      background-color: $black;
      color: $white;
      padding: 12px 20px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      font-family: $body-font;
      transition: background-color 0.3s ease;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);

      &:hover {
        background-color: $cta-bg-hover;
      }
    }
  }

  .image-background {
    background-image: $bg-image-url;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
    width: 100%;
  }
}
</style>
