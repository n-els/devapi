const express = require('express');
const persons = require('./data/persons');
const usersRouter = require('./api/v1/routes/users');
const developersRouter = require('./api/v1/routes/developers');

const app = express();
app.use(express.json());

// main route
app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'successfully catched!',
    body: {
      persons,
    },
  });
});

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/developers', developersRouter);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`server listening on port ${port}`));
