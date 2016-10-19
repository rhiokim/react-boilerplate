This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and customized a bit.

## Features

- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- Support git hook `pre-commit` used to lint and test your code
- Use [conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`
- Support git hook `commit-msg` used to lint your [commit message](https://github.com/kentcdodds/validate-commit-msg)

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

You should see a new browser tap opening and a title of "React Boilerplat" in http://localhost:3000.

From there, you start to develop your own code in the `src` directory. When you finish coding, use `npm run build` to build the static files.

When committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.


## How to build

```bash
$ npm run build
```

## Run test

```bash
$ npm test
$ npm test:watch
$ npm test:jenkins
$ npm test:karma
```

## Dockerize

```bash
$ npm run docker-build
$ npm run docker-run
```

## License

MIT
