const dotenv = require('dotenv');
dotenv.config();
process.env.MONGO_URL;

const { MongoClient } = require('mongodb');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(async () => {
  console.log('database connected 😍');
  const db = client.db('parfish');
  const users = await db.collection('users');
  const oneUser = await users.forEach(printjson);
  //   const dbUsers = await oneUser.map((user) => {
  //     user;
  //   });
  console.log('found user:', await oneUser);
  app.listen(9000, () => {
    console.log('Server running http://localhost:9000');
  });
});

app.get('/api/users', (request, response) => {
  response.json({
    title: 'Hello Tester',
    message: 'Hello World',
  });
});
