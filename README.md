# Bootstrap 4 Boilerplate

Front end boilerplate project for Bootstrap 4.

## Technology Stacks

Main tools used during development:

* [Gulp](https://gulpjs.com/): build automation for the project
* [Nunjucks](https://mozilla.github.io/nunjucks/) (with Markdown support): HTML template language
* [Sass](https://sass-lang.com/): write CSS in Sass
* [Autoprefixer](https://github.com/postcss/autoprefixer): add prefix for your CSS sheet
* [stylelint](https://stylelint.io/): check the quality of your CSS sheet
* [Babel](https://babeljs.io/): JavaScript transpiler
* [Flow](https://flow.org/en/): add type checking for JavaScript
* [ESLint](https://eslint.org/): check the quality of your JavaScript code
* [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat): check browser compatibility

Libraries used in the output:

* [Bootstrap 4](https://getbootstrap.com/) and [Bootstrap.Native](http://thednp.github.io/bootstrap.native/)
* [HTML5 Shiv](https://github.com/aFarkas/html5shiv/)

## Usage

### Start a New Project

Clone this repo:

```
$ git clone https://github.com/cwchentw/bootstrap-4-boilerplate.git myapp
```

Change your working directory to the root of the cloned repo:

```
$ cd myapp
```

Install required packages:

```
$ npm install
```

After editing *myapp*, update the remote URL to save the local repo to a new remote one:

```
$ git remote set-url origin https://example.com/user/myapp.git
$ git push -u origin master
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

## Use Markdown in the Project

Nunjucks doesn't support Markdown by default. Its support in Nunjucks is implemented in a [plugin](https://github.com/zephraph/nunjucks-markdown).

To write a Markdown document, wrap such code in a specific region:

```
{% markdown %}
Hello World
===========
# Do stuff
{% endmarkdown %}
```

You may include a Markdown file as a template:

```
{% markdown "post.md" %}
```

Alternatively, include some Markdown code as a partial:

```
{% markdown %}
{% include 'post1.md' %}
{% include 'post2.md' %}
{% endmarkdown %}
```

## Note for Web Developers

You should **NOT** use the builtin error pages provided by your web server. Such pages usually reveal too much system information. Instead, you should set redirecting rules and custom error pages for erroreous HTTP status codes.

In this boilerplate project, we provide a custom HTTP 404 error page. Nevertheless, the page works only on our development environment. You still need to set your own redirecting rules and custom error pages on your production environment.

## See Also

This boilerplate project is largely inspired by [tonik/html-frontend-boilerplate](https://github.com/tonik/html-frontend-boilerplate).

Why re-inventing the wheel? That project didn't migrate to Gulp 4 yet as this repo was built. In addition, the project used [Rollup](https://rollupjs.org/guide/en/) as its bundler, which doesn't support multiple JavaScript files when combined with Gulp. Hence, I updated to Gulp 4, dropping Rollup to support multiple scripts in this repo.

## Copyright

Copyright (c) 2019-2021, Michael Chen. Licensed under [MIT license](http://opensource.org/licenses/MIT).