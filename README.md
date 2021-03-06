# jQuery Inline SVG

[![NPM Package](https://img.shields.io/npm/v/jquery-inline-svg.svg?style=flat-square)](https://www.npmjs.org/package/jquery-inline-svg)
[![Minified Size](https://img.shields.io/bundlephobia/min/jquery-inline-svg.svg?style=flat-square)](https://bundlephobia.com/result?p=jquery-inline-svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/jquery-inline-svg/blob/master/LICENSE)

Takes an `<img>` with an SVG as its source and replace it with an inline `<svg>` so you can manipulate the style of it with CSS/JS etc.

[ci-img]:  https://travis-ci.org/shrpne/jquery-inline-svg.svg
[ci]:      https://travis-ci.org/shrpne/jquery-inline-svg

Other frameworks alternatives:

- Vue: [vue-inline-svg](https://github.com/shrpne/vue-inline-svg)
- Vanilla: [inline-svg](https://github.com/jonnyhaynes/inline-svg)

## Install

### npm
```
npm install jquery-inline-svg
```

### cdn

Download the [dist/jquery-inline-svg.min.js](https://unpkg.com/jquery-inline-svg@latest/dist/jquery-inline-svg.min.js) and add it to your project.



## Usage

```html
<!-- Add some SVG `<img>` tags. -->
<img src="image-one.svg" data-inline-svg>
<img src="image-two.svg" data-inline-svg>

<!-- Include the `jquery-inline-svg` script on your page after `jQuery`. -->
<script src="jquery.min.js"></script>
<script src="jquery-inline-svg.min.js"></script>

<!-- Inline images. -->
<script>
  $('[data-inline-svg]').inlineSvg();
</script>

<!-- The `<img>` tags have now been replaced with the full SVG markup. -->
```

Or with ES2015 modules

```js
import $ from 'jquery';
import 'jquery-inline-svg';

$('[data-inline-svg]').inlineSvg();
```


### Events
`svgInlined` event will be fired on every `<img>` with inlined SVG element as argument
```js
$('[data-inline-svg]').on('svgInlined', function (e, svgElement) {
    const $originalImage = $(this); // <-- original <img> will be removed from the DOM when this event handler function finished
    const $inlinedSvgElement = $(svgElement).addClass('is-loaded');
})
```


## Requirements
This plugin requires jQuery 3

## Reference
Inspired by inlineSvg from UIkit 2 https://github.com/uikit/uikit/blob/v2/master/src/js/core/utility.js#L267





