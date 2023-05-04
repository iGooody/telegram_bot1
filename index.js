const TelegramApi = require("node-telegram-bot-api")
const token = '5963938604:AAHXbbMaJrhg00PN9gHZgLigIETDgi5bWbc';


const bot = new TelegramApi(token, {polling: true})


bot.on("message", msg => {
    console.log(msg)
})