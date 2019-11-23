require('express');
const webdriver = require('selenium-webdriver');

setInterval(() => {
  const browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
  browser.get('https://uladzimir-yeudakimovich.github.io/');
  browser.findElement(webdriver.By.css('input[formControlName=name]')).sendKeys('Alex');
  browser.findElement(webdriver.By.css('input[formControlName=email]')).sendKeys('alex@gmail.com');
  browser.findElement(webdriver.By.className('form-control_message')).sendKeys('Hi bro!');
  browser.findElement(webdriver.By.className('btn-submit')).click().then(() => {
    setTimeout(browser.quit(), 3000);
  });
}, 15000);
