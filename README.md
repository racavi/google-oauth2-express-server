# google-oauth2-express-server

This repository backs a minimalist NodeJS Express server template that uses the official Google API Client Library to provide a basic API that implements online OAuth 2.0 authorization code flow for accessing Google APIs. 

The server template is also provided with a middleware that enables all CORS requests and a dependency for managing environment variables via `.env` file.

## Prerequisites

This is a Node.js® application, as such, you will need to have Node.js installed in your machine to be able to run this application.

## Getting started

### Install the dependencies

To be able to run this application, you will need to install its dependencies. To do so you will have to:

1. Navigate into application source directory

2. Install required Node node modules

The following commands will reproduce these steps within a terminal:

```lang-bash
cd app/
npm install
```

### Configure environment variables

This app uses a module named `dotenv` to manage environment variables. Loading environment variables from a `.env` file into the [Node process.env API](https://nodejs.org/docs/latest/api/process.html#process_process_env). 

To test it, create the file `app/.env` and declare the `PORT` environment variable with a value of your choice, e.g: `3000` do this by pasting the following content to the file:

```lang-makefile
PORT=3000
```

```lang-makefile
GOOGLE_CLIENT_ID=<YOUR_CLIENT_ID>
GOOGLE_CLIENT_SECRET=<YOUR_CLIENT_SECRET>
GOOGLE_AUTHORIZATION_REDIRECT_URL=<YOUR_REDIRECT_URL>
GOOGLE_OAUTH2_API_SCOPES=<COMMA_SEPARATED_LIST_OF_OAUTH_2_SCOPES_FOR_GOOGLE_APIS>
```

### Run the application

You can run the application by issuing the following command:

```lang-bash
node app.js
```

After that, open your web browser of choice and load http://localhost:3000/ to see the output. 

## References

- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [googleapis](https://www.npmjs.com/package/googleapis)
- [Express](https://www.npmjs.com/package/express)
- [Node.js](https://nodejs.org/)
- [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes)
- [Using Google OAuth 2.0 for Web Server Applications](https://developers.google.com/identity/protocols/oauth2/web-server)
