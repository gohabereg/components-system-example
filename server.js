const express = require('express');
const history = require('express-history-api-fallback');

const app = express();

app.use(express.static('./dist'));
app.use(history('index.html', { root: './dist' }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
