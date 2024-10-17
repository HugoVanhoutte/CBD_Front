<template>
  <div class="homepage">
    <div class="content-wrapper">
      <p class="main-title">NOTRE NOUVEL AJOUT</p>
      <p class="sub-title">Gommies aux champignons Brain Boost</p>
      <p class="description">
        Présentation de notre dernier ajout et de notre tout premier produit non CBD :
        un mélange unique de champignons fonctionnels et de plantes spécifiquement formulés
        pour soutenir la mémoire, la concentration et la fonction cérébrale.
      </p>
    </div>
    <button class="cta-button">ACHETER BRAIN BOOST</button>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$black: #000000;
$white: #ffffff;
$dark_green: #006633;
$olive: #487669;
$light_green: #9ebe67;
$footer-bg: #3C3A3A;

// Importation des polices
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

// Variables de police
$body-font: "Inter", sans-serif;
$title-font: "Jost", serif;

.homepage {
  background-image: url('../assets/images/gallery11.png'); /* Image en fond */
  background-size: cover; /* Adapter la taille de l'image à l'écran */
  background-position: center; /* Centrer l'image */
  background-repeat: no-repeat; /* Ne pas répéter l'image */
  height: 100vh;
  display: flex;
  justify-content: flex-start; /* Aligner le contenu vers le haut à gauche */
  align-items: center;
  position: relative;
  padding: 0 10px; /* Padding pour marges sur petit écran */
  flex-direction: column;

  .content-wrapper {
    width: 100%;
    padding: 10px;
    text-align: left; /* Alignement du texte à gauche */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-left: var(--custom-margin, 20px); /* Marge modifiable */
    margin-top: 50px; /* Ajout d'une marge en haut pour descendre le contenu */
  }

  .main-title {
    font-size: 2rem;
    margin-bottom: 30px;
    font-family: $title-font;
    text-align: center; /* Titre principal centré */
    text-transform: uppercase; /* Tout en majuscule */
    width: 100%;
  }

  .sub-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-family: $title-font;
    text-align: left; /* Titre secondaire aligné à gauche */
    width: 100%; /* S'assure que le texte occupe tout l'espace disponible */
  }

  .description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: $body-font;
    text-align: left; /* Description alignée à gauche */
    width: 100%; /* S'assure que le texte occupe tout l'espace disponible */
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
    position: absolute;
    top: 50%; /* Centré verticalement */
    left: 50%; /* Centré horizontalement */
    transform: translate(-50%, -50%); /* Ajustement pour être au centre exact */
    text-align: center;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: $dark_green;
    }
  }
}
</style>
