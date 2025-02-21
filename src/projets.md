---
layout: layout.njk
title: Projets
---

# Mes Projets

<div class="container">
  <div class="projects">
    {% for projet in collections.projets %}
      {% include "project-card.njk" %}
    {% endfor %}
  </div>
</div>
