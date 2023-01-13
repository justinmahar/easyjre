<h2 align="center">
  ☕ EasyJRE
</h2>
<h3 align="center">
  Easily create an OpenJDK JRE using jlink!
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/easyjre" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/easyjre.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/easyjre/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/easyjre/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/easyjre/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Get Started

### **[Open EasyJRE](https://justinmahar.github.io/easyjre/?path=/story/tools--easy-jre-story)**

## Documentation

Read the **[official documentation](https://justinmahar.github.io/easyjre/)**.

## Overview

This tool allows you to easily create a custom OpenJDK JRE using `jlink`.

### Features include:

- **☕ Create a JRE quickly and easily**
  - Take the complexity out of using `jlink` to create a JRE.
- **🔢 Supports multiple use cases**
  - Whether you want a standard Java SE JRE or something highly custom, EasyJRE has you covered.
- **✅ Easy module selection**
  - Quickly select the modules you'd like to include, or enter them manually.
- **💻 `jlink` command generation**
  - This tool will turn all of your selections into the exact `jlink` command to run to get the job done!

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Get Started](#get-started)
  - [**Open EasyJRE**](#open-easyjre)
- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Via Website](#via-website)
  - [Via `npm`](#via-npm)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i easyjre
```

## Usage

### Via Website

Go here: **[EasyJRE](https://justinmahar.github.io/easyjre/?path=/story/tools--easy-jre-story)**

### Via `npm`

If you want to use the tool in your own project, you can install this package via npm and use the exported `EasyJRE` component.

```jsx
import { EasyJRE } from 'easyjre';
```

```jsx
<EasyJRE />
```

You can use CSS to hide the header and footer by selecting and styling the `.easyjre-header` and `.easyjre-footer` classes with `display: none`, like so:

```css
.easyjre-header, .easyjre-footer {
  display: none !important;
}
```

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/easyjre/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/easyjre/stargazers): [👉⭐](https://github.com/justinmahar/easyjre/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/easyjre/?path=/story/license--page).