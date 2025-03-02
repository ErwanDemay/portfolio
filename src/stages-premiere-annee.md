---
layout: layout.njk
title: Stage de première année
---

<div class="container">

# Stage de première année

<div class="intro-section">
  <div class="intro-card">
    <h2>UPPA (Université de Pau et des Pays de l'Adour)</h2>
    <p><strong>Contexte :</strong> Création d'un site fullstack pour une psychologue (avec prise de rendez-vous sous forme de calendrier)</p>
    <p><strong>Cliente :</strong> Julie Gionnet, Psychologue qui pratique en visio-conférence</p>
  </div>

  <div class="intro-card">
    <h2>Technologies utilisées</h2>
    <div class="tech-cards">
      <div class="tech-card">
        <img src="/assets/images/html.png" alt="HTML">
        <p>HTML</p>
      </div>
      <div class="tech-card">
        <img src="/assets/images/css.png" alt="CSS">
        <p>CSS</p>
      </div>
      <div class="tech-card">
        <img src="/assets/images/javascript.png" alt="JavaScript">
        <p>JavaScript</p>
      </div>
      <div class="tech-card">
        <img src="/assets/images/php.png" alt="PHP">
        <p>PHP</p>
      </div>
      <div class="tech-card">
        <img src="/assets/images/mysql.png" alt="MySQL">
        <p>MySQL</p>
      </div>
    </div>
  </div>
</div>

<div class="stage-content">
  <div class="stage-section">
    <h2>Design et Maquettage</h2>
    <div class="stage-card">
      <img src="/assets/images/landing-julie.png" alt="Page d'accueil réalisée sur figma" class="stage-img">
      <p class="stage-explanation">Première version de la page d'accueil réalisée sur Figma en accord avec la charte graphique et les exemples envoyés par la cliente. L'accent a été mis sur une interface épurée et professionnelle.</p>
    </div>
  </div>

  <div class="stage-section">
    <h2>Conception de la Base de Données</h2>
    <div class="stage-card">
      <img src="/assets/images/bdd-stage.png" alt="Image de la BDD SQL" class="stage-img">
      <p class="stage-explanation">Structure principale de la base de données MySQL, conçue pour gérer efficacement les informations utilisateurs et les rendez-vous. La base a été pensée pour être évolutive et facilement maintenable.</p>
    </div>

    <div class="stage-card">
      <img src="/assets/images/stage1-images/bdd-articles.png" alt="zoom de la bdd pour la table article et lien" class="stage-img">
      <p class="stage-explanation">Zoom sur la structure des tables articles et liens. Une relation a été établie via une clé étrangère pour permettre une gestion dynamique du contenu et des images associées, offrant ainsi une grande flexibilité à la cliente pour mettre à jour son site.</p>
    </div>

  </div>

  <div class="stage-section">
    <h2>Développement Backend</h2>
    <div class="code-cards">
      <div class="code-card">
        <img src="/assets/images/stage1-images/requete-accueil.png" alt="requete pour pouvoir afficher l'accueil" class="code-img">
        <p class="code-explanation">Requête SQL optimisée pour récupérer le contenu dynamique de la page d'accueil. Cette approche permet une gestion flexible du contenu sans modification du code source.</p>
      </div>

      <div class="code-card">
        <img src="/assets/images/stage1-images/php-requete-accueil.png" alt="requete pour pouvoir afficher l'accueil" class="code-img">
        <p class="code-explanation">Implémentation PHP de la logique de récupération des données. Le code suit les bonnes pratiques de sécurité avec l'utilisation de requêtes préparées.</p>
      </div>
    </div>

  </div>

  <div class="stage-section">
    <h2>Système de Rendez-vous</h2>
    <div class="code-cards">
      <div class="code-card">
        <img src="/assets/images/stage1-images/page-rdv.png" alt="page de prise de rendez-vous" class="code-img">
        <p class="code-explanation">Interface de prise de rendez-vous intuitive permettant aux patients de visualiser facilement les créneaux disponibles.</p>
      </div>

      <div class="code-card">
        <img src="/assets/images/stage1-images/get-creneaux-fonction.png" alt="fonction de récupération des créneaux" class="code-img">
        <p class="code-explanation">Fonction de récupération des créneaux disponibles, intégrant une logique de filtrage pour éviter les conflits de rendez-vous.</p>
      </div>

      <div class="code-card">
        <img src="/assets/images/stage1-images/filtre-creneaux.png" alt="filtrage des créneaux" class="code-img">
        <p class="code-explanation">Système de filtrage avancé des créneaux, permettant une gestion fine des disponibilités et des contraintes horaires.</p>
      </div>
    </div>

  </div>

  <div class="stage-section">
    <h2>Bilan du Stage</h2>
    <div class="conclusion-card">
      <p>Ce stage s'est déroulé dans un contexte d'autonomie importante, mon tuteur étant un enseignant-chercheur très occupé. Malgré cela, j'ai pu bénéficier de son expertise précieuse pour la conception de la base de données.</p>
      <p>Les principaux résultats :</p>
      <ul class="features-list">
        <li>Interface utilisateur moderne et responsive répondant aux attentes de la cliente</li>
        <li>Système de gestion de contenu dynamique permettant une mise à jour facile</li>
        <li>Base de données robuste et évolutive</li>
        <li>Système de prise de rendez-vous fonctionnel (hors paiement et confirmation par mail)</li>
      </ul>
      <p>Les fonctionnalités de paiement en ligne et de confirmation par mail avec lien visio n'ont pas pu être implémentées pendant la durée du stage, nécessitant des compétences et une infrastructure plus avancées.</p>
    </div>
  </div>
</div>

</div>
