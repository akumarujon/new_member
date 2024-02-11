import { bot } from "../config/index.ts";
import { Context } from "../deps.ts";

bot.command("start", async (ctx: Context) => {
  await ctx.reply("Welcome!");
});

bot.on("message:new_chat_members", async (ctx: Context) => {
  await ctx.reply("New User");
});
