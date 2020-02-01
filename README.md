# React HD Image

[![NPM](https://img.shields.io/npm/v/badge-size.svg?style=flat)](https://npmjs.org/package/react-hd-image)
[![Build Status](https://travis-ci.org/wonism/react-hd-image.svg?branch=master)](https://travis-ci.org/wonism/react-hd-image)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-hd-image.svg)
![Test coverage for branches](https://github.com/wonism/react-hd-image/blob/master/coverage/badge-branches.svg)
![Test coverage for functions](https://github.com/wonism/react-hd-image/blob/master/coverage/badge-functions.svg)
![Test coverage for lines](https://github.com/wonism/react-hd-image/blob/master/coverage/badge-lines.svg)
![Test coverage for statements](https://github.com/wonism/react-hd-image/blob/master/coverage/badge-statements.svg)

React component for serving high resolution images depends on display.

## Installation

```sh
# npm
$ npm i react-hd-image -S
# yarn
$ yarn add react-hd-image -S
```

## Usage

__Properties__

| name      | type               |
|:----------|:-------------------|
| src       | string or string[] |
| skipCheck | boolean (optional) |

__Choose right resolution image depends on display type__

If you are on the HD display and there is a `./ironman@3x.jpg`, `3x` image will be rendered automatically.

```tsx
<HDImage
  src="./ironman.jpg"
  alt="Iron Man"
/>
```

__Pass an array of several resolution images__

If high resolution image's name is not predictable, It is possible to pass an set of image names.

```tsx
<HDImage
  src={[
    './winterscape.jpg',
    './winterscape-retina-version.jpg',
    './winterscape-hd-version.jpg',
  ]}
  alt="House"
/>
```

__Skip checking high resolution image existence__

It will always render normal image.

```tsx
<HDImage
  src="./ironman.jpg"
  alt="Iron Man"
  skipCheck
/>
```
