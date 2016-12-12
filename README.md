# verify-trello-webhook [![NPM version](http://img.shields.io/npm/v/verify-trello-webhook.svg?style=flat-square)](https://www.npmjs.org/package/verify-trello-webhook)

Safely verify that a received webhook originated from Trello.

Uses [crypto.timingSafeEqual()](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b), so Node.js v6.6.0 (or newer) is required.

## Installation

Install the package with NPM:

```bash
$ npm install verify-trello-webhook
```

## Usage

Example:

```js
import verifyTrelloWebhook from "verify-trello-webhook";

let signature = "LeCJzA5aHiwh4zcxLhY25TJSNg=";
let payload = JSON.stringify({ hello: "world" });
let secret = "secret";
let callbackUrl = "https://example.com/webhooks";

verifyTrelloWebhook(signature, payload, secret, callbackUrl); // Returns true if verification succeeds; otherwise, false.
```
