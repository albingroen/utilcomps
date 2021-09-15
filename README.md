# utility components

Utilitarian component library for Svelte

## Table of Contents

- [Title](#utility-components)
- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Tailwind configuration](#tailwind-configuration)
- [Components](#components)

## About

What is utilcomps? utilcomps is a utilitarian modular component library written
in Svelte, for Svelte. The idea is to provide a very functional set of common
components that focus on being as utilitarian, accessible, and functional as
possible, instead of being all too flashy. Inspiration for design comes from
classic software programs like Cinema 4D, Blender 3D, and the Adobe Suite.

## Usage

### Install

Install using Yarn or NPM

    yarn add utilcomps

### Tailwind configuration

    yarn add twind

Set up Tailwind ([twind](https://twind.dev) for example) in a top level file

```javascript
<script>
	import {tailwindConfig} from 'utilcomps' import {setup} from 'twind' setup(tailwindConfig)
</script>
```

Import in script tag and use in body

```javascript
<script>
  import { Button } from 'utilcomps'
</script>

<Button>Click me</Button>
```

## Components

- Box
- Button
- ButtonGroup
- Checkbox
- Content
- Divider
- Error
- Modal
- Panel
- PanelContent
- Select
- Spinner
- Stack
- Tab
- Table
- Tabs
- Text
- TextInput
