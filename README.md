# Tasit

<div align="left">
  <img src="/images/TasitLogoGrayscale.png" width="200" />
</div>

## What is Tasit?

Tasit is a suite of native mobile apps for mainstream users that lets them use popular Ethereum dapps in the same manner as their other favorite apps (e.g. Instagram, Facebook, Gmail, etc.).

Unlike with Status, Coinbase Wallet, Cipher, or other dapp browsers where you use lots of dapps from within one app, you can use each of the Tasit dapps via its own standalone native mobile app.

The Tasit apps are built with [the Tasit SDK](https://github.com/tasitlabs/TasitSDK), a JavaScript SDK that empowers developers to create even more native Ethereum dapps.

_Disclaimer:_ The alpha versions of these apps are under active development. We encourage you to try them out today for hackathons, etc., but they're not ready for anything involving real funds on mainnet. If you'd prefer to wait for a more battle-tested release, please watch this repo with the `Releases only` setting and/or sign up to be notified about our releases on the [tasit.io](https://tasit.io) website.

## Why are native dapps important?

A major obstacle preventing the mainstream adoption of dapps is the clunky and confusing UX of today's dapps - typically happening within a mobile dapp browser (more on that [here](https://github.com/tasitlabs/TasitSDK#why-from-the-users-perspective)).

The focus for the Tasit products is on providing simple, third-party clients for popular dapps. The Tasit apps will provide delightful UX and simpler onboarding for the dapp and in some cases extra features too.

From a developer's perspective, a lack of tooling means a great deal of grunt setup work is required with every project, slowing down product development and taking valuable time and focus way from business logic (more on that [here](https://github.com/tasitlabs/TasitSDK#why-from-a-developers--ethereum-enthusiasts-perspective)).

Through the two-pronged approach with the Tasit native apps and the Tasit SDK, we hope to achieve the aim of mainstream Ethereum dapp adoption by making the experience significantly smoother and more enjoyable for both users and builders.

## Tasit Apps

### Tasit Demo

Our first demo app is called `Tasit Demo`.

It's an app that shows off how easy it is to build a standalone native mobile app for Ethereum NFTs using the [Tasit SDK](https://github.com/tasitlabs/TasitSDK).

The app is built using React Native, Expo, [React Navigation](https://reactnavigation.org/), Prettier, Babel, and the Tasit SDK.

### Review the code

[Here's the code](./demo) for the demo app. For now this is where we're building the Tasit Decentraland app. Soon we'll move the Decentraland-specific parts over [here](./decentraland) and just keep a more minimalist demo app in the `demo` folder.

##### Features

> - Ephemeral account and private key generation
> - Uses a simple ERC721 abstraction from the Tasit SDK for reading and writing data and reacting to events
> - A working demo of onboarding with a few things still hardcoded for users who already have funds stored
> - A working demo of onboarding for users new to Ethereum
> - Minimal proof-of-concept app ready to ship to TestFlight for iOS using a testnet

### Tasit Decentraland

Our first production app is called `Tasit Decentraland`.

Decentraland is a dapp using [unique tokens / NFTs](http://erc721.org/). `Tasit Decentraland` lets you use that dapp on mobile.

This is the first production Tasit NFT app - we plan to release one or two other similar 3rd-party apps for other popular NFT projects.

Here's an [interactive wireframe video](https://youtu.be/iJQtDPQrRsE) showing how this app will look for an example ERC721 NFT like [Decentraland](https://decentraland.org/).

### Review the code

For now this is where we're building the Tasit Decentraland app over in the [demo dir](./demo). Soon we'll move the Decentraland-specific parts over [here](./decentraland) and just keep a more minimalist demo app in the `demo` folder.

This app also shows off the major functionality of the [Tasit SDK](https://github.com/tasitlabs/TasitSDK).

## Other Tasit apps coming soon

### Tasit Aragon

Exact org project T.B.D.
([DAOs](https://blog.aragon.org/bringing-daos-back-aragon-monthly-92756cb65639/))

### The road ahead

In the long run, Tasit will stitch together components from multiple dapps into novel experiences, like delegating your vote for a particular TCR to a preexisting Aragon organization, or decorating your Dharma loans with the same hats you use for your CryptoKitties because...reasons? We'll likely build apps in the future for lists (TCRs) and marketplaces.

## Developers

This is a monorepo for all of the open-source Tasit 3rd-party mobile apps for Ethereum dapps

These apps all use the [Tasit SDK](https://github.com/tasitlabs/TasitSDK).

For more info, please visit our website:

[tasit.io](https://tasit.io/)

### Getting started

```
git clone https://github.com/tasitlabs/tasit.git
cd tasit
cd demo
npm install
npm start
```

### Automatic scaffolding using the Tasit CLI

Are you starting a project from scratch? Let the Tasit CLI scaffold out your project for you.

Just run:

```
npm install tasit-cli
npx tasit-cli init my-app
cd my-app
npm start
```

...to automatically generate the scaffolding for a mobile dapp project.

Alternatively, for popular ERC standards like ERC-721 for NFTs, you can even run:

```
npx tasit-cli init my-app --nft
```

...to instantly create a standalone mobile dapp for CryptoKitties, Decentraland, etc.

This app scaffold comes ready to submit for beta testing on iOS with Testflight and on Android with Google Play Beta track, so you can focus on the core features of your dapp like you would do on the web.

### Contact us

We love getting feedback, so please feel free to reach out.

- [tasit.io](https://tasit.io/)

- [@TasitLabs](https://twitter.com/tasitlabs) on Twitter

- [Telegram](https://t.me/tasitlabs)

- [Email](mailto:founders@tasit.io)

- [Project Kanban board](https://github.com/orgs/tasitlabs/projects/1)

- [Feature requests](https://tasit.canny.io/feature-requests)

- [Medium](https://medium.com/tasit)
