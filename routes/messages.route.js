const express = require('express');
const messagesRoutes = express.Router();
const fs = require('fs');
const MESSAGES = './src/assets/message.json';

messagesRoutes.route('/')
  .get((req, res) => {
    fs.readFile(MESSAGES, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ 'message': 'Message have not been saved' });
      }
      const obj = JSON.parse(data);
      res.status(200).json(obj);
    });
  })
  .post((req, res) => {
    fs.writeFile(MESSAGES, JSON.stringify(req.body), 'utf8', (err, data) => {
      res.status(200).json({ 'success': true });
    });
  });

module.exports = messagesRoutes;
