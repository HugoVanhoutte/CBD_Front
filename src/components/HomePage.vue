<template>
  <div class="homepage">
    <div class="content-wrapper">
      <p class="title">Loisirs THC</p>
      <p class="description">
        Découvrez le pouvoir du CBD naturel. Découvrez notre gamme de produits
        à base de CBD, soigneusement conçus pour vous offrir bien-être et
        relaxation. Que vous cherchiez des huiles, des gummies ou des topiques,
        nos produits premium sont faits à partir d'ingrédients naturels,
        garantissant qualité et efficacité. Faites le choix d'une vie équilibrée
        et en pleine santé.
      </p>
    </div>
    <button class="cta-button">ESSAYER MAINTENANT</button>
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
  background-image: url('../assets/images/body-image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center; /* Centre le contenu horizontalement */
  align-items: flex-start; /* Aligne le contenu vers le haut */
  position: relative;
  padding: 20px; /* Padding pour marges sur petit écran */

  .content-wrapper {
    width: 80vw; /* Largeur de contenu ajustée */
    padding: 20px;
    text-align: left; /* Alignement du texte à gauche */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-top: 100px; /* Ajout d'une marge en haut pour descendre le contenu */
    margin-left: var(--custom-margin, 20px); /* Marge modifiable */
  }

  .title {
    font-size: 2rem; /* Taille de la police ajustée */
    margin-bottom: 15px;
    font-weight: bold;
    font-family: $title-font;
  }

  .description {
    font-size: 1.2rem; /* Taille de la police ajustée */
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: $body-font;
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
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: $dark_green;
    }
  }
}
</style>
