# bootstrap-ui-kit

A slightly better turn-key React-Bootstrap component library with Rollup, storybook, and SASS support.

#### Features:

- React 18+
- Typescript
- SASS/SCSS Support
- Storybook 8
- Latest 'n Greatest Bundlers/Managers - Vite & `pnpm`
- Linting/Prettier config
- Path mapping for cleaner imports
- Pokémon color palette

#### Local Dev

After cloning this repo, there are only 2 commands to run the Storybook demo:

```
pnpm install && pnpm start
```

#### Colors

To change the color overrides from Pokémon colors to your own, replace the variables in `src/scss/colors.scss`. The overrides are here:

```
// bs color overrides
$primary: $pkmn-blue;
$secondary: $pkmn-silver;
$success: $pkmn-gold;
$info: $pkmn-blue-alt;
$warning: $pkmn-yellow;
$danger: $pkmn-red;
$light: #f8f9fa;
$dark: #343a40;
```

Set these colors as you please. Feel free to remove the `$pkmn-*` variables also, they are not used anywhere else. To reference these colors in other scss files, use CSS variables.

```
var(--bs-primary)
var(--bs-secondary)
var(--bs-success)
var(--bs-info)
var(--bs-warning)
var(--bs-danger)
```
