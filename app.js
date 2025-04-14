const express = require('express');
const app = express();

// Use the port provided by Elastic Beanstalk, or fallback to 8080 locally
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from Elastic Beanstalk!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
