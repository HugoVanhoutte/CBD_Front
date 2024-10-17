<template>
  <div class="container">
    <!-- Section 1 -->
    <div class="section">
      <img src="../assets/images/gallery16.png" alt="Garantie de bonheur à 100%" />
      <h1>GARANTIE DE BONHEUR À 100 %</h1>
      <p>Retours ou échanges gratuits dans les 30 jours
         pour vous assurer d'aimer votre STONED LAND CBD</p>
    </div>

    <!-- Section 2 -->
    <div class="section">
      <img src="../assets/images/gallery17.png" alt="Livraison gratuite $75+" />
      <h1>LIVRAISON GRATUITE $75+</h1>
      <p>Obtenez la livraison gratuite sur toutes les commandes $75+.
         Les abonnés reçoivent automatiquement la livraison gratuite sans minimum.</p>
    </div>

    <!-- Section 3 -->
    <div class="section">
      <img src="../assets/images/gallery18.png" alt="Soutien humain" />
      <h1>SOUTIEN HUMAIN</h1>
      <p>Discutez avec un spécialiste du CBD pendant nos heures normales de bureau,
         MF 9h-16h CST.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
/* Importation des polices */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

/* Variables des couleurs */
$black: #000000;
$dark_green: #006633;
$olive: #487669;
$light_green: #9ebe67;
$white: #ffffff;
$footer-bg: #3C3A3A;

/* Variables des polices */
$body: "Inter", sans-serif;
$title: "Jost", serif;

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: $white;
}

.section {
  margin-bottom: 30px; /* Ajustement pour mobile */
}

.section img {
  display: block;
  margin: 0 auto 15px; /* Ajustement pour mobile */
  max-width: 80px; /* Taille d'image plus petite sur mobile */
}

h1 {
  font-size: 20px; /* Taille de police réduite sur mobile */
  margin-top: 20px; /* Ajustement pour mobile */
  color: $dark_green;
  text-align: center;
  font-family: $title;
}

p {
  font-size: 14px; /* Taille de police réduite sur mobile */
  color: $olive;
  text-align: center; /* Centrer le texte pour mobile */
  margin: 5px 0 30px; /* Ajustement pour mobile */
  font-family: $body;
}

/* Suppression des media queries : styles pour tous les écrans */
.section {
  margin-bottom: 50px; /* Marges pour écrans plus grands */
}

.section img {
  max-width: 100px; /* Taille d'image plus grande pour les écrans plus larges */
}

h1 {
  font-size: 24px; /* Taille de police pour les écrans plus grands */
  margin-top: 30px; /* Ajustement pour les écrans plus grands */
}

p {
  font-size: 16px; /* Taille de police pour les écrans plus grands */
  text-align: left; /* Alignement à gauche pour les écrans plus larges */
  margin: 10px 0 40px; /* Marges pour les écrans plus grands */
}

.container {
  padding: 40px; /* Plus de padding pour les très grands écrans */
}
</style>
