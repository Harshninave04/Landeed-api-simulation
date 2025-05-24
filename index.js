const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
const searchRoute = require('./routes/search');
app.use('/search', searchRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
