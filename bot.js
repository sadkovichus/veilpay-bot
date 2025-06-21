const TelegramBot = require('node-telegram-bot-api');
const token = '8199858567:AAFtn5bLTdIPfWG-_bW4IDVdfpcv4BK-9y4';


if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN не указан в .env');
}

const bot = new TelegramBot(token, { polling: true });

console.log('✅ Бот запущен...');

bot.setMyCommands([
  { command: '/start', description: 'Запустить бота' },
  { command: '/help', description: 'Показать помощь' },
  { command: '/balance', description: 'Посмотреть баланс' },
  { command: '/transactions', description: 'История транзакций' }
]);

module.exports = bot;