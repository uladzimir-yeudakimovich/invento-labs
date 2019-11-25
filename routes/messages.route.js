const express = require('express');
const fs = require('fs');
const messagesRoutes = express.Router();

const MESSAGES = './src/assets/message.json';

messagesRoutes.route('/').get(function (req, res) {
  fs.readFile(MESSAGES, 'utf8', function (err, data) {
    if (err) {
      res.status(500).json({ 'message': 'Message have not been saved' });
    }
    const obj = JSON.parse(data);
    res.status(200).json(obj);
  });
});

messagesRoutes.route('/').post(function (req, res) {
  fs.writeFile(MESSAGES, JSON.stringify(req.body), 'utf8', function (err, data) {
    res.status(200).json({ 'success': true });
  });
});

module.exports = messagesRoutes;
