---
title: Nick Cox | Blog
description: Nick Cox's web development blog.
layout: /layouts/base.njk
tags: pages
label: Blog
permalink: /blog/
---

<link rel="stylesheet" href="{{'/css/blog.css' | url}}"/>

# Blog

<ul>
{%- for post in collections.post -%}
  {% set url = ["/blog/", post.data.slug] | join %}
  <li class="blog-post-card">
    <a href="{{url | url}}">
      <div>
        <h2 class="blog-heading">{{ post.data.title }}</h2>
        <p>{{post.data.description}}</p>
      </div>
    </a>
  </li>
{%- endfor -%}
</ul>
