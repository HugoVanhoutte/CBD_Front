<template>
  <div class="homepage">
    <!-- Section avec la photo de Dr. Katarina Meister -->
    <div class="profile-section">
      <div class="image-container">
        <img
          src="../assets/images/gallery10.png"
          alt="Dr. Katarina Meister"
          class="profile-picture"
        />
      </div>
      <div class="profile-title">
        <p>Dr. Katarina Meister, ND</p>
      </div>
      <div class="profile-text">
        <p>
          Dr. Katarina Meister est médecin naturopathe et membre active de la
          Wisconsin Naturopathic Doctors Association et de l'American
          Association of Naturopathic Physicians. Dr. Meister donne la
          priorité à une approche individualisée du bien-être naturel.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
// COULEURS
$black: #000000;
$dark_green: #006633;
$white: #ffffff;

// FONTS
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,100..900&display=swap');
$body: "Inter", sans-serif;
$title: "Jost", serif;

// Style global de la page
.homepage {
  padding: 20px;
  background-color: $white;
}

// Section du profil de Dr. Katarina Meister
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

// Container de l'image de profil
.image-container {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Cercle autour de l'image */
  overflow: hidden; /* Pour que l'image reste à l'intérieur du cercle */
}

// Image de profil
.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// Titre centré
.profile-title {
  margin-top: 15px;
  font-family: $title;
  font-size: 1.4rem; /* Ajustez la taille selon vos préférences */
  color: $black;
  text-align: center; /* Centrer le titre */
}

// Description alignée à gauche
.profile-text {
  text-align: left; /* Alignement à gauche de la description */
  margin-top: 15px;
  font-family: $body;
  font-size: 1.2rem;
  color: $black;
  max-width: 600px; /* Limiter la largeur du texte */
}
</style>
