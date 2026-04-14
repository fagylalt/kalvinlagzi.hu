# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding "save the date" website for kalvinlagzi.hu. A static site built with Vite + TypeScript — no framework, vanilla DOM manipulation. The site is in Hungarian (`lang="hu"`).

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check with `tsc` then build with Vite
- `npm run preview` — preview the production build locally
- No test runner or linter is configured.

## Architecture

The app uses a simple component pattern: each component in `src/components/` is a function that returns an `HTMLElement`. Components are composed in `src/main.ts`, which mounts into the `#app` div in `index.html`. Styles live in `src/style.css`. Static assets (images) go in `public/`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys to GitHub Pages. The build output directory is `dist/`.
