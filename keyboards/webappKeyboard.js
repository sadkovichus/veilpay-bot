const startKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: '📱 Открыть приложение', web_app: { url: 'https://veilpay-webapp.vercel.app/' }}]
    ]
  }
};

module.exports = { startKeyboard };