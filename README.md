# NovaShop Frontend

NovaShop is a production-minded e-commerce frontend built with Next.js, React,
TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
pnpm lint
pnpm build
```

## Project Structure

```txt
src/app                Next.js routes and layouts
src/components         Shared UI components
src/constants          Shared application constants
src/features           Feature-specific code
```

The `app` folder is kept inside `src` so application code is separated from
root configuration files like `package.json`, `tsconfig.json`, and
`next.config.ts`.
