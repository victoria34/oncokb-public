# OncoKB Public Website

OncoKB is a precision oncology knowledge base and contains information about the effects and treatment implications of specific cancer gene alterations.
Please cite [Chakravarty et al., JCO PO 2017.](https://ascopubs.org/doi/full/10.1200/PO.17.00011)

This application was generated using JHipster 6.6.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.6.0](https://www.jhipster.tech/documentation-archive/v6.6.0).

## Status

![](https://github.com/oncokb/oncokb-public/workflows/Node%20CI/badge.svg) <a href="https://codeclimate.com/github/oncokb/oncokb-public/maintainability"><img src="https://api.codeclimate.com/v1/badges/d625e20939f824b0290d/maintainability" /></a>

## Info

![Gitter](https://img.shields.io/gitter/room/OncoKB/public-chat) <a href="https://ascopubs.org/doi/full/10.1200/PO.17.00011"><img src="https://img.shields.io/badge/DOI-10.1200%2FPO.17.00011-1c75cd" /></a>

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

yarn is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is commented out by default. To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function() {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. It dynamically generates the `service-worker.js` file.

## Building for production

### Packaging as jar

To build the final jar and optimize the oncokb application for production, run:

    ./mvnw -Pprod clean verify

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.jar

Then navigate to [http://localhost:9090](http://localhost:9090) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./mvnw -Pprod,war clean verify

### Packaging with a docker image ready
    ./mvnw package -Pprod verify jib:dockerBuild -DskipTests
    
## Testing

To launch your application's tests, run:

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test

For more information, refer to the [Running tests page][].


## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.6.0 archive]: https://www.jhipster.tech/documentation-archive/v6.6.0
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v6.6.0/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v6.6.0/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v6.6.0/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v6.6.0/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v6.6.0/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v6.6.0/setting-up-ci/
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.org/
[webpack]: https://webpack.github.io/
[angular cli]: https://cli.angular.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[jasmine]: https://jasmine.github.io/2.0/introduction.html
[protractor]: https://angular.github.io/protractor/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
