const assert = require("assert");

const { fetchMenus } = require("./teknomenyen");

it("fetches the menus from teknobyen.no", async function() {
  this.timeout(6000);
  const menus = await fetchMenus();
  assert.equal(menus.length, 3);
  assert.deepEqual(menus.map(m => m.dayMenus.length), [5, 5, 5]);
});
