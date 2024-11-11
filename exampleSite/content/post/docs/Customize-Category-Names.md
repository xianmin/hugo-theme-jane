---
title: "Customize Category Names"
description: "How to customize category display names and support multiple languages"
tags: [
    "hugo",
    "category",
    "i18n",
    "customization"
]
date: "2024-01-20"
categories: [
    "docs",
]
---

## Customizing Category Names

The theme allows you to customize category display names and supports both single language and multilingual configurations.

### Setup Steps

1. Create a `data/categories.yaml` file in your site root directory
2. Choose either single language or multilingual format
3. Configure your categories with display names and weights

### Single Language Configuration

For single language sites, use this simple format:

```yaml:data/categories.yaml
# Single language format
index:
  name: "Computer Technology"  # Display name for the category
  weight: 10                  # Lower weight appears first in navigation

docs:
  name: "Programming"         # Custom display name
  weight: 2                  # Sorting weight
```

### Multilingual Configuration

For multilingual sites, use this format:

```yaml:data/categories.yaml
# Multilingual format
index:
  name:
    zh: "计算机技术"              # Chinese display name
    en: "Computer Technology"    # English display name
    fr: "Technologie"           # French display name
    default: "Technology"        # Fallback when language not found
  weight: 10                    # Sorting weight (lower appears first)

docs:
  name:
    zh: "文档"                   # Chinese name
    en: "Documentation"         # English name
    fr: "Documentation"         # French name
    default: "Documentation"    # Default fallback name
  weight: 2                     # Sorting weight
```

### Configuration Options

Each category in `categories.yaml` supports these options:

- `name`: String or map of language codes to display names
- `weight`: Integer for sorting (lower numbers appear first)

### Notes

1. Category keys in `categories.yaml` must match the category names used in your content files
2. Weights are optional, defaulting to 100 if not specified
3. Categories are sorted by weight first, then by post count
4. For multilingual sites, always provide a `default` name as fallback
5. Category names are case-insensitive in the configuration

### Example Usage in Content

When creating posts, use the lowercase category name in your front matter:

```yaml
---
title: "My Post"
categories: [
    "docs",    # Will display as "Documentation" based on categories.yaml
    "index"    # Will display as "Computer Technology"
]
---
```

### Advanced Features

1. **Flexible Language Support**: Add as many languages as needed in multilingual format
2. **Fallback System**: Uses default name if specific language is not found
3. **Weight-based Sorting**: Control category order in navigation

For more details, check the [theme documentation](https://github.com/your-theme/docs).
