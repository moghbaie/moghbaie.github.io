---
permalink: /projects/
title: "Projects"
---

A selection of my work. More code lives on my [GitHub](https://github.com/moghbaie)
and models/datasets on [Hugging Face](https://huggingface.co/moghbaie).

{% for project in site.data.projects %}
### {% if project.url %}[{{ project.name }}]({{ project.url }}){% else %}{{ project.name }}{% endif %}
{{ project.description }}
{% if project.tags %}<small>{{ project.tags | join: " · " }}</small>{% endif %}
{% endfor %}
