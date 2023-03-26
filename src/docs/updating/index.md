---
layout: layouts/doc.html
title: Updating
sortOrder: 2.0.0
status: published
---

Although _Velox Mundi Desktop_ will eventually support Windows, Linux, and Mac operating systems, for now, we only support updating on a computer running Windows.

{% for doc in collections.docs %}
{% if doc.data.currentLevel==currentLevel %}
{% if page.url != doc.url %}
[{{ doc.data.title }}]({{ doc.url }})


{% endif %}
{% endif %}
{% endfor %}