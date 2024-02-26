# Styles

> *"A minimalist style sheet baseline to build upon"*

The idea is not to be a framework but as a starting point with predefined and opinionated styleguide.

This only includes the minimum styles and useful utilities required to build a performant website.

- Modern base styles
- Responsive layout system
- Fluid spacing; vertical rhythm
- Write consistent and readable code

## Contents

```
├── base/
│  ├── _buttons.scss
│  ├── _elements.scss
│  ├── _fields.scss
│  ├── _form.scss
│  └── _typography.scss
├── partials/
│  ├── _global.scss
│  ├── _print.scss
│  ├── _ready.scss
│  └── _wordpress.scss
├── utilities/
│  ├── _breakpoints.scss
│  ├── _embeds.scss
│  ├── _flexbox.scss
│  ├── _functions.scss
│  ├── _mixins.scss
│  ├── _mui-colors.scss
│  └── index.scss
├── _variables.scss
└── index.scss
```

## Usage

```scss
@import 'genetiks';
```

### Stylelint

```
{
  "extends": "genetiks/config"
}
```
