# genetiks --
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
│  └── _typography.scss
├── config/
│  ├── index.js
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
│  └── _mui-colors.scss
├── _utilities.scss
├── _variables.scss
└── style.scss
```

## Utilities
> *"A just right amount of clean but powerful toolkit"*

https://www.npmjs.com/package/genetiks

### Install
`npm install genetiks`

### Usage
`@import './node_modules/genetiks/utilities'`

#### Stylelint
```
{
  "extends": "genetiks/config"
}
```

## License
Copyright &copy; 2017-2020 [Gene Alyson Fortunado Torcende](https://github.com/kermage)

Licensed under [MIT](LICENSE).
