This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is a free template and you can use as your own portfolio website.

![asanka.one](screens/Artboard%201.png "preview")
[Preview ->](https://asanker.vercel.app)

### How to use this template?

#### Requirements:
- [Github](https://github.com) account
- [sanity](https://sanity.io) account.
- [vercel](https://vercel.com) account.

#### Steps:
1. Create sanity project
2. Fork this repository
3. Add repository environment variables
    - NEXT_PUBLIC_SANITY_PROJECT_ID (your sanity project Id)
    - SANITY_STUDIO_PROJECT_ID (your sanity project Id)
    - NEXT_PUBLIC_SANITY_DATASET (default is "production")
    - SANITY_STUDIO_DATASET (default is "production")
    - SANITY_AUTH_TOKEN (Generate it at sanity project > API > Tokens (choose "Deploy Studio" option))
* (make sure to add this all 5 variables even if they are duplicates.)
4. Go to [Vercel Platform](https://vercel.com/new?) and create new project using this repository and add these environment varialbles in the vercel project.
    - NEXT_PUBLIC_SANITY_PROJECT_ID (your sanity project Id)
    - NEXT_PUBLIC_SANITY_DATASET (default is "production")
5. Go to Your forked repository actions and run 'Deploy sanity studio' action.
6. Wait for building your sanity studio and you are done.
7. Your sanity dashboard available at your website's /studio path. ([yourprojectname].vercel.app/studio)


## Local Development

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
