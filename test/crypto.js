'use strict';

import delay from 'delay';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jest.unmock('cross-fetch');
const TIME = 1000;

test(`daily data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.crypto.daily('btc', 'usd'))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Digital Currency Daily)']).toBeDefined();
    });
});

test(`weekly data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.crypto.weekly('btc', 'usd'))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Digital Currency Weekly)']).toBeDefined();
    });
});

test(`monthly data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.crypto.monthly('btc', 'usd'))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Digital Currency Monthly)']).toBeDefined();
    });
});
