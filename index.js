const TelegramBot = require('node-telegram-bot-api');
const { startKeyboard } = require('./keyboard');

const token = '8199858567:AAFtn5bLTdIPfWG-_bW4IDVdfpcv4BK-9y4';

const bot = new TelegramBot(token, { polling: true });

console.log('Бот запущен...');

bot.setMyCommands([
  { command: '/start', description: 'Запустить бота' },
  { command: '/help', description: 'Показать помощь' },
  { command: '/balance', description: 'Посмотреть баланс' },
  { command: '/transactions', description: 'История транзакций' }
]);

bot.onText('', (msg, match) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name || 'Пользователь';
  const text = msg.text;
  

  if (text === '/start') {
    bot.sendMessage(
     chatId,
     `🔐 ${firstName}, добро пожаловать в ваш надёжный цифровой кошелёк!\n\nС нами вы можете быть уверены в безопасности ваших средств — мы разработали сервис, где сочетаются максимальная защита, удобство и высокая скорость транзакций.\n\n🚀 Начните свой путь в мире инвестиций и храните деньги в одном безопасном месте.\nПодключайтесь через веб-приложение и управляйте своими активами быстро и без лишних усилий.\n\n👉 _Ваша финансовая свобода начинается здесь_.`,
     {
       ...startKeyboard,
       parse_mode: 'Markdown'
     }
    );
  }
  if (text === '/help') {
    const helpMessage = `
    📚 Доступные команды:

/start - Запустить бота  
/help - Показать это меню  
/balance - Посмотреть ваш баланс  
/transactions - Посмотреть историю операций
    `;

    bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
  }
  if (text === '/balance') {
    bot.sendMessage(chatId, 'У тебя нет денег, ты нищий сука');
  }
  if (text === '/transactions') {
    bot.sendMessage(chatId, 'У тебя их нет нахуй');
  }
});