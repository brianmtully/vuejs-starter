/* psql postgres -f db.sql */

DROP DATABASE IF EXISTS starter;
CREATE DATABASE starter;

\c cor;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR,
  password VARCHAR
);



INSERT INTO users (firstName, lastName, email, password)
VALUES ('Brian', 'Tully', 'test@test.com', 'test');
