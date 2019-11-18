const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
browser.get('https://uladzimir-yeudakimovich.github.io/');

function logTitle() {
  browser.getTitle().then(function(title) {
    console.log('My name is ' + title);
  });
}

function closeBrowser() {
  browser.quit();
}

browser.then(logTitle);

browser.findElement(webdriver.By.css('input[formControlName=name]')).sendKeys('Alex');
browser.findElement(webdriver.By.css('input[formControlName=email]')).sendKeys('alex@gmail.com');
browser.findElement(webdriver.By.className('form-control_message')).sendKeys('Hi bro!');
browser.findElement(webdriver.By.className('btn-submit')).click();


// THIS CODE FOR MESSAGES
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
