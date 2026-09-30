---
layout: single
title: "Hi, I'm Mehrnoosh 👋"
permalink: /
author_profile: true
classes: wide
---

I'm a **Machine Learning Engineer** and scientist who bridges research and engineering.
I build large-scale machine learning systems and data pipelines, with a focus on
**genomics, proteomics and drug discovery**.

## What I work on

- **Machine learning in production** — designing, training and deploying deep learning models with PyTorch and TensorFlow.
- **Drug discovery & genetics** — large-scale genome-wide analyses to find genetic associations with complex diseases.
- **Bioinformatics pipelines** — scalable data processing for proteomics and genomics data.

## Quick links

[About me]({{ "/about/" | relative_url }}){: .btn .btn--primary}
[Experience]({{ "/experience/" | relative_url }}){: .btn .btn--info}
[Projects]({{ "/projects/" | relative_url }}){: .btn .btn--success}
[Blog]({{ "/posts/" | relative_url }}){: .btn .btn--inverse}

{% if site.posts.size > 0 %}
## Latest posts

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>— {{ post.date | date: "%B %-d, %Y" }}</small>
{% endfor %}
{% endif %}
