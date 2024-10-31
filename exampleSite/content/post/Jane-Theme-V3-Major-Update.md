---
title: "Jane Theme V3 Major Update"
date: 2024-09-20T16:01:23+08:00
draft: false
tags: ["preview", "shortcodes", "tag-6", "update"]
categories: ["docs", "shortcodes", "index"]
author: "xianmin"

weight: 1
---

## Update Content
- Use [Pico CSS](https://picocss.com/) as the color scheme, allowing theme color switching and dark/light mode toggle.
- Customize Your Homepage.
- Added STYLE SETTINGS, located at `/assets/sass/_settings.scss` .
- Deprecated the Category page, merging it into the Archive page.

Please note that due to the extensive modifications, some areas may still need refinement. I appreciate your understanding!

<!--more-->

## Customize Your Homepage
Copy `/exampleSite/content/_index.md` to your website's `/content/_index.md` and modify the parameters inside.

For multilingual sites, please create corresponding `_index.language.md` files, such as `_index.zh-cn.md` .

## Personalize Your Website
Copy `/assets/sass/_settings.scss` and `/assets/sass/_custom.scss` to your website's root directory (Note: maintain the same path and file names).

Modify variables in `_settings.scss` and add custom styles in `/assets/sass/_custom.scss`.

## Upgrading to v3
The new version utilizes the latest Sass language features, requiring Dart Sass installation.

For installation guidance, refer to the official documentation: https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass.

If you are using CI/CD automation tools, please remember to install Dart Sass as well: https://gohugo.io/hugo-pipes/transpile-sass-to-css/#installing-in-a-production-environment

Note: You may encounter compatibility issues after upgrading. If you face difficulties, please feel free to open an issue.

## Development Philosophy of This Theme
1. No `node_modules` - fewer dependencies make maintenance easier.
2. Encourages users to modify the theme according to personal preferences for a more personalized website.
3. Reading Experience is the top priority.
4. Deploy once, focus on writing, no more hassle.
