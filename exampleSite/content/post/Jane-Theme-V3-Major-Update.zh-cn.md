---
title: "Jane 主题 V3 大版本更新"
date: 2024-09-20T16:01:23+08:00
draft: false
tags: ["preview", "shortcodes", "tag-6", "update"]
categories: ["docs", "shortcodes", "index"]
author: "xianmin"

weight: 1
---

## 更新内容
- 使用 [Pico CSS](https://picocss.com/) 作为配色方案，可切换主题颜色，可切换 dark / light 模式。
- 可自定义 home page 展示内容。
- 添加 STYLE SETTINGS ，位于 /assets/sass/_settings.scss ；
- 弃用 Category 页面，合并到 Archive 页面。

由于修改的地方比较多，还有很多地方不完善，请您谅解！

<!--more-->

## 自定义你的主页
将 `/exampleSite/content/_index.md` 复制到你的网站 `/content/_index.md` ，修改里面的参数。

如果是多语言站点，请创建相应的 `_index.language.md` , 比如 `_index.zh-cn.md` 。

## 通过 STYLE SETTINGS 个性化你的网站
将 `/assets/sass/_settings.scss` 和 `/assets/sass/_custom.scss` 复制到你的网站根目录下（注意：路径名、文件名要一致）。

在 `_settings.scss` 中修改变量，在 `/assets/sass/_custom.scss` 中添加自定义样式。


## 从旧版本升级到 v3
由于新版本使用到了 Sass 语言的最新功能，需要安装 Dart Sass 。

安装指南见官方文档： https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass 。

如果你使用了 CI/CD 自动化工具，请记得同样要安装 Dart Sass: https://gohugo.io/hugo-pipes/transpile-sass-to-css/#installing-in-a-production-environment

注意: 升级之后可能会遇到一些兼容性问题。如果遇到困难，欢迎提 issue。

## 这个主题的开发理念
1. 没有 `node_modules` ，越少的依赖越容易维护；
2. 鼓励使用者按照个人喜好修改主题，让网站更个性化；
3. 阅读体验始终是最重要的；
4. 一次部署，专心写作，不再折腾。
