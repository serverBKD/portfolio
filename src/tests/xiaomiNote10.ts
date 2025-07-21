// import { chromium, devices } from 'playwright';

// const xiaomiNote10 = {
//   name: 'Xiaomi Note 10',
//   userAgent: 'Mozilla/5.0 (Linux; Android 11; Xiaomi Note 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
//   viewport: {
//     width: 1080,
//     height: 2400,
//   },
//   deviceScaleFactor: 2.75,
//   isMobile: true,
//   hasTouch: true,
// };

// (async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext(xiaomiNote10);
//   const page = await context.newPage();
//   await page.goto('https://tu-sitio.com');

//   await page.screenshot({ path: 'xiaomi-note10.png', fullPage: true });
//   await browser.close();
// })();
