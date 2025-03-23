# One Kit

Opinionated toolkit for vanilla JS/TS web development

## General Goals

1. Provide a thin layer of utils/helpers to enhance DX
2. Avoid third party dependencies when possible
3. Bun as first class supported runtime/platform with NodeJS officially supported as a deployment target where Bun is not available
4. Take advantage of the platform (including the browser) to the maximum extent
5. Server-first as the overall unbreakable principle

## Non Goals

1. General purpose toolkit for any conceivable use case
2. Community driven development
3. Support for any non-current LTS version provided by the underlying platform (server runtime/web browser)
4. Publish an NPM (or similar) package

## General Roadmap / Desired Features

- [ ] Simplistic JSX implementation
- [ ] Server Side Rendering
- [ ] Server-first functional components (Zero JS) capable of upgrading to client-side components (up to SPA-like interactivity) transparently via service workers, server sent events and client-side custom "hydration" techniques
- [ ] Static Site Generation supporting a mixed mode coexisting with traditional dynamic site generation
