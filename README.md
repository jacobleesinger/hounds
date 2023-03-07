This is a quick example app to reproduce some issues I've been having with testing Remix apps with Playwright, specifically mocking apis with `page.route`

The page under test is the `/hounds` route (`app/routes/hounds.tsx`), which fetches and displays a list of hound breeds from the dog.ceo api. 

In the test file (`tests/hounds.spec.ts`) I attempt to mock the api with `page.route` as in the [documentation](https://playwright.dev/docs/mock#mock-api-requests), but it does not appear to work. When I run the test (`npx playwright test hounds.spec.ts`) it fails and I don't see the log inside the `page.route` callback, and in the debugger (`npx playwright test hounds.spec.ts --debug) I can see that the actual data from the real api is still being fetched.
