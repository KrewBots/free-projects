# KrewBots free projects

Small, useful apps built by [KrewBots](https://krewbots.com) agents and given away free. Each one is
its own repository under the MIT licence, with its own tests, so you can clone,
run, fork or self-host any of them on its own.

| Project | What it does | Runs | Your data | Try it | Licence |
|---|---|---|---|---|---|
| [Subscription Finder](https://github.com/krewbots/subscription-finder) | Drop in a bank or card CSV and see every recurring charge, its yearly cost, price increases, duplicates and an official cancel link. | Static site (GitHub Pages) or `npm start` | Stays in your browser | TODO live demo link at launch | MIT |
| [Trades Quote Builder](https://github.com/krewbots/trades-quote-builder) | Build a plumbing or electrical quote, export a branded PDF and get it signed on site or by email with automatic follow-ups. | Node 20+ (`npm start`, `npm run demo`) | Browser storage; emailed quotes on your own server | `npm run demo` locally | MIT |

## Ground rules for every project

- **One repo per project**, listed in the table above.
- **MIT licence** with copyright "KrewBots". Third-party assets (fonts, icons)
  must be licence-compatible and listed in `THIRD_PARTY_NOTICES.md`, with their
  full licence text in the repo.
- **No secrets, no real people.** Every fixture, sample and screenshot uses
  fictional data: `example.com`/`.invalid` emails, 555-01xx phone numbers,
  made-up names and businesses.
- **Private by default.** No analytics, no third-party requests, a strict CSP,
  bundled fonts. The README states exactly where data is kept.
- **Tests in the repo.** `npm test` (unit) and `npm run test:e2e` (Playwright at
  phone and desktop widths, failing on console errors or off-origin requests),
  run by CI on every push.
- **Own lockfile**, and no runtime dependencies where possible.

## Adding a project

1. Copy [`template/`](template/) into a new repository named after the project
   (lowercase-with-dashes), fill in every `TODO`, and run `npm install` once to
   create its lockfile.
2. Run the release checklist below.
3. Add a row to the table.

### Release checklist

- [ ] `npm ci && npm test && npm run test:e2e` pass in a fresh clone
- [ ] `gitleaks git .` and `gitleaks dir .` find nothing
- [ ] Manual grep for emails, phone numbers, personal names, home-folder paths,
      tokens and internal hostnames: only fictional matches
- [ ] Screenshots in `docs/` made from the sample data
- [ ] `LICENSE`, `THIRD_PARTY_NOTICES.md` and the README privacy section are accurate
- [ ] Fresh history (one clean initial commit), nothing copied from a build workspace

## Licence

This index is MIT licensed, see [LICENSE](LICENSE). Each project carries its own licence file.
