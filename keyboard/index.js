const webAppUrl = 'https://veilpay-webapp.vercel.app/'; 
export const startKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Начать',
            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  };