const express = require('express');
const { user } = require('./data/user.js');

const app = express();
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'successfully catched!',
    body: {
      user,
    },
  });
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`server listening on port ${port}`));
