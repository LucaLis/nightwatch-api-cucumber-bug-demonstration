import { Given, Then } from 'cucumber';
import { client } from 'nightwatch-api';

Given('I simply open Google', function() {
  return client.url('http://google.com');
});

Given('i call custom command and wait for something important', function(){
  client.customCommand() // comment out this line and test won't freeze 
  return client.waitForElementPresent('#thisWontBePresent')
});

Given('dummy step', function(){
  return client.pause(100)
});

