import fs from "node:fs";

import inquirer from "inquirer";

const main = async () => {
  const COMMIT_MSG_FILE = process.argv[2];
  let commitMessage = fs.readFileSync(COMMIT_MSG_FILE, "utf8").trim();
  let scope = "";
  let isBreaking = false;
  let description = commitMessage;
  const COMMIT_PATTERN = /^(?:\s*\(([^)]+)\)\s*)?(!?)(.*)/;
  const commitMatch = commitMessage.match(COMMIT_PATTERN);

  if (commitMatch) {
    scope = (commitMatch[1] || "").trim();
    isBreaking = Boolean(commitMatch[2]);
    description = (commitMatch[3] || "").trim() || description;
  }

  const { type } = await inquirer.prompt({
    type: "list",
    name: "type",
    message: "Select the commit type:",
    choices: [
      {
        name: "🎉 init — Project initialization",
        value: "🎉 init",
      },
      {
        name: "📚 docs — Documentation changes",
        value: "📚 docs",
      },
      {
        name: "🐛 fix — Bug fixes",
        value: "🐛 fix",
      },
      {
        name: "✨ feat — New features",
        value: "✨ feat",
      },
      {
        name: "♻️  refactor — Code refactoring without behavior changes",
        value: "♻️ refactor",
      },
      {
        name: "⚡️ perf — Performance improvements",
        value: "⚡️ perf",
      },
      {
        name: "💄 style — Code style changes (no logic change)",
        value: "💄 style",
      },
      {
        name: "🧪 test — Adding or updating tests",
        value: "🧪 test",
      },
      {
        name: "🗃️  raw — Changes to raw data/files",
        value: "🗃️ raw",
      },
      {
        name: "🧹 cleanup — Cleaning up code or files",
        value: "🧹 cleanup",
      },
      {
        name: "🗑️  remove — Removing files or code",
        value: "🗑️ remove",
      },
      {
        name: "🧱 ci — Continuous integration changes",
        value: "🧱 ci",
      },
      {
        name: "📦 build — Build process or dependency changes",
        value: "📦 build",
      },
      {
        name: "🛠️  chore — Maintenance tasks",
        value: "🛠️ chore",
      },
      {
        name: "⏪ revert — Reverting previous commits",
        value: "⏪ revert",
      },
      {
        name: "🔧 env — Environment variable/config changes",
        value: "🔧 env",
      },
    ],
    pageSize: 10,
  });

  if (!description || description.startsWith("# Please enter the commit message for your changes.")) {
    const { message } = await inquirer.prompt({
      type: "input",
      name: "message",
      message: "Enter the commit message:",
      validate: (input: string) => Boolean(input.trim()) || "The message cannot be empty.",
    });
    description = message.trim();
  }

  const formattedCommit = [
    type,
    scope && `(${scope})`,
    isBreaking && "!",
    `: ${description}`,
  ].filter(Boolean).join('');

  fs.writeFileSync(COMMIT_MSG_FILE, `${formattedCommit}\n`);

  console.log(`✅ Commit message updated to: ${formattedCommit}`);
};

main();
