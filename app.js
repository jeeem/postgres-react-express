import express from "express";
import http from "http";
import { Client } from "pg"

import bodyParser from "body-parser";
import product from "./routes/product";
import users from "./routes/users";

const app = express();

app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/product", product);
app.use("/users", users);

const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Postgres Hello World!
  app.listen(3000, () =>
    console.log(`Server is listening on port 3000`)
  );
  client.end()
})
