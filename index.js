#!/usr/bin/env node
import { input } from "@inquirer/prompts";
import chalk from "chalk";
import { Command } from "commander";
async function main() {
  const program = new Command("cli-me");
  program.version("1.0.0");

  program
    .command("hello")
    .description("say hello")
    .action(async () => {
      const name = await input({
        message: "What is your name?",
      });
      console.log(chalk.cyan(`hello ${name}`));
      process.exit(0);
    });

  program.parse(process.argv);
}

await main();
