const helpCommand = (bot) => {
  bot.onText(/\/help/, async (msg) => {
    const chatId = msg.chat.id;

    const helpMessage = `
📚 Доступные команды:

/start - Запустить бота  
/help - Показать это меню  
/balance - Посмотреть ваш баланс  
/transactions - История операций
    `;

    await bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
  });
};

module.exports = helpCommand;