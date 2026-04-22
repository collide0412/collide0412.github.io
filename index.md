---
layout: home
title: Home
permalink: /
---

<section class="section is-medium hero" style="background: linear-gradient(135deg, var(--bg-color) 0%, var(--primary-light) 100%); border-radius: 0 0 40px 40px; margin-top: -80px; padding-top: 140px; padding-bottom: 8rem;">
  <div class="container has-text-centered">
    <div class="is-inline-block" style="background-color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: var(--primary); margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid var(--border);">
      ✨ Welcome to my digital space
    </div>
    <h1 class="title is-1" style="font-weight: 800; letter-spacing: -1px; margin-bottom: 1.5rem; font-size: 4rem; line-height: 1.2;">
      Hi, I'm <span class="has-text-primary">Tran Quoc Dang</span>
    </h1>
    <h2 class="subtitle is-3 has-text-grey" style="font-weight: 300; max-width: 700px; margin: 0 auto; line-height: 1.6;">
      <b class="has-text-dark">Researcher & MSc Student</b> specialized in Information and Communication Engineering, based in South Korea.
    </h2>
    <div style="margin-top: 2.5rem; display: flex; justify-content: center; gap: 1rem;">
        <a href="{{site.baseurl}}/portfolio" class="button is-primary is-rounded is-medium" style="box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);">View My Portfolio</a>
        <a href="#about" class="button is-white is-outlined is-rounded is-medium" style="border: 2px solid var(--border);">More About Me</a>
    </div>
  </div>
</section>

<section id="about" class="section" style="padding-top: 5rem; padding-bottom: 5rem;">
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

<section class="section" style="padding-top: 5rem; padding-bottom: 5rem; background-color: var(--bg-color);">
  <div class="container">
    <div class="is-flex is-justify-content-space-between is-align-items-flex-end" style="margin-bottom: 3rem;">
      <div>
        <h2 class="title is-2" style="font-weight: 700;">Latest Insights</h2>
        <p class="subtitle is-5 has-text-grey" style="margin-top: 0.5rem;">Thoughts on technology, research, and academia.</p>
      </div>
      <div>
        <a href="{{site.baseurl}}/blog/" class="button is-primary is-outlined is-rounded">See All Posts &rarr;</a>
      </div>
    </div>
    
    <div class="columns is-multiline">
      {% for post in site.posts limit:3 %}
      <div class="column is-4">
        <a href="{{ post.url | relative_url }}" style="display: block; height: 100%;">
          <div class="card" style="height: 100%; display: flex; flex-direction: column; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid var(--border); transition: transform 0.2s, box-shadow 0.2s; cursor: pointer;">
            <div class="card-content" style="flex-grow: 1; padding: 2rem;">
              <p class="is-size-7 has-text-primary has-text-weight-bold is-uppercase" style="margin-bottom: 0.75rem; letter-spacing: 1px;">{{ post.date | date: "%B %d, %Y" }}</p>
              <h3 class="title is-4 has-text-dark" style="line-height: 1.4; margin-bottom: 1rem;">{{ post.title }}</h3>
              <div class="content has-text-grey">
                {{ post.content | strip_html | truncatewords: 22 }}
              </div>
            </div>
            <div style="padding: 0 2rem 2rem; margin-top: auto;">
              <span class="has-text-primary has-text-weight-semibold" style="display: inline-flex; align-items: center; gap: 0.5rem;">Read More <i class="fas fa-arrow-right is-size-7"></i></span>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section id="contact" class="section is-medium" style="position: relative; overflow: hidden; padding: 8rem 2rem; margin-top: 2rem; border-top: 1px solid var(--border);">
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to right, var(--bg-color), var(--primary-light), var(--bg-color)); opacity: 0.5; z-index: -1;"></div>
  <div class="container has-text-centered">
    <div style="display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; background-color: white; border-radius: 50%; box-shadow: 0 10px 25px rgba(79, 70, 229, 0.2); margin-bottom: 2rem;">
      <i class="fas fa-paper-plane fa-2x has-text-primary"></i>
    </div>
    <h2 class="title is-2" style="font-weight: 800; font-size: 3rem; margin-bottom: 1rem;">Let's Collaborate</h2>
    <p class="subtitle is-4 has-text-grey" style="max-width: 600px; margin: 0 auto 3rem; line-height: 1.6;">
      My inbox is always open. Whether it's to discuss research ideas, talk about Data Engineering, or just to network.
    </p>
    <a href="mailto:{{ site.email }}" class="button is-dark is-large is-rounded" style="padding-left: 2.5rem; padding-right: 2.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
      <span class="icon is-small"><i class="fas fa-paper-plane"></i></span>
      <span>Say Hello</span>
    </a>
  </div>
</section>
