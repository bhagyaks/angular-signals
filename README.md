# AngularSignals
A simple Angular application demonstrating the fundamentals of Angular Signals — the reactive primitive built into modern Angular for fine-grained reactivity and state management.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## About

Angular Signals provide a more efficient reactivity system by letting Angular precisely track where state is used in the UI and only update the affected parts when that state changes. This model is lightweight and highly performant compared to broad change-detection cycles.

This repository contains a sample Angular application where you can explore and implement:

Basic Angular Signals (signal)

Derived state with computed

Reactive updates with effect

Integrating Signals with components and services

(Add actual feature descriptions once you’ve added signal-specific code to the app.)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
