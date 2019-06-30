const messagesRoutes = require('./routes/messages.route');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/', messagesRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
