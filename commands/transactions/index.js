const transactionsCommand = (bot) => {
  bot.onText(/\/transactions/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, 'У тебя их нет нахуй');
  });
};

module.exports = transactionsCommand;