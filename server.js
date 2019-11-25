const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const messagesRoutes = require('./routes/messages.route');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/', messagesRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
