# HTML Front End Boilerplate

Yet another boilerplate project for front end applications.

## Technology Stacks

Main tools used during development:

* [Gulp](https://gulpjs.com/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Sass](https://sass-lang.com/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [stylelint](https://stylelint.io/)
* [Babel](https://babeljs.io/)
* [Flow](https://flow.org/en/)
* [ESLint](https://eslint.org/)

Libraries used in the output:

* [Bootstrap 4](https://getbootstrap.com/) and [Bootstrap.Native](http://thednp.github.io/bootstrap.native/)
* [Polyfill.io](https://polyfill.io/v3/)
* [HTML5 Shiv](https://github.com/aFarkas/html5shiv/)

## Usage

### Start a New Project

Clone this repo and install all tools:

```
$ git clone https://github.com/cwchentw/html-frontend-boilerplate.git
$ mv html-frontend-boilerplate myapp
$ cd myapp
$ npm install
```

After editing *myapp*, update the remote URL to save it to a new remote repo:

```
$ git remote set-url origin path/to/remote/repo
```

### Build a Project

Invoke this command to build a project:

```
$ npm run dev
```

The output will be in *public* directory. During development phase, all assets will keep pretty format.

### Live Code a Project

Invoke this command:

```
$ npm run watch
```

Visit the output at http://localhost:3000/ . While ediing the project. the output will be updated automatically.

### Publish a Project

Invoke this command to build a project for production environment:

```
$ npm run prod
```

The output will be in *public* directory. During production phase, all assets will be minified to save bandwidth.

Upload the content in *public* directory to a remote web server to publish this project.

## See Also

This boilerplate project is largely inspired by [tonik/html-frontend-boilerplate](https://github.com/tonik/html-frontend-boilerplate).

Why re-inventing the wheel? That project didn't migrate to Gulp 4 yet as this repo was built. In addition, the project used [Rollup](https://rollupjs.org/guide/en/) as its bundler, which doesn't support multiple JavaScript files when combined with Gulp. Hence, I updated to Gulp 4, dropping Rollup to support multiple scripts in this repo.

## Copyright

Copyright 2019 Michael Chen under [MIT license](http://opensource.org/licenses/MIT).
