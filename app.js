require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const acceptDump = require(path.join(__dirname, '/middleware/acceptDump'));

const dbConnect = require(path.join(__dirname, '/model/init'));
dbConnect();

require(path.join(__dirname, '/config/bootstrap'))(app);

app.post('/dump', acceptDump);
app.all('*', (req, res) => res.status(404).send('Not found'));

app.listen(port, () => console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`));
