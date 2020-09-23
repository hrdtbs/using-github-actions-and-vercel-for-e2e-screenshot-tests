## Using GitHub actions and Vercel for end-to-end tests

You can get the URL of Vercel Preview from `github.event.deployment_status.target_url` on` deployment_status` workflow. However, workflows on "deployment_status" don't report under the check. So you need to use the Github API to communicate the results to the PR.

Or you can also use GitHub Action to wait for a Vercel deployment and get the URL of Vercel Preview on `pull_request`. 

ex.) https://github.com/hrdtbs/wait-for-vercel

## Take screenshots in the E2E test very easily.

Use `playwright` instead of `puppeteer`.
