const balanceCommand = (bot) => {
  bot.onText(/\/balance/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, 'У тебя нет денег, ты нищий сука');
  });
};

module.exports = balanceCommand;