# @oneisland/vue-cf-template

A template for client-server template for Vue.js and Cloudflare Workers

## Overview

Designed to create and manage client-server Vue.js applications which are served via the Cloudflare Workers platform

Includes custom filepaths for client and server files to make the management of the builds easier and more flexible

## Getting started

Install the required dependencies

```bash
npm install
```

Configure [wrangler.toml](https://developers.cloudflare.com/workers/cli-wrangler/configuration) using your Cloudflare credentials

Once configured you're ready to run any of the commands below


## Commands

Build the source code

```bash
npm run build
```

Serve the client side locally

```bash
npm run serve
```

Preview the service with Wrangler

```bash
npm run preview
```

Deploy for production to Cloudflare Workers

```bash
npm run deploy
```