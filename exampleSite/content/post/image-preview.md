---
title: "Image Preview"
date: 2018-03-03T16:01:23+08:00
lastmod: 2018-03-04T16:01:23+08:00
draft: false
tags: ["preview", "image", "shortcodes", "tag-7"]
categories: ["docs", "shortcodes", "index"]

menu:
  main:
    parent: "docs"
    weight: 3
---

## Normal Image

This is an image in `static/image` folder.

```markdown
![This is an image in `static/image` folder.](/image/example.jpg)
```

![This is an image in `static/image` folder.](/hugo-theme-jane/image/example.jpg)


## figure image with title

```
{{</* figure src="/image/example.jpg" title="figure image with title" */>}}
```


{{< figure src="/hugo-theme-jane/image/example.jpg" title="figure image with title">}}


## figure image with caption

```
{{</* figure src="/image/example.jpg" caption="figure image with caption figure image with caption figure image with caption figure image with caption figure image with caption" */>}}
```

{{< figure src="/hugo-theme-jane/image/example.jpg" caption="figure image with caption figure image with caption figure image with caption figure image with caption figure image with caption" >}}
