/**
 * main.ts, programa principal.
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const telegraf_1 = __importDefault(require("telegraf"));
dotenv_1.config();
// Criará a instância do bot.
const bot = new telegraf_1.default(process.env.BOT_TOKEN || '');
// Quando alguém começar uma conversa com o bot irá enviar ao usuário uma mensagem de olá.
bot.start(({ reply }) => reply('Olá!'));
bot.launch();
