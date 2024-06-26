const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectProducer: connectKafkaProducer } = require('./kafka');
const app = express();
const PORT = process.env.PORT || 5000;

// const { mysqlConnect, mongoose } = require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});

connectKafkaProducer();