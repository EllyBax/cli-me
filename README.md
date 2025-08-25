# cli-me

A tiny, just-for-fun CLI I hacked together. It currently ships one playful command: [`hello()`](index.js:12). It asks your name and says hey in color. That's it. Simple vibes.

## What is this?

- A bin-only util (no library entry point)
- ESM by default (see [`package.json`](package.json))
- One command to start: `hello`
- Friendly to contributions — add more commands, refactors, docs, whatever

## Quick start (local)

- Link it locally:
  - `npm install`
  - `npm link`
- Use it:
  - `cli-me hello`

You'll be prompted for your name and get a cheerful greeting from [`main()`](index.js:5).

Alternatively, without linking:
- `node ./index.js hello`

## Global install (already linked)

- `npm i -g @ellyb/cli-me`
- Run it anywhere:
  - `cli-me hello`

## Commands

- `hello`
  - Prompts for your name and prints a colored greeting via [`hello()`](index.js:12).

## Why so minimal?

Because it's fun. Also because it's a clean starting point for you to play with commander + inquirer + chalk without wading through boilerplate.

## Add your own commands

Totally encouraged. A quick pattern you can copy inside [`main()`](index.js:5):

```js
program
  .command("your-cmd")
  .description("describe what it does")
  .option("-f, --flag", "optional flag")
  .action(async (opts) => {
    // do your thing
  });
```

Open a PR and ship your idea. Weird ideas welcome.

## Tech bits

- CLI entry: [`index.js`](index.js)
- Bin mapping lives in [`package.json`](package.json)
- ESM only:
  - `type: "module"`
  - Chalk v5 is ESM
- Shebang is set to `#!/usr/bin/env node` at the top of [`index.js`](index.js:1), so you naturally need to have node installed
- Dependencies:
  - `commander` for CLI ergonomics
  - `@inquirer/prompts` for interactive prompts
  - `chalk` for colors

## Dev tips

- Linting/tests aren't set up — feel free to add them
- Keep commands small and focused
- If you add files, update docs so folks can discover your new goodies

## Contributing

- Fork, branch, commit, open PR
- Keep the tone casual and helpful in messages and docs
- If you break something, no sweat — we'll fix it

## License

ISC — do your thing.