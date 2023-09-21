const express = require('express');
const cors = require('cors');

class Server {
  #app;
  #port;
  #authzPath = '/api/v1/authz';

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT;
    this.#middlewares();
    this.#routes();
  }

  #middlewares() {
    this.#app.use(cors());

    // Read and parse Request body
    this.#app.use(express.json());

  }

  #routes() {
    this.#app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    this.#app.use(this.#authzPath, require('../routes/authz'));
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`App listening on port ${this.#port}`);
    });
  }

}

module.exports = Server;
