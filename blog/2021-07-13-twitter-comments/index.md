---
layout: post
title: Using Twitter for blog comments
date: 2021-07-13T00:00:00.000Z
tags:
  - post
excerpt: 'Static link to Twitter for blog comments, instead of embedding'
twitterComment: >-
  To keep in line with my No JavaScript promise, I'm using Twitter for my blog
  post comments
twitterLink: 'https://twitter.com/frankbille/status/1415786907569586176'
---

I have wanted to support comments on my blog posts but was unsure how to do that best, with my No JavaScript promise.
It might have been possible to find a solution that used `<iframe />`, but that required loading in from another
site, including JavaScript, and wasn't that cheating? 🤔

No, the answer had to be simpler, so I decided to use Twitter for comment. It should be as simple as this:

1. Create a blog post about [something][firstblogpost] 💯
2. Post a status update on Twitter 💌
3. Take the Tweet link and add it to the blog post 👏

If anyone ever feels like commenting, they can click the link at the bottom of the blog post and reply
to my tweet. Easy Peasy!

## Make Twitter comment links part of the template

I didn't want to manually add the Twitter link to all blog posts and ensuring that it looked consistent.
Luckily I'm using [Eleventy][11ty], and I've already got some templates going. Adding support on
the template level was very easy.

First, I updated my [blog post template][posttemplate] and added this small section:

```twig
{% raw %}{% if twitterLink %}
<div class="twitter-link">
    <a href="{{ twitterLink }}" title="{{ twitterComment | safe }}" target="_blank">Comment on this blog post on Twitter</a>
</div>
{% endif %}{% endraw %}
```

And then I only have to add a `twitterLink` property to the front matter data on the blog post, like this:

```yaml
---
layout: post
title: New website made with Eleventy
date: 2021-06-08
tags: ['post']
excerpt: I have created this new website using Eleventy
twitterLink: https://twitter.com/frankbille/status/1414993301472747524
---
```

A nice and easy solution, and I'm sure I will remember to post to Twitter whenever I make a new blog
post. One single step, easy to remember. 👋

Oh, and of cause then update the code for the blog post to add the `twitterLink` property and push it
again. Easy Peasy!

## Automatically post to Twitter and add the twitterLink

Yeah, knowing myself, I'm not going to remember to do that. I've been around me long enough to know
most of my strengths and weaknesses. Fortunately, I'm in tech, and I love making computers do what
they are good at, and I'm bad at, like following a script precisely and consistently!

So with the help of [gray-matter][graymatter] (handling the meta-data in my templates),
[Twitter API v2][twitterapiv2] (posting tweets and getting the status id back) and
[fs.walk][fswalk] (easily find all my blog posts on the file system), I created [a small script][addtwitterlinkscript] to be run
on all commits. It finds blog posts that haven't been posted to Twitter yet, posts a status update and
inserts `twitterLink` in the post file.

The script is being called from my [GitHub Actions script][actionsscript], which afterward pushes the
changes to the blog post files back to the GitHub Repository, using the cool [Add & Commit][addcommit]
action.

It even supports custom Twitter status text if I set the `twitterComment` property in the post file.
In the unlikely event, I forget to set `twitterComment` it will fall back to the `excerpt` property
and finally the `title` property.

The only thing left to say is: I hope the script works, and if it does, there should be a Twitter link below
👇👇👇🤞🤞🤞

**Update 1:** It almost worked, and then not really. I had added the secret Twitter keys wrongly to GitHub
(Secrets need to be added as repository secrets to be accessible in the Action scripts). After fixing that,
it posted to Twitter and pushed the added twitterLink back to the source branch. But when using the default
GitHub token, a new built will never be triggered. The [solution][triggersolution] is to use a personal
access token instead.

[firstblogpost]: https://www.frankbille.dk/blog/2021-06-08-new-website/
[11ty]: https://11ty.dev
[posttemplate]: https://github.com/frankbille/frankbille.github.io/blob/source/_includes/layouts/post.njk
[graymatter]: https://github.com/jonschlinkert/gray-matter
[twitterapiv2]: https://github.com/PLhery/node-twitter-api-v2
[fswalk]: https://www.npmjs.com/package/@nodelib/fs.walk
[addtwitterlinkscript]: https://github.com/frankbille/frankbille.github.io/blob/source/.github/scripts/add-twitter-link.js
[actionsscript]: https://github.com/frankbille/frankbille.github.io/blob/source/.github/workflows/eleventy_build.yml
[addcommit]: https://github.com/marketplace/actions/add-commit
[triggersolution]: https://github.community/t/push-from-action-does-not-trigger-subsequent-action/16854
