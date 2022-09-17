# Chakra Ui Kbar

## Getting Started

```bash
# with npm
npm install -S -E @chakra-kbar@core

# with yarn
yarn add -S -E @chakra-kbar@core

# with pnpm
pnpm add -S -E @chakra-kbar@core
```

```tsx
import { ChakraKBar } from '@chakra-ui-kbar/core'

function MyApp() {
  return (
    <ChakraProvider>
        <ChakraKBar>
            <p>example content</p>
        </ChakraKBar>
    </ChakraProvider>
  )
}
```

### Useful Commands

- `yarn build` - Build all packages including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

This project is using these amazing tools:

- 🏎 [Turborepo](https://turborepo.org) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

## License

[LICENSE - ©2022 Yony Calsin.](LICENSE)
