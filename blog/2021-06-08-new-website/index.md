---
layout: post
title: New website made with Eleventy
date: 2021-06-08
tags: ["post"]
excerpt: I have created this new website using Eleventy
---

It has been a long time since I have done anything with my website, and I figured it was about time.
Having worked with a lot of heavyweight frontend frameworks, I wanted to go back to the roots again.  
For me, this means back to writing simple pages with little to no JavaScript. I have also find the
new wave of [brutalist websites][brutalist] quite refreshing, and I have tried my best to adhere to that
style.

## The Technical

I considered writing all code from scratch, but as I wanted to write the actual content using
Markdown, I looked into what modern tools were available to help me. These criteria helped me
narrow it down:

- Raw HTML/CSS should be the end result. Only JavaScript that I write myself is allowed, no
  framework overhead.
- Able to write the content in Markdown, to make it easier for me to focus on the content,
  when writing content. I rarely use big fancy word processors like Word or Google Docs,
  as I tend to be distracted by all the options available. Instead I use a simple text editor.
- Should be hosted on GitHub Pages and be able to use GitHub Actions to generate the site.
  The reason for this is that GitHub provides both for free and I like the simplicity of
  them.
- Easy to work with, while still being flexible. Start small, but ability to expand.
- Not too old project, because I'd like to see if someone had made the wheel even rounder.

From this I quickly ended up with [Eleventy (11ty)][eleventy] which checks off all the boxes above.
I got the basic setup in 15 minutes and then spend a couple of hours tweaking the CSS styles
to be brutal enough.

[brutalist]: https://brutalistwebsites.com/
[eleventy]: https://www.11ty.dev/
