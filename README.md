![](https://github.com/kube/header/workflows/Build/badge.svg)

# header

Monorepo containing tools for kube Header formatting in source files.

Composed of:

- `header`:
  NPM Package Library containing a library and a CLI.
- `vscode-kube-header`:
  VSCode extension dependent on the library

## Bootstrap

```sh
yarn lerna bootstrap
```

## Development

```sh
yarn dev
```

### VSCode Extension

To debug the VSCode extension, simply start `Launch VSCode Extension` from **Run** Panel.

## Build

```sh
yarn build
```

Publishing to NPM and VSCode Marketplace is handled automatically by Github Actions when version is upgraded.
