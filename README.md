# Contacts management system

This project is an basic web application to manage a simple contacts built in ~2 hours for test purposes. This App can Add, List and View more details about each contact.
This is built using Angular seed which is used to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The app uses the following rest api to fetch the data:

```
 http://www.mocky.io/v2/580e37bc120000ae1007880c

```

### Install Dependencies

This app has preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```
If the dependencies do not install then please use 

```
bower install
```

### Run the Application

The project contains simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```
or
```
npm run test-single-run
```

## TODO

- Productionise the app. The App is in the debug mode.
- To improve the testing coverage.
- Edit/Delete options.
