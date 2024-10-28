<template>
  <div class="testimonial-container">
    <img class="testimonial-image" src="../assets/images/gallery19.png" alt="Sarah M." />
    <div class="testimonial-text">
      <div class="rating">
        ★★★★★
      </div>
      <p>
        "Depuis que j'ai découvert les produits CBD, ma vie a radicalement changé.
        J'étais stressée en permanence, incapable de me détendre après des journées longues
        et épuisantes. J'ai essayé plusieurs marques,
        mais aucune ne m'a apporté les bienfaits que je recherchais...
        jusqu'à ce que je trouve STONED LAND CBD. Un peu de CBD avant de me coucher,
        et je me sens enfin apaisée et prête à affronter la nuit.
        Je recommande ces produits à tous ceux qui recherchent un peu de calme
        dans leur quotidien."
      </p>
      <p class="author">
        - Sarah M.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Importation des polices */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

/* Couleurs */
$dark_green: #006633;
$light_green: #9ebe67;
$black: #000000;
$white: #ffffff;

/* Polices */
$body: "Inter", sans-serif;
$title: "Jost", serif;

.testimonial-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex; /* Utiliser flex pour aligner les éléments */
  flex-direction: column; /* Orientation colonne par défaut pour mobile */
  position: relative; /* Pour le positionnement absolu du texte */
  margin-bottom: 300px;
}

.testimonial-image {
  width: 90%; /* Image à 90% de la largeur */
  margin-left: 20px; /* Ajout d'une marge à gauche de 20px (vous pouvez ajuster la valeur) */
}

.testimonial-text {
  background-color: $light_green; /* Couleur d'arrière-plan pour le texte */
  padding: 20px;
  color: $black; /* Couleur du texte */
  position: absolute; /* Positionnement absolu pour chevaucher l'image */
  bottom: -250px; /* Positionner le texte tout en bas */
  right: 0; /* Positionner le texte à droite */
  width: 70%; /* Étendre le texte à 70% de la largeur */
}

.rating {
  font-size: 24px; /* Taille de la notation */
  color: $black; /* Couleur de la notation */
  margin-bottom: 10px; /* Marge en bas de la notation */
}

.testimonial-text p {
  font-size: 16px; /* Taille de police pour le texte */
  line-height: 1.6; /* Interligne pour le texte */
}

.testimonial-text .author {
  margin-top: 10px; /* Marge au-dessus de l'auteur */
  font-size: 14px; /* Taille de police pour l'auteur */
  font-style: italic; /* Italique pour l'auteur */
}

/* Suppression des media queries : styles pour tous les écrans */
.testimonial-container {
  flex-direction: row; /* Passer à une disposition en ligne */
}

.testimonial-image {
  width: 90%; /* Largeur de l'image */
  margin: 0; /* Supprimer les marges pour l'image */
  margin-bottom: -30px; /* Ajuster la marge inférieure pour remonter l'image */
}

.testimonial-text {
  bottom: -250px; /* Descendre le texte vers le bas */
  left: auto; /* Supprimer le décalage à gauche */
  right: 0; /* Garder le texte à droite */
  width: 70%; /* Étendre le texte à 70% de la largeur */
  margin-top: 0; /* Supprimer le décalage vers le bas */
  z-index: 2; /* Assurez-vous que le texte soit au-dessus de l'image */
}
</style>
