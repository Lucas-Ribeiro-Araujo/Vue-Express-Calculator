const request = require("supertest");
const routes = require("../routes");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(routes);

it("/api/add", (done) => {
  request(app)
    .post("/api/add")
    .type("form")
    .send({ value1: 10, value2: 20 })
    .expect("Content-Type", /json/)
    .expect({ result: 30 })
    .expect(200, done);
});

it("/api/subtract", (done) => {
  request(app)
    .post("/api/subtract")
    .type("form")
    .send({ value1: 10, value2: 20 })
    .expect("Content-Type", /json/)
    .expect({ result: -10 })
    .expect(200, done);
});

it("/api/divide", (done) => {
  request(app)
    .post("/api/divide")
    .type("form")
    .send({ value1: 20, value2: 2 })
    .expect("Content-Type", /json/)
    .expect({ result: 10 })
    .expect(200, done);
});

it("/api/multiply", (done) => {
  request(app)
    .post("/api/multiply")
    .type("form")
    .send({ value1: 10, value2: 20 })
    .expect("Content-Type", /json/)
    .expect({ result: 200 })
    .expect(200, done);
});

it("/api/module", (done) => {
  request(app)
    .post("/api/module")
    .type("form")
    .send({ value1: 10, value2: 20 })
    .expect("Content-Type", /json/)
    .expect({ result: 10 })
    .expect(200, done);
});
