---
layout: home
title: Home
permalink: /
---

<section class="section is-medium hero">
  <div class="container has-text-centered">
    <h1 class="title is-1" style="font-weight: 800; letter-spacing: -1px; margin-bottom: 2rem;">
      Hello! I'm <span class="has-text-primary">Tran Quoc Dang</span>
    </h1>
    <h2 class="subtitle is-3" style="font-weight: 300; max-width: 800px; margin: 0 auto;">
      I am a <b class="has-text-weight-bold">Researcher & MSc Student</b> specialized in Information and Communication Engineering based in South Korea.
    </h2>
    <div style="margin-top: 3rem;">
        <a href="#about" class="button is-dark is-rounded is-medium" style="margin-right: 1rem;">More About Me</a>
        <a href="{{site.baseurl}}/projects" class="button is-primary is-outlined is-rounded is-medium">View Portfolio</a>
    </div>
  </div>
</section>

---

<section id="about" class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-6">
        <h2 class="title is-2">A bit about myself.</h2>
        <p class="content is-medium">
          I am deeply passionate about R&D in contemporary communication technologies, currently contributing to a prominent lab at <strong>Chungbuk National University</strong>. Blending academia with practical problem-solving is what I do best.
        </p>
        <p class="content">
          Beyond research, I actively build robust systems, develop personal projects spanning different tech stacks, organize community tech events, and share my findings through writing.
        </p>
        <br/>
        <div class="tags are-medium">
          <span class="tag" style="background-color: var(--primary-light);"><a href="{{site.baseurl}}/portfolio" style="color: var(--primary); font-weight: 600;">Education</a></span>
          <span class="tag" style="background-color: var(--primary-light);"><a href="{{site.baseurl}}/portfolio" style="color: var(--primary); font-weight: 600;">Experience</a></span>
          <span class="tag" style="background-color: var(--primary-light);"><a href="{{site.baseurl}}/portfolio" style="color: var(--primary); font-weight: 600;">Skills</a></span>
          <span class="tag" style="background-color: var(--primary-light);"><a href="{{site.baseurl}}/portfolio" style="color: var(--primary); font-weight: 600;">Awards</a></span>
        </div>
      </div>
      <div class="column is-5 is-offset-1">
        <figure class="image is-square" style="border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <img src="{{site.author-image}}" alt="Tran Quoc Dang" style="object-fit: cover;">
        </figure>
      </div>
    </div>
  </div>
</section>

---

<section class="section">
  <div class="container">
    <h2 class="title is-2 has-text-centered" style="margin-bottom: 3rem;">Latest from the Blog</h2>
    
    <div class="columns is-multiline">
      {% for post in site.posts limit:3 %}
      <div class="column is-4">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; border-radius: 10px; overflow: hidden;">
          <div class="card-content" style="flex-grow: 1;">
            <p class="is-size-7 has-text-grey" style="margin-bottom: 0.5rem;">{{ post.date | date: "%B %d, %Y" }}</p>
            <p class="title is-4"><a href="{{ post.url | relative_url }}" class="has-text-dark">{{ post.title }}</a></p>
            <div class="content">
              {{ post.content | strip_html | truncatewords: 25 }}
            </div>
          </div>
          <footer class="card-footer" style="border-top: none; padding: 0 1.5rem 1.5rem;">
            <a href="{{ post.url | relative_url }}" class="has-text-primary has-text-weight-bold">Read article &rarr;</a>
          </footer>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="has-text-centered has-margin-top-large" style="margin-top: 2rem;">
      <a href="{{site.baseurl}}/blog/" class="button is-dark is-rounded">View all posts</a>
    </div>
  </div>
</section>

---

<section id="contact" class="section has-background-light" style="border-radius: 20px; padding: 5rem 3rem; margin: 2rem 0;">
  <div class="container has-text-centered">
    <h2 class="title is-2">Let's connect</h2>
    <p class="subtitle is-4" style="margin-top: 1rem; margin-bottom: 2rem;">
      Whether it's discussing research, a new project idea, or just saying hi.
    </p>
    <a href="mailto:{{ site.email }}" class="button is-primary is-large is-rounded">Drop me an email</a>
    
    <div style="margin-top: 3rem;" class="is-flex is-justify-content-center">
      {% if site.github_username %}
      <a href="https://github.com/{{site.github_username}}" class="icon is-large has-text-dark" target="_blank" style="margin: 0 0.5rem;"><i class="fab fa-github fa-2x"></i></a>
      {% endif %}
      {% if site.linkedin_username %}
      <a href="https://linkedin.com/in/{{site.linkedin_username}}" class="icon is-large has-text-dark" target="_blank" style="margin: 0 0.5rem;"><i class="fab fa-linkedin fa-2x"></i></a>
      {% endif %}
    </div>
  </div>
</section>
