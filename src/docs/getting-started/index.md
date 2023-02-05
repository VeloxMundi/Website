---
layout: layouts/doc.html
title: Getting Started
status: published
sortOrder: 2.0.0
---

The first time you run _Velox Mundi Desktop,_ you will want to configure the base directory where all of your world data will be stored.

Click on the **Tools** menu and select **Options.** This will open a new window where you can change the application's settings.

Click the button labeled **Set Directory.** A dialog window will open asking you to select a folder where your world data is or will be stored. This folder can be located anywhere on your computer. _Velox Mundi Desktop_ will read and write files in this directory as you build your world.

Once you have selected a directory, you can close the **Options** window and begin working on building your worlds.

**_Getting Started_ contents:**

{% for doc in collections.docs %}
{% if doc.data.currentLevel==currentLevel %}
{% if page.url != doc.url %}
[{{ doc.data.title }}]({{ doc.url }})


{% endif %}
{% endif %}
{% endfor %}