<!--  eslint-disable max-len  -->
<template>
    <!-- Section de la politique de confidentialité avec une bordure verte -->
    <div class="privacy-policy">
        <h1 class="main-title">POLITIQUE DE CONFIDENTIALITÉ</h1>

        <p>L’adresse de notre site Web est : <a href="https://stoneland-cbd.fr">https://stoneland-cbd.fr</a>.</p>

        <h2 class="section-title">Utilisation des données personnelles collectées</h2>

        <h3 class="subsection-title">Commentaires</h3>
        <p>
            Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.
        </p>
        <p>
            Une chaîne anonymisée créée à partir de votre adresse de messagerie (également appelée hash) peut être envoyée au service Gravatar pour vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici : <a href="https://automattic.com/privacy/">https://automattic.com/privacy/</a>. Après validation de votre commentaire, votre photo de profil sera visible publiquement à côté de votre commentaire.
        </p>

        <h3 class="subsection-title">Médias</h3>
        <p>
            Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de localisation depuis ces images.
        </p>

        <h3 class="subsection-title">Formulaires de contact</h3>

        <h3 class="subsection-title">Cookies</h3>
        <p>
            Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse de messagerie et site web dans des cookies. C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d’un an.
        </p>
        <p>
            Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.
        </p>
        <p>
            Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
        </p>
        <p>
            En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.
        </p>

        <h3 class="subsection-title">Contenu embarqué depuis d’autres sites</h3>
        <p>
            Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.
        </p>
        <p>
            Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.
        </p>

        <h3 class="subsection-title">Statistiques et mesures d’audience Utilisation et transmission de vos données personnelles</h3>

        <h3 class="subsection-title">Durées de stockage de vos données</h3>
        <p>
            Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.
        </p>
        <p>
            Pour les utilisateurs et utilisatrices qui s’enregistrent sur notre site (si cela est possible), nous stockons également les données personnelles indiquées dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur nom d’utilisateur·ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.
        </p>

        <h3 class="subsection-title">Les droits que vous avez sur vos données</h3>
        <p>
            Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.
        </p>

        <h3 class="subsection-title">Transmission de vos données personnelles</h3>
        <p>
            Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un service automatisé de détection des commentaires indésirables.
        </p>
    </div>
</template>

<style scoped lang="scss">
    /* Bordure verte pour la politique de confidentialité */
    .privacy-policy {
        border: 8px solid green; /* Bordure verte épaissie */
        padding: 20px; /* Espacement interne */
    }

    /* Titre principal en grand et gras */
    .main-title {
        font-size: 32px; /* Taille du titre principal */
        font-weight: bold; /* Gras */
        margin-bottom: 20px; /* Espacement sous le titre */
    }

    /* Titres des sections en gras */
    .section-title,
    .subsection-title {
        font-weight: bold; /* Gras */
        margin-top: 20px; /* Espacement au-dessus des titres */
        font-size: 24px; /* Taille des titres */
    }

    /* Titre des sous-sections */
    .subsection-title {
        font-size: 20px; /* Taille du sous-titre */
    }

    /* Liens */
    a {
        color: blue; /* Couleur des liens */
        text-decoration: underline; /* Soulignement des liens */
    }
</style>
