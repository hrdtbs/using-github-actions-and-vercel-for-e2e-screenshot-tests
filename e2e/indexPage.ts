export const indexPage: TestCaseFunction = async ({ page, baseUrl }) => {
  await page.goto(baseUrl);
};
