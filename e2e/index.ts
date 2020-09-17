import { indexPage } from "./indexPage"
import pw from "playwright"

const BASE_URL = process.env.BASE_URL || "https://google.co.jp/"

const BROWSER_NAMES: Browser[] = ["webkit", "chromium"]
const TARGET_DEVICES: Device[] = ["iPhone X", "iPhone SE"]
const TEST_CASES: {[key: string]: TestCaseFunction} = {indexPage}


const run = async () => {
    await Promise.all(BROWSER_NAMES.map(async (browserName) => {
        const browser = await pw[browserName].launch()
    
        await Promise.all(
            TARGET_DEVICES.map(async device => {
                const context = await browser.newContext({ ...pw.devices[device] })
                const page = await context.newPage()
                const args = { page, baseUrl: BASE_URL }
                await Promise.all(
                    Object.keys(TEST_CASES).map(async (testCaseName) => {
                        await TEST_CASES[testCaseName](args)
                        await page.waitForLoadState("domcontentloaded");
                        await page.screenshot({
                          path: `screenshots/${browserName}-${device}-${testCaseName}.jpg`,
                          fullPage: true,
                        });
                    })
                )
            })
        )
    
        await browser.close()
    } ))
}

void run()