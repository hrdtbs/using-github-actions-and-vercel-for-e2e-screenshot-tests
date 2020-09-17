## Using GitHub actions and Vercel for end-to-end tests

You can get the URL of Vercel websites from `github.event.deployment_status.target_url` on` deployment_status` workflow. However, workflows on "deployment_status" don't report under the check. So you need to use the Github API to communicate the results to the PR.

## Only Run Github Actions on Specific Branches

In workflows on "deployment_status", `github.ref` may be empty, so you need to use `${{ github.repository }}`.

## Take screenshots in the E2E test  very easily.

Use `playwright` instead of `puppeteer`.
