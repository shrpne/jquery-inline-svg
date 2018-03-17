# jQuery Inline SVG [![Build Status][ci-img]][ci]

Takes an <img> with an SVG as its source and replace it with an inline <svg> so you can manipulate the style of it with CSS/JS etc.

[ci-img]:  https://travis-ci.org/shrpne/jquery-inline-svg.svg
[ci]:      https://travis-ci.org/shrpne/jquery-inline-svg

## Install

### npm
```
npm install jquery-inline-svg
```

### Manually

Download the [dist/jquery-inline-svg.min.js](https://github.com/shrpne/jquery-inline-svg/blob/master/dist/svg-injector.min.js) file from this repository and add it to your project.



## Usage

Include the `jquery-inline-svg` script on your page after `jQuery`.

```html
<script src="jquery.min.js"></script>
<script src="jquery-inline-svg.min.js"></script>
```

Add some SVG `<img>` tags.

```html
<img src="image-one.svg" data-inline-svg>
<img src="image-two.svg" data-inline-svg>
```

Inline them.

```html
<script>
  $('[data-inline-svg]').inlineSvg();
</script>
```

The `<img>` tags have now been replaced with the full SVG markup.

### Events
`svgInlined` event will be fired on every `<img>` with inlined SVG element as argument
```js
$('[data-inline-svg]').on('svgInlined', function (e, svgElement) {
    $(svgElement).addClass('is-loaded');
})
```


## Requirements
This plugin requires jQuery 3

## Reference
inlineSvg from UIkit 2 https://github.com/uikit/uikit/blob/v2/master/src/js/core/utility.js#L267





