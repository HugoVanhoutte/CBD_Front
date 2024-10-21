<template>
  <div class="homepage">
    <!-- Logo en haut -->
    <div class="logo">
      <img src="../assets/images/leafly.png" alt="Leafly Logo" class="logo-image" />
    </div>

    <!-- Section Titre & Sous-titre -->
    <div class="header">
      <h1 class="title">Nos collections</h1>
      <h2 class="subtitle">Le best de Stoned Land CBD</h2>
    </div>

    <!-- Grille de collection des produits -->
    <div class="collection-grid">
      <div class="collection-item">
        <img src="../assets/images/gallery1.png" alt="Produit 1" class="product-image" />
      </div>
      <div class="collection-item">
        <img src="../assets/images/gallery2.png" alt="Produit 2" class="product-image" />
      </div>
      <div class="collection-item">
        <img src="../assets/images/gallery3.png" alt="Produit 3" class="product-image" />
      </div>
      <div class="collection-item">
        <img src="../assets/images/gallery4.png" alt="Produit 4" class="product-image" />
      </div>
    </div>

    <!-- Texte sous les images -->
    <div class="description-section">
      <p class="description">Fabriqué par nous, avec la confiance de vous</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
// Couleurs
$black: #000000;
$white: #ffffff;
$light-grey: #f5f5f5;

// Fonts
$body-font: 'Inter', sans-serif;
$title-font: 'Jost', serif;

// Style général pour la page d'accueil
.homepage {
  padding: 15px;
  background-color: $light-grey;
}

// Logo
.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-image {
  max-width: 250px;
}

// Style de l'en-tête
.header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-family: $title-font;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-family: $title-font;
  font-size: 2rem;
  margin-bottom: 15px;
}

// Grille de produits (toujours 2 colonnes)
.collection-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; // Espacement entre les images
  justify-items: center;
}

.collection-item {
  background-color: $white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 260px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; // Remplir le conteneur tout en conservant le ratio
  border-radius: 8px;
}

// Texte sous les images
.description-section {
  text-align: center;
  margin: 20px 0;
}

.description {
  font-family: $body-font;
  font-size: 1rem;
  font-weight: bold;
  color: $black;
}
</style>
