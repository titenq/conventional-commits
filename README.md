# 🚀 conventional-commits
![](https://img.shields.io/github/stars/titenq/conventional-commits.svg) ![](https://img.shields.io/github/forks/titenq/conventional-commits.svg) ![](https://img.shields.io/github/issues/titenq/conventional-commits.svg)

A CLI tool for creating **semantic git commits** with emoji support, powered by [Conventional Commits](https://www.conventionalcommits.org/).

Instead of manually typing commit prefixes, `conventional-commits` guides you through an interactive prompt to choose a **commit type**, write your **message**, and automatically format commits with the proper convention.


## ✨ Features

- ✅ Curated list of commit types with emojis and descriptions
- 🖥️ Interactive CLI using [inquirer](https://www.npmjs.com/package/inquirer)
- 🔧 Seamless Git hooks integration with [husky](https://typicode.github.io/husky)
- 📦 Built with TypeScript for type safety
- ⚙️ Automatic scope detection from commit messages
- ⚠️ Breaking change indicator support


## 📦 Installation

> Install `conventional-commits` as a development dependency:
```bash
npm i -D @titenq/conventional-commits
```

> Initialize Git hooks
```bash
npx conventional-commits-init
```


## 🚀 Usage

```bash
git commit -m "commit message"
```

#### Then follow the interactive prompts:
```bash
? Select the commit type:
❯ 🎉 init — Project initialization
  📚 docs — Documentation changes
  🐛 fix — Bug fixes
  ✨ feat — New features
  ♻️ refactor — Code refactoring without behavior changes
  ⚡️ perf — Performance improvements
  💄 style — Code style changes (no logic change)
  🧪 test — Adding or updating tests
  🗃️ raw — Changes to raw data/files
  🧹 cleanup — Cleaning up code or files
(Use arrow keys to reveal more choices)
```
#### Output:
```bash
✔ Select the commit type: 📚 docs — Documentation changes
✅ Commit message updated to: 📚 docs: update README.md
[main 9099229] 📚 docs: update README.md
```

### Commit message with scope
```bash
git commit -m "(scope) commit message"
```
```bash
✅ Commit message updated to: 🐛 fix(scope): commit message
```

### Commit message with ! to draw attention to breaking change
```bash
git commit -m "! commit message"
```
```bash
✅ Commit message updated to: ✨ feat!: commit message
```

### Commit message with scope an ! to draw attention to breaking change
```bash
git commit -m "(scope)! commit message"
```
```bash
✅ Commit message updated to: 🐛 fix(scope)!: commit message
```

### Run without `-m` flag for full interactive experience:
```bash
git commit
```
```bash
? Choose a commit type:
  🎉 init — Project initialization
  📚 docs — Documentation changes
  🐛 fix — Bug fixes
  ...
```
```bash
? Type a commit message:
```

---

## 🆘 Troubleshooting
> If you use ! at the beginning of a commit message, wrap the message in single quotes `'!commit message'`, or add a space after ! `"! commit message"`.

```bash
git commit -m '!commit message'   // ✅
git commit -m "! commit message"  // ✅
git commit -m "!commit message"   // ❌
```

---

## 📜 Commit Types

| Emoji  | Type     | Description |
|--------|----------|-------------|
| 🎉     | init     | Project initialization |
| 📚     | docs     | Documentation changes |
| 🐛     | fix      | Bug fixes |
| ✨     | feat     | New features |
| ♻️     | refactor | Code refactoring without behavior changes |
| ⚡️     | perf     | Performance improvements |
| 💄     | style    | Code style changes (no logic change) |
| 🧪     | test     | Adding or updating tests |
| 🗃️     | raw      | Changes to raw data/files |
| 🧹     | cleanup  | Cleaning up code or files |
| 🗑️     | remove   | Removing files or code |
| 🧱     | ci       | Continuous integration changes |
| 📦     | build    | Build process or dependency changes |
| 🛠️     | chore    | Maintenance tasks |
| ⏪     | revert   | Reverting previous commits |
| 🔧     | env      | Environment variable/config changes |

---

## 📦 Uninstall

```bash
npm uninstall @titenq/conventional-commits husky
```

> Delete `.husky` folder

> Delete the script `"prepare": "husky"` from `package.json`

---

## 📜 License

This project is licensed under the GPL3.0 License - see the [LICENSE](LICENSE.txt) file for details.


<!-- Stargazers generated automatically with npx @titenq/stargazers -->
## ⭐ Stargazers

[<img src="https://avatars.githubusercontent.com/u/86478864?v=4&s=80" width="80" height="80" alt="marcio11102005" title="marcio11102005" />](https://github.com/marcio11102005)
[<img src="https://avatars.githubusercontent.com/u/156971190?v=4&s=80" width="80" height="80" alt="AdrianoLink-DataScience" title="AdrianoLink-DataScience" />](https://github.com/AdrianoLink-DataScience)
[<img src="https://avatars.githubusercontent.com/u/173114153?v=4&s=80" width="80" height="80" alt="Tutuixa" title="Tutuixa" />](https://github.com/Tutuixa)
[<img src="https://avatars.githubusercontent.com/u/108964822?v=4&s=80" width="80" height="80" alt="eriveltondasilva" title="eriveltondasilva" />](https://github.com/eriveltondasilva)

