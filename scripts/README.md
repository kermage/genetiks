# Scripts

> *"A set of convenient functions to work with"*

## Contents

| Name       | Parameter/s     | Description                          |
|------------|-----------------|--------------------------------------|
| `one`      | CSS selector    | exactly a single element or null     |
| `many`     | CSS selector    | a converted array instance or null   |
| `create`   | HTML string     | DOM fragment; nodes array or null    |
| `extend`   | CSS selector    | add ala-jQuery methods to element    |
| `delegate` | Event, Selector | handler dealing with dynamic content |
| `sleep`    | Number millis  | promise that resolves after ms       |
| `tick`     |                 | promise that resolves on next frame  |

## Usage

```js
import { one, many, create, extend, delegate } from 'genetiks';
```
