import render from "@/decorators/cache/render";
import { test, expect } from "vitest";
import { writeFile, readFile, unlink } from "fs/promises";
import { JSDOM } from "jsdom";

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

writeFile("src/render.test.html", `<html><body id="app"></body></html>`);

const dom = new JSDOM(`<html><body id="app"></body></html>`);
const document = dom.window.document;

console.log(
  render(
    App(),
    document.getElementById("app"),
    __filename.substring(0, __filename.length - 3) + "html",
    __dirname,
    "Index.tsx"
  )
)

test("it pre-render component and overwrite render function without modify original behavior", () => {
  render(
    App(),
    document.getElementById("app"),
    __filename.substring(0, __filename.length - 3) + "html",
    __dirname,
  );

  readFile("pages/render.html", "utf8").then((data) => {
    expect(data).toBe(
      `<html>${document.body.outerHTML}</html>`,
    );
  });
  unlink("pages/render.html");
});
