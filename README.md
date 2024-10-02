This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Initialize Project

```bash
npx create-next-app@latest

Need to install the following packages:
create-next-app@14.2.14
Ok to proceed? (y) y

√ What is your project named? ... next-auth
√ Would you like to use TypeScript? Yes
√ Would you like to use ESLint? Yes
√ Would you like to use Tailwind CSS? Yes
√ Would you like to use `src/` directory? No
√ Would you like to use App Router? Yes
√ Would you like to customize the default import alias (@/*)? No

npm install firebase
```

## Developing

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## project structure

```
📁 my-awesome-nextjs-project
|
|_ 📁 app
|_ 📄 .env
|_ 📄 .eslintrc.json
|_ 📄 .gitignore
|_ 📄 next.config.mjs
|_ 📄 package.json
|_ 📄 postcss.config.mjs
|_ 📄 README.md
|_ 📄 tailwind.config.ts
|_ 📄 tsconfig.json
```