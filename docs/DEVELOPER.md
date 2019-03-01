# Running, Building And Testing Kirby Locally

This document describes how to set up your development environment to run, build and test Kirby.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)
* [Running Tests Locally](#running-tests-locally)

See the [contribution guidelines](https://github.com/kirbydesign/designsystem/blob/master/CONTRIBUTING.md)
if you'd like to contribute to Kirby.

## Prerequisite Software

Before you can build and test Kirby, you must install and configure the
following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) which is used to run a development web server,
  run tests, and generate distributable files.

* Xcode (9 or later) + Command Line Tools + Xcodeproj

* CocoaPods

* Python Six

* Java JDK 8 + Android SDK

## Getting the Sources

Fork and clone the Kirby repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [Kirby
   repository](https://github.com/kirbydesign/designsystem).
3. Clone your fork of the Kirby repository and define an `upstream` remote pointing back to
   the Kirby repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/designsystem.git

# Go to the Kirby directory:
cd designsystem

# Add the main Kirby repository as an upstream remote to your repository:
git remote add upstream https://github.com/kirbydesign/designsystem
```
## Installing NPM Modules

Next, install the JavaScript modules needed to build and test Kirby:

```shell
# Install Kirby project dependencies (package.json)
npm install
```

## Running Kirby Locally
##### Web
```shell
npm start
```
##### iOS
```shell
npm run ios
```
##### Android
```shell
npm run android
```

## Building

To build Kirby run:

##### Web
```shell
npm run dist
```
##### iOS
```shell
...
```
##### Android
```shell
...
```

* Results are put in the `dist/*` folder.

## Running Tests Locally

```shell
npm test
```

## <a name="clang-format"></a> Formatting your source code

Kirby uses [Prettier](https://prettier.io/) to format the source code.
If the source code is not properly formatted, the CI will fail and the PR can not be merged.

## Linting/verifying your source code

You can check that your code is properly formatted and adheres to coding style by running:

``` shell
$ npm run lint
```
