![jane-preview](https://raw.githubusercontent.com/xianmin/hugo-theme-jane/master/images/preview.png)

## hugo-theme-jane

Jane is a readable theme for Hugo. It's a fork of [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even) with a lot of additional changes.

[Demo](https://xianmin.github.io/hugo-theme-jane/) | [中文说明](https://github.com/xianmin/hugo-theme-jane/blob/master/README-zh.md)

This theme focuses on improving the reading experience.

**Other Key features:**

- Responsive and mobile friendly
- Multilingual Mode support
- Shortcodes : image, blockquote, music, etc.
- Separate design for Tags & Categories Page
- Social network linking
- Better Pagination, TOC, footnote behavior
- Use the awesome Chroma syntax highlighting
- Custom css, Custom js, Custom head support
- Sub menu support
- Search Optimization


## Quick Start

**Note:**  This tutorial assumes that you are using [Hugo][] for **the first time** . [Hugo][] is one of the most popular open-source static site generators. You can check the [Hugo Official Docs][] for more help.

[Hugo]: https://gohugo.io/
[Hugo Official Docs]: https://gohugo.io/getting-started/



### 1. Install Hugo

Download the appropriate version for your platform from [Hugo Releases](https://github.com/gohugoio/hugo/releases). Once downloaded, the binary can be run from anywhere. Ideally, you should install it somewhere in your `PATH` for easy use. `/usr/local/bin` is the most probable location.



### 2. Create a New Site

```bash
hugo new site myBlog
```

The above will create a new Hugo site in a folder named `myBlog`.



### 3. Use Hugo-Theme-Jane

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

Open http://localhost:1313/ , you will see your site running with the example content.



### 4. Start a Blog

The default config file `config.toml` is located in your site root directory. You can customize it to match the details of your site.  Documentation about configuring Hugo can be found in the [Official Documentation](https://gohugo.io/getting-started/configuration/)

The default content files are located in the `./content/post` directory.



### 5. Generate Your Website

Run `hugo` , this generates your website to the `public/` directory by default.

Nice work!

If you have extra time or want to know more about [Hugo][] , check out the awosome  [Hugo Official Docs][] .



## Site Configuration

Take a look in the [exampleSite](https://github.com/xianmin/hugo-theme-jane/tree/master/exampleSite) folder.

This directory contains an example config file and the content for the demo.
It serves as an example setup for you to configure to your liking.

Copy the `config.toml` to the root directory of your website. Overwrite the existing config file if necessary.



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
- correct inappropriate English expression (ok, my English is not good)


## Contributors
This project exists thanks to all the people who contribute:

<a href = "https://github.com/xianmin/hugo-theme-jane/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=xianmin/hugo-theme-jane"/>
</a>


## License

Hugo-theme-jane is licensed under the MIT license. Check the [LICENSE](LICENSE.md) file for details.

