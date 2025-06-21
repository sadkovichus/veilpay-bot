const bot = require('./bot');
const start = require('./commands/start');
const help = require('./commands/help');
const balance = require('./commands/balance');
const transactions = require('./commands/transactions');

start(bot);
help(bot);
balance(bot);
transactions(bot);

console.log('🤖 Бот готов к работе!');