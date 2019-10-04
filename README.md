# node-ts-docker

This repository is a boilerplate to start from when developing a
containerized node.js&nbsp;/&nbsp;express application.

> __Disclaimer__ : _This is a work in progress and is not finished yet, nor fully tested.
Don't use it in production right now._

It's setup with :

* Typescript (^3.6.3)
* Eslint (extending @typescript-eslint/recommended)
* Unit testing with Jest & SuperTest
* All types for Node, Express, Jest and SuperTest

## requirements :

* node 8 or higher
* yarn 1.16 or higher
* docker 18 or higher
* docker-compose 1.21 or higher

## Commands :

* __yarn build__ : locally builds the application in _dist/_ directory.
* __yarn test__ : locally builds the application and launch Jest tests.
* __yarn dev__ : locally launches ts-node-dev to build and relaunch application on each change.
* __yarn up:dev__: builds and run the service in a developement container
with auto-build and relaunching on changes.
* __yarn down:dev__ : stops and remove the development container.

Once the __yarn dev__ or __yarn up:dev__ commands launched, the application is accessible
on http://localhost:3000
