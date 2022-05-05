---
title: Using Different CSS Methods To Achieve The Same Results
description: CSS is extremely flexible, so it's good to figure out which approach works best for youl
layout: /layouts/blog.njk
slug: using-different-css-methods-to-achieve-the-same-results
tags: post
date: 2022-04-08
originally_published: https://nocd.hashnode.dev/using-different-css-methods-to-achieve-the-same-results
---

CSS is extremely flexible, and there are no hard and fast rules when it comes to how you should achieve your desired layout. You can achieve the same results an any number of ways, so it's up to you to decide which way is best for your project.

I'm going to show you a few different approaches to achieve the same layout with HTML and CSS (I used [TailwindCSS](https://tailwindcss.com/) for these examples).

## Method One: Parent has all the power

![](https://i.imgflip.com/11a0zv.jpg)

<iframe height="400" style="width: 100%;" scrolling="no" title="PowerToTheParent" src="https://codepen.io/nich-o-las/embed/YzNKwGX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nich-o-las/pen/YzNKwGX">
  PowerToTheParent</a> by nich-o-las (<a href="https://codepen.io/nich-o-las">@nich-o-las</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The first example gives all the control of the layout to the parent container. The parent container has padding, as well as tailwind's `space-y-2` rule to achieve the desired vertical margins between the child elements. There are no rules are applied to the children themselves. This is a great way to set rules on things like lists, tiles, or anything else where you might have to render a lot of children dynamically, e.g. list items you've returned from an AJAX call, or items in a "todo list" application. This method uses the smallest amount of code among the three examples.

## Method Two: Children have all the power

![](https://images-na.ssl-images-amazon.com/images/I/51eeAWItwbL._SX281_BO1,204,203,200_.jpg)

<iframe height="400" style="width: 100%;" scrolling="no" title="PowerToTheChildren" src="https://codepen.io/nich-o-las/embed/LYxPBEe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nich-o-las/pen/LYxPBEe">
  PowerToTheChildren</a> by nich-o-las (<a href="https://codepen.io/nich-o-las">@nich-o-las</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The second example gives the power over the layout to the children. The white divs (items 1,2, and 3) are all wrapped in a container div whose padding positions the child elements. This method can be useful when you have a more bespoke design, where you need to give each child more control of its appearance and location in the layout. This method might appeal to anyone who likes to avoid issues of inheritance in CSS by keeping all rules localized to the content to which they apply. This method has the most code of all three examples, as it is the only one that has an extra layer of nesting.

## Method Three: Parent and children share power

![](https://www.memesmonkey.com/images/memesmonkey/29/2918ad8fae30f7bd7fc529a48d21451b.jpeg)

<iframe height="400" style="width: 100%;" scrolling="no" title="PowerSharedBetweenChildrenAndParent" src="https://codepen.io/nich-o-las/embed/QWdLBwW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nich-o-las/pen/QWdLBwW">
  PowerSharedBetweenChildrenAndParent</a> by nich-o-las (<a href="https://codepen.io/nich-o-las">@nich-o-las</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The last example delegates some of the power to the parent element, and some to the children. The parent container has padding, and the second and third children are positioned by adding a top margin. This example is good for when you have a general container with rules that apply to all children, but you still want each child to have some level of control over its own position and appearance within the layout.

## TL/DR: Do what makes most sense to your and your team

There are no rules, but that doesn't mean that you should take an anarchic approach to your layouts. Figure out what works best for you and your team, and do that.
