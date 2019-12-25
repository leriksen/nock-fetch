[![Build Status](https://dev.azure.com/azureeriksen/node-fetch/_apis/build/status/leriksen.nock-fetch?branchName=master)](https://dev.azure.com/azureeriksen/node-fetch/_build/latest?definitionId=5&branchName=master)

Combines the power of

* HTTP mocking with nock
* replaying recorded API interactions with nock-record (which wraps nock.back)
* using node-fetch so front-end and back-end dev's can use same library

<!-- toc -->

* [How does it work?](#how-does-it-work)
* [Usage](#usage)
  * [READ THIS! - About interceptors](#read-this---about-interceptors)
* [Logging](#logging)
* [Restoring](#restoring)
* [Activating](#activating)
* [Nock Back](#nock-back)
  * [Setup](#setup)
    * [Options](#options)
    * [Modes](#modes)
* [License](#license)

<!-- tocstop -->

## How does it work?

This repo demonstrates simplifying and speeding up testing using the above techniques, whilst replacing the standard node http library usage with node-fetch.

Developers who need to interact with external API's write their own code using node-fetch, and then test their own code using tests written with the support of nock/nock-record