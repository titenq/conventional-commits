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
      // ================= CORE =================
      new inquirer.Separator("=== Core ==="),
      { name: "🎉 init — Project initialization", value: "🎉 init" },
      { name: "✨ feat — New features", value: "✨ feat" },
      { name: "🐛 fix — Bug fixes", value: "🐛 fix" },
      { name: "♻️ refactor — Code refactoring without behavior changes", value: "♻️ refactor" },
      { name: "⚡️ perf — Performance improvements", value: "⚡️ perf" },
      { name: "💥 fix — Reverting changes", value: "💥 fix" },

      // ================= STYLE =================
      new inquirer.Separator("=== Style & UI ==="),
      { name: "💄 style — Code style changes (no logic change)", value: "💄 style" },
      { name: "👌 style — Code review changes", value: "👌 style" },
      { name: "💄 feat — UI styling", value: "💄 feat" },
      { name: "💫 animation — Animations and transitions", value: "💫 animation" },
      { name: "📱 responsive — Responsiveness improvements", value: "📱 responsive" },

      // ================= DOCS =================
      new inquirer.Separator("=== Documentation ==="),
      { name: "📚 docs — Documentation changes", value: "📚 docs" },
      { name: "💡 docs — Comments", value: "💡 docs" },
      { name: "📝 text — Text changes", value: "📝 text" },

      // ================= TESTS =================
      new inquirer.Separator("=== Tests ==="),
      { name: "🧪 test — Adding or updating tests", value: "🧪 test" },
      { name: "✅ test — Adding a test", value: "✅ test" },
      { name: "✔️ test — Approval tests", value: "✔️ test" },

      // ================= INFRA =================
      new inquirer.Separator("=== Infra & Build ==="),
      { name: "🧱 ci — Continuous integration changes", value: "🧱 ci" },
      { name: "📦 build — Build process or dependency changes", value: "📦 build" },
      { name: "➕ build — Adding a dependency", value: "➕ build" },
      { name: "➖ build — Removing a dependency", value: "➖ build" },
      { name: "⬆️ upgrade — Updating submodule version", value: "⬆️ upgrade" },
      { name: "⬇️ downgrade — Reverting submodule version", value: "⬇️ downgrade" },
      { name: "🚀 deploy — Deploying application", value: "🚀 deploy" },
      { name: "🔧 env — Environment variable/config changes", value: "🔧 env" },
      { name: "🛠️ chore — Maintenance tasks", value: "🛠️ chore" },
      { name: "🚚 chore — Moving or renaming files", value: "🚚 chore" },

      // ================= CLEANUP =================
      new inquirer.Separator("=== Cleanup & Removal ==="),
      { name: "🧹 cleanup — Cleaning up code or files", value: "🧹 cleanup" },
      { name: "🗑️ remove — Removing files or code", value: "🗑️ remove" },

      // ================= DATA =================
      new inquirer.Separator("=== Data ==="),
      { name: "🗃️ raw — Changes to raw data/files", value: "🗃️ raw" },

      // ================= SECURITY =================
      new inquirer.Separator("=== Security & SEO ==="),
      { name: "🔒 security — Security fixes", value: "🔒 security" },
      { name: "🔍 seo — SEO improvements", value: "🔍 seo" },

      // ================= MISC =================
      new inquirer.Separator("=== Miscellaneous ==="),
      { name: "⏪ revert — Reverting previous commits", value: "⏪ revert" },
      { name: "🚧 wip — Work in progress", value: "🚧 wip" },
      { name: "🔖 tag — Version tagging", value: "🔖 tag" },
      { name: "🏷️ types — Typings", value: "🏷️ types" },
      { name: "🥅 error-handling — Error handling", value: "🥅 error-handling" },
      { name: "♿ accessibility — Accessibility improvements", value: "♿ accessibility" },
      { name: "🔜 tasks — Ideas or task list", value: "🔜 tasks" },
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
