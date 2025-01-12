# RainX Libraries

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/rainx/rainx-libraries/ci.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![RightCapital frontend style guide](https://img.shields.io/badge/code_style-RightCapital-5c4c64?labelColor=f0ede8)](https://github.com/RightCapitalHQ/frontend-style-guide)

## Table of Contents

- [RainX Libraries](#rainx-libraries)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Libraries](#libraries)
    - [@rainxlab/brand-assets](#rainxlabbrand-assets)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Introduction

RainX Libraries is a monorepo containing a collection of TypeScript-based frontend libraries developed and maintained by RainX. These libraries are primarily used internally by RainX to streamline frontend development across various projects.

The monorepo structure allows for efficient code sharing, version management, and consistent development practices across all libraries.

## Libraries

### @rainxlab/brand-assets

[![npm version](https://img.shields.io/npm/v/@rainxlab/brand-assets)](https://www.npmjs.com/package/@rainxlab/brand-assets)

A comprehensive collection of RainX brand assets including logos, icons, and style variables. This package provides easy access to brand resources in both SVG and CSS formats.

## Installation

To install a specific library from the RainX monorepo:

```bash
npm install @rainxlab/brand-assets
# or
pnpm add @rainxlab/brand-assets
```

## Usage

Each library comes with its own documentation. Refer to the individual package's README for specific usage instructions.

For example, to use the brand assets:

```typescript
import { RainxLogoFullColorDarkGrayBlueSvg } from '@rainxlab/brand-assets';

// Use the logo in your component
export const RainxLogo = () => {
  return <img src={RainxLogoFullColorDarkGrayBlueSvg} alt="RainX Logo" />;
};

```

## Contributing

We welcome contributions to the RainX Libraries! Please follow these guidelines:

1. Fork the repository and create your branch from `main`
2. Follow our [commit convention](https://www.conventionalcommits.org/)
3. Ensure all tests pass and add new tests for your changes
4. Submit a pull request with a clear description of your changes
