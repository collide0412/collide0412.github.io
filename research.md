---
layout: page
title: Research
eyebrow: Research
description: Current research directions in network security, packet processing, and network measurement, with notes on earlier course projects.
permalink: /research/
image: /assets/images/social-card.png
---

<section class="content-section" aria-labelledby="current-directions-title">
  <header class="section-heading">
    <div>
      <p class="eyebrow">In progress</p>
      <h2 id="current-directions-title">Current directions</h2>
    </div>
    <p>These entries describe active research directions and engineering tooling. They are not presented as publications or completed findings.</p>
  </header>

  <div class="research-list">
    {% for project in site.data.projects %}
      {% if project.featured %}
      <article class="research-item">
        <header>
          <p class="project-meta">{{ project.category }} &middot; {{ project.status }}</p>
          <h3>{{ project.title }}</h3>
        </header>
        <p>{{ project.summary }}</p>
        {% if project.approach %}<p><strong>Current approach:</strong> {{ project.approach }}</p>{% endif %}
        {% if project.limitations %}<p><strong>Scope:</strong> {{ project.limitations }}</p>{% endif %}
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="content-section" aria-labelledby="course-projects-title">
  <header class="section-heading">
    <div>
      <p class="eyebrow">Earlier student work</p>
      <h2 id="course-projects-title">Course projects</h2>
    </div>
    <p>These projects predate the current network-systems research and are listed as course work, not as published research.</p>
  </header>

  <div class="research-list">
    <article class="research-item">
      <header>
        <p class="project-meta">Earlier course project &middot; Team lead &middot; <time datetime="2022-10">October 2022</time> - <time datetime="2023-04">April 2023</time></p>
        <h3>Automatic attendance system based on face recognition</h3>
      </header>
      <p>Built a prototype attendance workflow using Python and OpenCV-based face recognition. The work included implementation, team coordination, and system testing; no accuracy or deployment result is claimed.</p>
    </article>

    <article class="research-item">
      <header>
        <p class="project-meta">Earlier course project &middot; Team lead &middot; <time datetime="2023-10">October 2023</time> - <time datetime="2024-05">May 2024</time></p>
        <h3>Predictive modelling for student performance</h3>
      </header>
      <p>Explored student-outcome prediction with data-mining methods and examined variables including parental education and test preparation. No causal or performance claim is presented.</p>
    </article>
  </div>
</section>

<p><a href="{{ '/portfolio/#selected-work' | relative_url }}">View selected work and technical capabilities</a></p>
