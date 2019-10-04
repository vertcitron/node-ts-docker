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
* __yarn up__: builds and run the service in a development container
with auto-build and relaunches on changes.
* __yarn down__ : stops and remove the development container.

Once the __yarn dev__ or __yarn up__ commands executed, the application is accessible
on http://localhost:3000

&nbsp;  
_This software is licensed under the MIT license:_

> « Copyright © Stéphane Souron / Vert Citron  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the “Software”), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
The Software is provided “as is”, without warranty of any kind, express or implied, including but
not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.
In no event shall the authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the
software or the use or other dealings in the Software. »
