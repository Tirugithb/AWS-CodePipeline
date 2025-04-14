const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // <-- Use Elastic Beanstalk's port

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
