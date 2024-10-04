import { test, expect } from "vitest";
import propsTransformator from "./propsTransformator";

const props = ["te:tes:test",
               "cat:key:1",
               "cat:y:1.7",
               "te:set:tset"];
test("it transform array of strings to object", async () => {
  const c = propsTransformator(props);
  expect(c).toEqual({
    te: {
      tes: "test",
      set: "tset"
    },
    cat: {
      key: 1,
      y: 1.7
    },
  });
});
