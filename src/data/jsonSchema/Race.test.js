import { test, expect } from "vitest";
import vali from "./Race";

const badschema = {
  name: "test",
  description: "test",
  avatar: "test",
  awidth: 1,
  aheight: 1,
  heritage: "test",
  props: ["test"],
};

const goodschema = { ...badschema,
                    props: ["test:test:test"],
                    avatar: "https://myhost.eu/image.webp"};

const filename = "src/data/jsonSchemas/schemas.json";

test("it use valid schema", async () => {
  const c = await vali(goodschema, filename);
  expect(c).toBe("Instance is valid :-)");
});

test("it use invalid schema", async () => {
  const c = await vali(badschema);
  console.warn("Test passed even without 2nd parameter")
  expect(c).toBe("Instance is invalid :-(");
});