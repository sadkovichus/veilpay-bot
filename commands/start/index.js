const startKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: '📱 Открыть приложение', web_app: { url: 'https://veilpay-webapp.vercel.app/' }}]
    ]
  }
};

const startCommand = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'Пользователь';

    await bot.sendMessage(
      chatId,
      `🔐 ${firstName}, добро пожаловать в ваш надёжный цифровой кошелёк!\n\nС нами вы можете быть уверены в безопасности ваших средств.\n\n🚀 Начните свой путь в мире инвестиций и храните деньги в одном безопасном месте.\n\n👉 _Ваша финансовая свобода начинается здесь_.`,
      {
        ...startKeyboard,
        parse_mode: 'Markdown'
      }
    );
  });
};

module.exports = startCommand;