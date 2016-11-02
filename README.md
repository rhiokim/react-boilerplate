This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and customized a bit.

## Features

- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- Support git hook `pre-commit` used to lint and test your code
- Use [conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`
- Support git hook `commit-msg` used to lint your [commit message](https://github.com/kentcdodds/validate-commit-msg)
- Use [eslint-pretty-formatter](https://github.com/sindresorhus/eslint-formatter-pretty) to show results for lint
- If you installed Docker you are able to use some useful npm run-script to make the docker image
- Support material design. Please look into `material` branch [react-mdl](https://github.com/react-mdl/react-mdl)

## How to use

First, you should clone the repo and install the dependencies.

```bash
$ git clone git@github.com:rhiokim/react-boilerplate.git <yourAppName>
$ cd <yourAppName>
$ npm install
```

Then, launch the boilerplate app.

```bash
$ npm start
```

You should see a new browser tap opening and a title of "React Boilerplate" in http://localhost:3000.

From there, you start to develop your own code in the `src` directory. When you finish coding, use `npm run build` to build the static files.

And you want to make the docker image with production files, use `npm run deploy`.

When committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## How to build

```bash
$ npm run build
```

## Run test

```bash
$ npm test
```

## Run with nwjs

> Please install `nwjs` npm module globally on your system [nwjs version manager](https://www.npmjs.com/package/nwjs)

```bash
$ npm run build
$ nwjc build/static/js/main.[hash].js app.bin
$ nw build
```

## Dockerize

```bash
$ npm run docker:build  // build image
$ npm run docker:run    // run container
$ npm run docker:rm     // remove running container
$ npm run docker        // run build, rm, run at once
```

## Branch Structure
```
master
  \_ nw
  \_ material
  \_ ant-design
  \_ photon
    \_ photon-with-nwjs (photon + nw)
```
## Screenshot
* with photon
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/photon.png)
* with material
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/material.png)
* with ant-design
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/ant-design.png)
* with photon and nwjs
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/nwjs.png)

## License

MIT
