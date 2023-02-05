---
layout: layouts/doc.html
title: Installation
slug: installation
sortOrder: 1.0.0
status: published
---

Although _Velox Mundi Desktop_ will eventually support Windows, Linux, and Mac operating systems, for now, we only support installing on a Windows.

{% for doc in collections.docs %}
{% if doc.data.currentLevel==currentLevel %}
{% if page.url != doc.url %}
[{{ doc.data.title }}]({{ doc.url }})


{% endif %}
{% endif %}
{% endfor %}