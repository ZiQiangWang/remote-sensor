# remote-sensor

[![NPM Version][npm-badge]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]
[![gzip](http://img.badgesize.io/https://unpkg.com/remote-sensor/dist/remote-sensor.min.js?compression=gzip)](https://unpkg.com/remote-sensor/dist/remote-sensor.min.js)

[npm-badge]: https://img.shields.io/npm/v/remote-sensor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/remote-sensor
[npm-downloads]: https://img.shields.io/npm/dm/remote-sensor.svg?style=flat-square

> A tiny (~0.3Kb) tool checking if remove resource valid without full download

## Install

> npm i remote-sensor

or

> yarn add remote-sensor

## Usage

```js
import Sensor from 'remote-sensor';
```

or

```js
const Sensor = require('remote-sensor');
```

or

```html
<script src="https://unpkg.com/remote-sensor@latest/dist/remote-sensor.min.js"></script>
<script>
  remoteSensor('https://baidu.png', valid => {
    console.log(valid);
  });
</script>
```

```js
Sensor('https://xxxxx.png', valid => {
  console.log(valid);
});
```

# License

MIT@[ZiQiangWang](https://github.com/ZiQiangWang).
