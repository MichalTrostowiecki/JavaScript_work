/*jshint esversion: 8 */

const capitalize = require("./capitalize");

test("Capitalizing first letter of a string given", () => {
  expect(capitalize("michal")).toEqual("Michal");
});
