# svrx-plugin-parcel

[![svrx](https://img.shields.io/badge/svrx-plugin-%23ff69b4?style=flat-square)](https://svrx.io/)
[![npm](https://img.shields.io/npm/v/svrx-plugin-parcel.svg?style=flat-square)](https://www.npmjs.com/package/svrx-plugin-parcel)

[svrx](https://github.com/x-orpheus/svrx) plugin for [parcel](https://parceljs.org/)

## Usage

> Please make sure that you have installed [svrx](https://svrx.io/) already.


### Via CLI

```bash
svrx -p "parcel"
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: ['parcel'] }).start();
```

**with options**

```js

svrx({
    plugins: [{
        name: 'parcel',
        options: {
            entry: "main.html"
        }
    }]
}).start();
```

## Options

same option with parcel: [api doc](https://parceljs.org/api.html)

#### **entry \[String|Object]:** 

entry of parcel, allow string, array, glob. default is `index.html`

#### **target \[String]:** 

target of parcel, allow `browser | node | electron`, default is `browser`

#### **watch \[String]:** 

Enable parcel watch file change, default is `true`

#### **minify \[String]:** 

Enable parcel minify, default is `process.env.NODE_ENV === 'production'`

#### **outDir \[Object]:**

outDir of parcel, default is `./dist`

#### **outFile \[String]:**

outFile of parcel, default is `./dist/index.html`


## Example

- [simple](https://github.com/moonrailgun/svrx-plugin-parcel/tree/master/example/simple)

## License

MIT
