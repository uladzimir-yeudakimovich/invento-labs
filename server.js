const express = require('express');
const cors = require('cors');
const app = express();
const messagesRoutes = require('./routes/messages.route');
const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/', messagesRoutes);
app.listen(port, () => console.log('Listening on port ' + port));
