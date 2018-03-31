![jane-preview](https://raw.githubusercontent.com/xianmin/hugo-theme-jane/master/images/preview.png)
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)

## hugo-theme-jane

Jane is a readable theme for Hugo. It's a fork of the [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even) and made a lot of changes.

[Demo](http://en.xianmin.org/hugo-theme-jane/) | [中文说明](https://github.com/xianmin/hugo-theme-jane/blob/master/README-zh.md)

This theme focuses on improving reading experience.

**Other Key features:**

- Responsive and mobile friendly
- Multilingual Mode support
- Shortcodes : image, blockquote, music, etc.
- Separate design for Tags & Categories Page.
- Social network linking


## Who use Hugo-theme-Jane

- [ATFeng](https://www.gooth.org/) - A beautiful blog fork from Jane.
- [Jack Baty's Blog](https://www.baty.net/) - Thousands of posts on the site powered by Hugo & Theme Jane.
- [Notes on Blue Skies](https://terrty.net) - Personal blog in Russian by @paskal
- [贤民的比特记忆](http://www.xianmin.org/) - A Chinese blog.
- Waiting to add more...


## Quick Start

**Note:**  This tutorial assumes that you use [Hugo][] for **the first time** . [Hugo][] is one of the most popular open-source static site generators. You can check the [Hugo Official Docs][] for more help.

[Hugo]: https://gohugo.io/
[Hugo Official Docs]: https://gohugo.io/getting-started/



### 1. Quick Install Hugo

Download the appropriate version for your platform from [Hugo Releases](https://github.com/gohugoio/hugo/releases). Once downloaded, the binary can be run from anywhere. Ideally, you should install it somewhere in your `PATH` for easy use. `/usr/local/bin` is the most probable location.



### 2. Quick Create a New Site

```bash
hugo new site myBlog
```

The above will create a new Hugo site in a folder named `myBlog`.



### 3. Quick Use Hugo-Theme-Jane

Clone this repository into `themes` folder:

```bash
cd myBlog
git clone https://github.com/xianmin/hugo-theme-jane.git --depth=1 themes/jane
```

Copy the example site content:

```bash
cp -r themes/jane/exampleSite/content ./
```

Copy the default site config:

```bash
cp themes/jane/exampleSite/config.toml ./
```

Take a look at the example site:

```bash
hugo server
```

Open http://localhost:1313/ , you will see the example site.



### 4. Start Blog

The default config file `config.toml` in your site root directory. Customize it.

The default content files in the `./content/post` directory.



### 5. Generate Your Website

Run `hugo` , this generates your website to the `public/` directory by default.

Nice work!

If you have extra time or want to know more about [Hugo][] , check out the awosome  [Hugo Official Docs][] .



## Site Configuration

Take a look in the [exampleSite](https://github.com/xianmin/hugo-theme-jane/tree/master/exampleSite) folder.

This directory contains an example config file and the content for the demo.
It serves as an example setup for your documentation.

Copy the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary.



## Single Post Configuration

**Front Matter** : Hugo allows you to add front matter in yaml, toml, or json to your content files.

**YAML Example:**

```yaml
---
# Common-Defined
title: "An Example Post"
date: 2018-01-01T16:01:23+08:00
lastmod: 2018-01-02T16:01:23+08:00 
draft: false
tags: ["tag-1", "tag-2", "tag-3"]
categories: ["index"]
author: "xianmin"

# User-Defined
# You can close(false) or open(true) something for this content.
# P.S. comment can only be closed
comment: false
toc: false
# You can also define another contentCopyright
contentCopyright: '<a rel="license noopener" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a>'
reward: false
mathjax: true
---
```



## Multilingual (Language) Support

Hugo-Theme-Jane supports the creation of websites with multiple languages side by side.

You should define the available languages in a `languages` section in your site configuration.

Translations are collected from the `i18n/` folder.

To use the translations:

```toml
# use Chinese translation
defaultContentLanguage = "zh-cn"  # Default language to use (if you setup multilingual support)
[Languages.zh-cn]
  languageCode = "zh-cn"
```

To use the Multilingual Mode, see [Multilingual Mode | Hugo](https://gohugo.io/content-management/multilingual/) .


## Contributing

If you are interested in fixing issues and contributing directly to this theme, please see the document [How to Contribute](https://github.com/xianmin/hugo-theme-jane/wiki/How-to-Contribute) .

There are many ways to contribute to the Jane theme:

- submitting pull requests
- reporting issues
- providing new translations
- creating suggestions
- Correct inappropriate English expression (ok, my English is not good)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2177570?v=4" width="80px;"/><br /><sub><b>Chen Xianmin</b></sub>](http://www.xianmin.org)<br />[💻](https://github.com/xianmin/hugo-theme-jane/commits?author=xianmin "Code") [🎨](#design-xianmin "Design") [📖](https://github.com/xianmin/hugo-theme-jane/commits?author=xianmin "Documentation") [💬](#question-xianmin "Answering Questions") | [<img src="https://avatars3.githubusercontent.com/u/970?v=4" width="80px;"/><br /><sub><b>Jack Baty</b></sub>](https://www.baty.net)<br />[🐛](https://github.com/xianmin/hugo-theme-jane/issues?q=author%3Ajackbaty "Bug reports") [🤔](#ideas-jackbaty "Ideas, Planning, & Feedback") [⚠️](https://github.com/xianmin/hugo-theme-jane/commits?author=jackbaty "Tests") [👀](#review-jackbaty "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/126313?v=4" width="80px;"/><br /><sub><b>Athurg Feng</b></sub>](https://www.gooth.org)<br />[👀](#review-athurg "Reviewed Pull Requests") [⚠️](https://github.com/xianmin/hugo-theme-jane/commits?author=athurg "Tests") [🐛](https://github.com/xianmin/hugo-theme-jane/issues?q=author%3Aathurg "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/712534?v=4" width="80px;"/><br /><sub><b>Dmitry Verkhoturov</b></sub>](https://terrty.net/cv/verhoturov.pdf)<br />[👀](#review-paskal "Reviewed Pull Requests") [🌍](#translation-paskal "Translation") [🤔](#ideas-paskal "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/1678456?v=4" width="80px;"/><br /><sub><b>Deckon</b></sub>](https://deckon-blog.netlify.com/)<br />[🌍](#translation-Deckon "Translation") | [<img src="https://avatars3.githubusercontent.com/u/2821085?v=4" width="80px;"/><br /><sub><b>YuShuangqi</b></sub>](https://yushuangqi.com)<br />[👀](#review-ysqi "Reviewed Pull Requests") [🤔](#ideas-ysqi "Ideas, Planning, & Feedback") [💻](https://github.com/xianmin/hugo-theme-jane/commits?author=ysqi "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!


## License

Hugo-theme-jane is licensed under the MIT license. Check the [LICENSE](LICENSE.md) file for details.
