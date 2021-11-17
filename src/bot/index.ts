import { Bot, webhookCallback } from "https://deno.land/x/grammy/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const bot = new Bot(Deno.env.get("TOKEN") || "");

bot.on("message", (ctx) => ctx.reply("Hi there!!"));

const app = new Application();

app.use(webhookCallback(bot, "oak"));
