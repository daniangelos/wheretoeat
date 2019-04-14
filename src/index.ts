/**
 * main.ts, programa principal.
 */
'use strict';

import { config } from 'dotenv';
import Telegraf from 'telegraf';

config();

// Criará a instância do bot.
const bot = new Telegraf(process.env.BOT_TOKEN || '');

// Quando alguém começar uma conversa com o bot irá enviar ao usuário uma mensagem de olá.
bot.start(({ reply }) => reply('Olá!'))
bot.launch()