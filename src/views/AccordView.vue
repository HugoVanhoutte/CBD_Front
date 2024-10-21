<!--  eslint-disable max-len  -->
<template>
  <div class="payment-page">
    <h1>Sécurisez Vos Achats sur STONELAND-CBD.FR</h1>
    <p>Chez CBD.FR, votre sécurité est notre priorité absolue. C'est pourquoi nous proposons des paiements sécurisés via 3D Secure pour toutes les transactions de vente de CBD sur notre site. Toutes les transactions sont également sécurisées par le protocole SSL, toutes vos données sont donc cryptées. Toutes vos informations sont protégées dans notre boutique CBD.</p>

    <p>Le système 3D Secure est un protocole de sécurité qui permet d'identifier les détenteurs de bitcoins avant d'autoriser les transactions. Lorsque vous effectuez un achat sur notre site, il vous sera demandé de saisir votre adresse Bitcoin et de confirmer votre identité en répondant à des questions de sécurité ou en utilisant l'authentification biométrique. Cette étape supplémentaire garantit que seuls les détenteurs de bitcoins autorisés peuvent utiliser leurs bitcoins pour effectuer des achats sur notre site.</p>

    <p>En choisissant de payer via 3D Secure, vous pouvez être assuré que vos transactions sont effectuées en toute sécurité et que vos informations Bitcoin sont protégées contre la fraude et les abus. Nous vous invitons donc à utiliser ce mode de paiement sécurisé lors de vos achats de CBD sur notre site.</p>

    <p>Réalisez vos achats en ligne de produits CBD et/ou chanvre en toute sécurité (et donc en toute sérénité) chez CBD.FR. Notre partenaire bancaire Banque Populaire s'assure que votre processus d'achat se déroule sans problème et en toute sécurité.</p>

    <!-- Nouveau rectangle pour centrer l'image -->
    <div class="image-container">
      <img src="../assets/images/secure.png" alt="Image centrée" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.payment-page {
  background-color: #e0f7e0; /* Fond vert clair */
  border: 10px solid #2ecc71; /* Bordure verte plus large */
  padding: 20px; /* Espacement intérieur */
  font-family: Arial, sans-serif; /* Police de caractère */
  line-height: 1.6; /* Hauteur de ligne */
  position: relative; /* Pour positionner le rectangle en bas */
}

/* Style du titre principal */
h1 {
  color: #2c3e50; /* Couleur du texte du titre */
  font-size: 2rem; /* Taille du titre */
  margin-bottom: 20px; /* Espacement en bas */
  font-weight: bold; /* Mettre le titre en gras */
}

/* Style pour les paragraphes */
p {
  margin-bottom: 15px; /* Espacement entre les paragraphes */
  color: #34495e; /* Couleur du texte */
}

/* Ajout d'un margin-bottom au dernier paragraphe pour détacher du rectangle */
p:last-of-type {
  margin-bottom: 80px; /* Augmenter l'espacement en bas */
}

/* Style pour le rectangle d'image */
.image-container {
  width: 100%; /* Prend toute la largeur */
  background-color: #2ecc71; /* Fond vert du rectangle */
  padding: 20px; /* Espacement intérieur */
  text-align: center; /* Centrer le contenu */
  position: absolute; /* Permet de positionner le rectangle */
  bottom: 0; /* Coller le rectangle en bas */
  left: 0; /* Aligner à gauche */
}

/* Style pour l'image */
.image-container img {
  max-width: 20%; /* Limiter la largeur de l'image à 20% du conteneur */
  height: auto; /* Garder le ratio d'aspect */
  margin: 0 auto; /* Centrer l'image */
  display: block; /* Nécessaire pour que margin auto fonctionne */
}
</style>
