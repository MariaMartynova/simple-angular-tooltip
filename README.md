# SimpleAngularTooltip

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

This tooltip will open on click of the component that is wrapped inside the <tooltip> tag. Only one tooltip on the page can be openened at a time (see the simple click outside directive I've written to support it). Clicking TAB key should close all tooltip
  
## How to Use

The full project is just a demo of how it works - a minimalist page. In order to use it, just get the tooltip folder and click-outside.directive.ts. Wrapping any element that should show tooltip on click in <tooltip> tag will provide all the functionality described in the introlduction

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
