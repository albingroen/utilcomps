# utility components

Utilitarian component library for Svelte

## Usage

### Install

Install using Yarn or NPM

    yarn add utilcomps

### Tailwind configuration

    yarn add twind

Set up Tailwind ([twind](https://twind.dev) for example) in a top level file

    <script>
    import { tailwindConfig } from 'utilcomps'
    import { setup } from 'twind'

    twind.setup(tailwindConfig)

    ...
    </script>

Import in script tag and use in body

    <script>
    import { Button } from 'utilcomps'
    </script>

    <Button>Click me</Button>

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
