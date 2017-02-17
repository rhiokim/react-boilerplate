This project was bootstrapped with latest [Create React App](https://github.com/facebookincubator/create-react-app) and customized a bit.

And this have some of branch that organazied with libraries that provied modern design concepts such as material, sementic ui and my favor design conpect as well. It's easy to start your new react-app project.

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
$ git clone git@github.com:rhiokim/react-boilerplate.git <yourAppName> --depth 1
// (--depth 1) https://git-scm.com/docs/git-clone#git-clone---depthltdepthgt
$ cd <yourAppName>
$ npm install // or yarn
```

Then, launch the boilerplate app.

```bash
$ npm start // or yarn start
```

Above it's just simple usage.

If you wanna follow upstream changes please follow step.
And it's my recommand way

1. Create repository for new react-app project
```bash
$ make /path/to/new-react-app
$ cd /path/to/new-react-app
$ git init
```
2. Setup remote configuration, for example github.com
```bash
$ git remote add origin git@github.com:ACCOUNT/REPO_NAME.git
$ git remote add boilerplate git@github.com:rhiokim/react-boilerplate.git
```
... Working in progress ...

You should see a new browser tap opening and a title of "React Boilerplate" in http://localhost:3000.

From there, you start to develop your own code in the `src` directory. When you finish coding, use `npm run build` to build the static files.

And you want to make the docker image with production files, use `npm run deploy`.

When committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## How to build

```bash
$ npm start // or yarn start
```

## Branch Structure
```
master
  \_ nw (it's contain master branch with nwjs env)
    \_ nw-ext (it's offline first app with pouchdb and some useful module)
  \_ material
  \_ ant-design
  \_ photon
    \_ photon-with-nwjs (photon + nw)
  \_ semantic-ui
  \_ blueprint (soon)
  \_ fabric (soon)
```

## Branch specified

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
