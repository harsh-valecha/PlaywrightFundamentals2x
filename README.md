# Learning Playwright Fundamentals 2x

A hands-on starter project for learning [Playwright](https://playwright.dev/) end-to-end testing with TypeScript. Part of **The Testing Academy** Playwright Fundamentals course.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/intro) `^1.61.1`
- TypeScript / Node.js (`@types/node`)
- [allure-playwright](https://www.npmjs.com/package/allure-playwright) `^3.10.2` (Allure reporting)
- Custom TTA HTML reporter (`utils/CustomReporter.ts`)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (ships with Node)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests (headless)
npm test
# or
npx playwright test

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run a single spec
npx playwright test tests/example.spec.ts

# Run a single module
npx playwright test tests/01_Basics

# Run the session-storage / Allure module
npx playwright test tests/05_Allure_Reporting/01_TestSessionStorage.spec.ts --headed

# Run in UI mode (interactive)
npx playwright test --ui

# Debug a test
npx playwright test --debug
```

> Note: Spec files must use the `.spec.ts` extension or Playwright will report "No tests found".

## Viewing the Report

This project uses **two reporting mechanisms**:

### 1. TTA Custom HTML Report (real-time)

A custom reporter (`utils/CustomReporter.ts`) generates a live, self-contained HTML report under `tta-report/` after every run, including per-step screenshots, videos, console logs, and tag-based (P0/P1/smoke) filtering.

```bash
# Open the latest report (redirects to the most recent run)
npm run report
# or open directly
open tta-report/index.html

# Browse the history of all runs
open tta-report/history.html
```

### 2. Allure Report

`allure-playwright` writes results to `allure-results/` on each run. Generate and open the Allure HTML report with the Allure CLI:

```bash
# Install Allure CLI once (requires Java)
brew install allure   # macOS

# Generate and open the report
allure generate allure-results --clean -o allure-report
allure open allure-report
```

### 3. Built-in Playwright Report

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/                          # Test specs organized by topic
│   ├── example.spec.ts             # Minimal example test (with steps, screenshots & tags)
│   ├── Template.spec.ts            # Reusable spec template (with steps, screenshots & tags)
│   ├── 01_Basics/                  # Basics: first tests, annotations, BCP
│   ├── 02_first_tests/             # First test cases
│   ├── 03_Locators_Commands/       # Locators & commands (VWO free trial, Playwright commands, sequential input)
│   ├── 03_locators/                # Locator strategies (CSS, project locators, XPath, real-world apps: VWO, CURA Healthcare)
│   ├── 04_Session_Storage/         # Session storage handling (VWO dashboard, sessionStorage)
│   ├── 05_Allure_Reporting/        # Allure reporting (session storage spec for Allure demo)
│   ├── 06_Multiple_Element_/       # Working with multiple elements
│   ├── 07_WebTables/               # Web tables
│   ├── 08_Web_Select_Frames_Iframe/ # Selects, frames & iframes
│   ├── 09_Frame_Iframe/            # Frames & iframes
│   ├── 10_Keyboard_Hover_Drag_Drop/# Keyboard, hover, drag & drop
│   ├── 11_JS_Alerts/               # JavaScript dialogs/alerts
│   ├── 12_Handle_SVG/              # Handling SVG elements
│   ├── 13_Shadow_DOM/              # Shadow DOM
│   ├── 14_FileUpload/              # File upload
│   ├── 15_File_Download/           # File download
│   ├── 16_Scroll_toElement/        # Scrolling to elements
│   ├── 17_Expect_Assertions/       # Expect assertions
│   ├── 18_Test_hooks/              # Test hooks (before/after)
│   ├── 19_Data_Driven_Testing/     # Data-driven testing
│   ├── 20_Page_Object_Model/       # Page Object Model
│   ├── 21_Fixture/                 # Custom fixtures
│   ├── 22_Misc_Concepts/           # Miscellaneous concepts
│   ├── 23_Advance_Framework/       # Advanced framework patterns
│   └── Projects/                   # Project-level configs / setup
├── utils/
│   └── CustomReporter.ts           # Custom TTA HTML reporter (real-time report)
├── tta-report/                     # Generated TTA HTML reports (gitignored)
├── allure-results/                 # Allure raw results (gitignored)
├── playwright.config.ts            # Playwright configuration
├── package.json
└── .gitignore
```

## What's Inside

The project is organized into numbered learning modules (01–23) covering Playwright fundamentals, from basic navigation and locators through to advanced topics like Page Object Model, fixtures, and data-driven testing.

- `tests/example.spec.ts` — a minimal example verifying the page title.
- `tests/Template.spec.ts` — a reusable starting template for new specs.
- `tests/01_Basics/` — includes basic tests, test annotations, and best-practice conventions (BCP).
- `tests/03_locators/` — locator strategy exercises:
  - `01_LS.spec.ts` — locator strategy basics.
  - `02_Project_Locator.spec.ts` — VWO login error-message validation using CSS `#id` locators.
  - `03_xpath.spec.ts` — XPath locator template (VWO login page).
  - `04_Cura_healthcare.spec.ts` — end-to-end flows on the CURA Healthcare demo (make appointment, login, book appointment) using CSS, role, text, and XPath locators.
- `tests/03_Locators_Commands/` — locator & command practice:
  - `01_project_vwo_freetrial.spec.ts` — validates the VWO free-trial email error message via role and XPath locators.
  - `02_PwCommands.spec.ts` — explores `page.goto` `waitUntil` options (commit, domcontentloaded, load, networkidle).
  - `03_press_sequential.spec.ts` — demonstrates `pressSequentially` for character-by-character input on the AwesomeQA practice page.

> Note: Several module folders are scaffolded as placeholders for upcoming exercises.

## Configuration Highlights

Defined in `playwright.config.ts`:

- `testDir: './tests'` — where specs live
- `fullyParallel: true` — run test files in parallel
- `reporter` — a combined reporter setup:
  - `list` — console test output.
  - `allure-playwright` — writes Allure results to `allure-results/`.
  - `./utils/CustomReporter.ts` — the custom TTA real-time HTML reporter.
- `headless: true` — tests run headless by default; pass `--headed` to watch the browser.
- `trace: 'on-first-retry'` — capture traces on retry.
- `screenshot: 'on'` and `video: 'on'` — capture screenshots and video for every test (used by the TTA report).
- A `chromium` project (Firefox/WebKit and mobile/branded browsers are available but commented out).
- CI-aware retries and workers (`process.env.CI`).
- `forbidOnly` is currently **disabled/commented out**, allowing `test.only` focused runs locally. Re-enable `forbidOnly: !!process.env.CI` in CI to fail the build if a `test.only` is accidentally left in the source.

### Writing report-friendly tests

The TTA custom reporter renders richer results when specs follow a few conventions (see `tests/Template.spec.ts`):

- Wrap logical actions in `test.step('title', async () => { ... })` so each step shows as an expandable row with its own duration & video timing.
- Use `console.log(...)` inside a step to surface console output for that step.
- Attach a screenshot named `step-<index>-<label>` (0-based, matching step order) to pin a screenshot to a specific step.
- Add `@tags` in the test title (e.g. `@P0`, `@P1`, `@smoke`) to drive the report's priority/status filters.

## Learn More

- [Playwright Docs](https://playwright.dev/docs/intro)
- [The Testing Academy](https://thetestingacademy.com/)

## License

ISC
