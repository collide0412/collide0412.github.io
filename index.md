---
layout: home
title: Home
description: Tran Quoc Dang is a master's student and engineer working on network measurement, packet analysis, and machine-learning-based intrusion detection.
permalink: /
image: /assets/images/social-card.png
---

<section class="hero-section" aria-labelledby="hero-title">
  <div class="site-container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Network systems · Security · Applied ML</p>
      <h1 id="hero-title">Tran Quoc Dang</h1>
      <p class="hero-role">Master's student in Information and Communication Engineering</p>
      <p class="hero-summary">I work on network measurement, packet analysis, and machine-learning-based intrusion detection. My approach combines systems implementation with reproducible empirical evaluation.</p>
      <div class="hero-actions">
        <a class="button-link button-link-primary" href="#work">View selected work</a>
        <a class="button-link button-link-secondary" href="{{ '/research/' | relative_url }}">Explore research</a>
      </div>
      <ul class="profile-links" aria-label="Professional links">
        <li><a href="https://github.com/{{ site.github_username }}">GitHub <span aria-hidden="true">↗</span></a></li>
        <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}/">LinkedIn <span aria-hidden="true">↗</span></a></li>
        <li><a href="mailto:{{ site.email }}">Email</a></li>
      </ul>
    </div>

    <aside class="focus-panel" aria-labelledby="focus-title">
      <p class="panel-label" id="focus-title">Current focus</p>
      <ul class="focus-list">
        <li>
          <span class="focus-index" aria-hidden="true">01</span>
          <div>
            <strong>Cross-dataset intrusion detection</strong>
            <p>Evaluating how models behave across network environments and dataset shifts.</p>
          </div>
        </li>
        <li>
          <span class="focus-index" aria-hidden="true">02</span>
          <div>
            <strong>Packet and traffic analysis</strong>
            <p>Building research tooling around packet captures, flow boundaries, and dataset quality.</p>
          </div>
        </li>
        <li>
          <span class="focus-index" aria-hidden="true">03</span>
          <div>
            <strong>Network measurement</strong>
            <p>Studying throughput, latency, jitter, packet loss, and transport behavior on Linux.</p>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</section>

<section class="section-block" id="work" aria-labelledby="work-title">
  <div class="site-container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Engineering and research in context</h2>
      </div>
      <p>Work is labeled by status; no unpublished result is presented as a completed finding.</p>
    </div>

    {% assign featured_projects = site.data.projects | where: "featured", true %}
    <div class="project-grid">
      {% for project in featured_projects limit:4 %}
      <article class="project-card">
        <div class="project-meta">
          <span>{{ project.category }}</span>
          <span>{{ project.status }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        {% if project.technologies %}
        <ul class="tag-list" aria-label="Technologies used">
          {% for technology in project.technologies limit:5 %}
          <li>{{ technology }}</li>
          {% endfor %}
        </ul>
        {% endif %}
        {% if project.repository_url %}
        <a class="text-link" href="{{ project.repository_url }}">View repository <span aria-hidden="true">↗</span></a>
        {% endif %}
      </article>
      {% endfor %}
    </div>
    <p class="section-action"><a class="text-link" href="{{ '/portfolio/' | relative_url }}">View the full technical profile →</a></p>
  </div>
</section>

<section class="section-block section-tinted" id="about" aria-labelledby="about-title">
  <div class="site-container two-column">
    <div>
      <p class="eyebrow">About</p>
      <h2 id="about-title">Systems implementation meets empirical evaluation</h2>
    </div>
    <div class="prose-stack">
      <p>I am a master's student in South Korea with an undergraduate background in Informatics and Computer Engineering. My current work connects network systems, cybersecurity, and applied machine learning.</p>
      <p>I am interested in both building practical tools and testing them through controlled, reproducible experiments. That includes packet processing, Linux networking, data pipelines, and evaluation methods for intrusion-detection models.</p>
    </div>
  </div>
</section>

<section class="section-block" aria-labelledby="capabilities-title">
  <div class="site-container">
    <div class="section-heading compact-heading">
      <div>
        <p class="eyebrow">Technical capabilities</p>
        <h2 id="capabilities-title">Tools organized by the work they support</h2>
      </div>
    </div>
    <div class="capability-grid">
      <article>
        <h3>Programming</h3>
        <p>C, C++, Python, SQL, shell scripting, and reproducible notebook workflows.</p>
      </article>
      <article>
        <h3>Networking and systems</h3>
        <p>TCP/IP, UDP, Linux, socket programming, packet capture, traffic analysis, and performance measurement.</p>
      </article>
      <article>
        <h3>Security and machine learning</h3>
        <p>Network intrusion detection, DDoS detection, XGBoost, feature engineering, concept drift, and out-of-distribution evaluation.</p>
      </article>
    </div>
  </div>
</section>

<section class="section-block section-bordered" id="background" aria-labelledby="background-title">
  <div class="site-container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Background</p>
        <h2 id="background-title">Research, industry, and education</h2>
      </div>
      <p>A concise overview; the profile page contains the supporting detail.</p>
    </div>
    <div class="background-grid">
      <div>
        <h3 class="subsection-title">Experience</h3>
        <ol class="timeline">
          <li class="timeline-item">
            <div class="item-meta"><span>Mar 2025–present</span><span>South Korea</span></div>
            <h4>Graduate Student Researcher</h4>
            <p>EASW Lab, Chungbuk National University</p>
          </li>
          <li class="timeline-item">
            <div class="item-meta"><span>Mar–Sep 2023</span><span>Vietnam</span></div>
            <h4>Data Engineer Intern</h4>
            <p>Viettel IDC</p>
          </li>
        </ol>
      </div>
      <div>
        <h3 class="subsection-title">Education</h3>
        <ol class="timeline">
          <li class="timeline-item">
            <div class="item-meta"><span>Mar 2025–present</span></div>
            <h4>Master's studies, Information and Communication Engineering</h4>
            <p>Chungbuk National University</p>
          </li>
          <li class="timeline-item">
            <div class="item-meta"><span>Oct 2020–Aug 2024</span></div>
            <h4>Bachelor's studies, Informatics and Computer Engineering</h4>
            <p>VNU International School</p>
          </li>
        </ol>
      </div>
    </div>
    <p class="section-action"><a class="text-link" href="{{ '/portfolio/' | relative_url }}">Open full background and skills →</a></p>
  </div>
</section>

<section class="contact-section" id="contact" aria-labelledby="contact-title">
  <div class="site-container contact-grid">
    <div>
      <p class="eyebrow">Contact</p>
      <h2 id="contact-title">Discuss research or engineering work</h2>
      <p>For research collaboration, technical projects, or graduate opportunities, email is the most direct way to reach me.</p>
    </div>
    <div class="contact-actions">
      <a class="button-link button-link-primary" href="mailto:{{ site.email }}">Email Tran Quoc Dang</a>
      <a class="text-link" href="https://www.linkedin.com/in/{{ site.linkedin_username }}/">LinkedIn profile <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>
