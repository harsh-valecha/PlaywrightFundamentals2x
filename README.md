# Learning Playwright Fundamentals 2x

A hands-on starter project for learning [Playwright](https://playwright.dev/) end-to-end testing with TypeScript. Part of **The Testing Academy** Playwright Fundamentals course.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/intro) `^1.61.1`
- TypeScript / Node.js (`@types/node`)

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
npx playwright test

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run a single spec
npx playwright test tests/example.spec.ts

# Run a single module
npx playwright test tests/01_Basics

# Run in UI mode (interactive)
npx playwright test --ui

# Debug a test
npx playwright test --debug
```

## Viewing the Report

After a run, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/                          # Test specs organized by topic
│   ├── example.spec.ts             # Minimal example test
│   ├── Template.spec.ts            # Reusable spec template
│   ├── 01_Basics/                  # Basics: first tests, annotations, BCP
│   ├── 02_first_tests/             # First test cases
│   ├── 03_Locators_Commands/       # Locators & commands (VWO free trial, Playwright commands, sequential input)
│   ├── 03_locators/                # Locator strategies (CSS, project locators, XPath, real-world apps: VWO, CURA Healthcare)
│   ├── 04_Session_Storage/         # Session storage handling
│   ├── 05_Allure_Reporting/        # Allure reporting
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
- `reporter: 'html'` — HTML reporter is currently **commented out** (no default reporter); uncomment or set a reporter as needed.
- `headless: false` — tests run in headed mode (browser UI visible); set `headless: true` or pass `--headed`/`--headless` to override.
- `trace: 'on-first-retry'` — capture traces on retry
- A `chromium` project (Firefox/WebKit and mobile/branded browsers are available but commented out)
- CI-aware retries and workers (`process.env.CI`)
- `forbidOnly` is currently **disabled/commented out**, allowing `test.only` focused runs locally. Re-enable `forbidOnly: !!process.env.CI` in CI to fail the build if a `test.only` is accidentally left in the source.

## Learn More

- [Playwright Docs](https://playwright.dev/docs/intro)
- [The Testing Academy](https://thetestingacademy.com/)

## License

ISC
