const puppeteer = require("puppeteer");

exports.fetchMenus = () =>
  (async () => {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto("https://teknobyen.no/", { waitUntil: "networkidle2" });
    await page.content();
    const menu = await page.evaluate(() =>
      [...document.querySelectorAll(".c-food-menu")].map(m => {
        const [restaurantGroup] = m.innerText.split("\n\n");
        const [restaurant, cantina] = restaurantGroup.split("\n");
        const dayMenus = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"]
          .map((_, i) => m.querySelector(`.day-${i + 1}`))
          .map(d => d.innerText)
          .map(d => d.replace(/[\n]+/g, ". "))
          .map(d => d.replace(/[\s]+/g, " "))
          .map(d => d.trim());
        return { restaurant, cantina, dayMenus };
      })
    );
    await browser.close();
    return menu;
  })();
