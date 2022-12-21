+++
title = "How to Contribute"
description = ""
tags = [
    "go",
    "golang",
    "hugo",
    "Contribute",
]
date = "2022-10-15"
categories = [
    "Development",
    "index",
]
+++

## Contributing to Jane

There are many ways to contribute to the Jane theme: submitting pull requests, reporting issues, providing new translations, and creating suggestions.


## Build and Run

If you want to understand how Jane works, you'll want to get the source, build it, and run locally.

### Getting the sources

```bash
git clone https://github.com/xianmin/hugo-theme-jane.git
```

### Prerequisites

You need install the `Hugo_extended` version to use [Hugo Pipes](https://gohugo.io/hugo-pipes/).

We recommend that you use VSCode. And if you edit `.html` files, recommend you install prettier and [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template) **globally** . And open `Prettier: Resolve Global Modules` in your VSCode Settings.

```bash
npm install -g prettier prettier-plugin-go-template
```


### Watch example Site

```bash
hugo server --contentDir='./exampleSite/content' --config='dev-config.toml'
```


## Directory Structure

- `layouts/` Stores templates in the form of .html files that specify how views of your content will be rendered into a static website.
- `assets/` stores all the scss & js **source files**, `Hugo Pipes` will bundle them to `resources/` folder.
