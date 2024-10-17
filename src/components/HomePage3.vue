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
      <div class="profile-text">
        <p>Dr. Katarina Meister, ND</p>
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
// Aucun script spécifique requis
</script>

<style scoped lang="scss">
// COULEURS
$black: #000000;
$dark_green: #006633;
$white: #ffffff;

// FONTS
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
$body: "Inter", sans-serif;
$title: "Jost", serif;

// Style global de la page
.homepage {
  padding: 20px;
  background-color: $white;
}

.video {
  height: 500px;
}

// Section du profil de Dr. Katarina Meister
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.image-container {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Cercle autour de l'image */
  overflow: hidden; /* Pour que l'image reste à l'intérieur du cercle */
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-text {
  text-align: center;
  margin-top: 15px;
  font-family: $body;
  font-size: 1.2rem;
  color: $black;
}
</style>
