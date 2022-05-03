---
title: Nick Cox | Blog
description: Nick Cox's web development blog.
layout: /layouts/base.njk
tags: pages
---

<link rel="stylesheet" href="/css/blog.css"/>

# Blog

<ul>
{%- for post in collections.post -%}
  {% set url = ["/blog/", post.data.slug] | join %}
  <li class="blog-post-card">
    <a href="{{url}}">
      <div>
        <h2 class="blog-heading">{{ post.data.title }}</h2>
        <p>{{post.data.description}}</p>
      </div>
    </a>
  </li>
{%- endfor -%}
</ul>