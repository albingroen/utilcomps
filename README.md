# utility components

<p>
<a href="https://www.npmjs.com/package/utilcomps"><img alt="1" src="https://img.shields.io/npm/v/utilcomps"></a>
<a href="https://github.com/albingroen/utilcomps/blob/3e612b94f67c264c31bd48fe66f350e1ad1d8c82/package.json#L5"><img alt="2" src="https://img.shields.io/npm/l/utilcomps"></a>
<a href="https://github.com/albingroen/utilcomps/commits/main"><img alt="3" src="https://img.shields.io/github/commit-activity/m/albingroen/utilcomps"></a>
</p>

> Utilitarian component library written in Svelte, for Svelte

## Table of Contents

- [Title](#utility-components)
- [About](#about)
- [Installation](#installation)
- [Tailwind configuration](#tailwind-configuration)
- [Usage](#usage)
- [Components](#components)

## About

Utilcomps is a utilitarian component library written in Svelte, for Svelte. The
idea is to provide a functional set of common components that focus on being
utilitarian, accessible, and functional, instead of being all too flashy.
Inspired by classic software like [Cinema
4D](https://www.maxon.net/en/cinema-4d), [Blender](https://www.blender.org),
and the [Adobe Suite](https://www.adobe.com).

## Installation

Installaing utilcomps is very easy. Simple install it with your favorite
JavaScript package manager.

    yarn add utilcomps # or npm install utilcomps

## Tailwind configuration

TailwindCSS is the styling foundation for utilcomps. In order to get all
correct styles, we provide a Tailwind configuration object, that you can use to
configure your local version of TailwindCSS.

    yarn add twind

Set up Tailwind ([twind](https://twind.dev) for example) in a top level file

```
<script>
	import {tailwindConfig} from 'utilcomps'
  import {setup} from 'twind'
  setup(tailwindConfig)
</script>
```

## Usage

Using utilcomps components is also very easy. Simple import a component of your
choce from the utilcomps library inside of a script tag, and use it like any
other Svelte component.

```
<script>
  import { Button } from 'utilcomps'
</script>

<Button>Click me</Button>
```

## Components

To see a full demo of all components in utilcomps, visit the webiste below.

[https://utilcomps.herokuapp.com](https://utilcomps.herokuapp.com)
