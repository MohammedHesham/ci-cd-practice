const { test } = require('node:test');
const assert = require('node:assert');
const { greet } = require('./app');

test('greet builds the right message', () => {
  assert.strictEqual(greet('Docker'), 'Hello, Docker!');
});

test('greet handles another name', () => {
  assert.strictEqual(greet('CI'), 'Hello, CI!');
});