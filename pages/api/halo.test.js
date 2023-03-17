import testFunction from "./halo";

test("basic basic jest functionality", () => {
  expect(testFunction().status).toBe(200);
  expect(testFunction().name).toBe("John Doe");
});
