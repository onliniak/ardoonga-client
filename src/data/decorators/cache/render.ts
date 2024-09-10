import { readFile, writeFile } from "fs";
import type { PathLike } from "fs";
import { JSDOM } from "jsdom";
import type { MountableElement } from "solid-js/web";
import { render as r } from "solid-js/web";
import { exec } from "child_process";
import path from "path";

function write(filepath, filecontent) {
  writeFile(filepath, filecontent, (err) => {
    if (err) throw err;
  });
}

// Pre-render the component
export default function render(
  code : Element,
  element : MountableElement,
  file : string,
  dir : string,
  tsx? : PathLike,
) {
  readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dom = new JSDOM(data);
    const document = dom.window.document;
    document.getElementById(element.id).appendChild(code);
    const scriptTag = document.createElement("script");
    document.body.appendChild(scriptTag).src = path.join(dir, tsx);
    const modifiedHTML = document.head.outerHTML + document.body.outerHTML;

    //const p = path.relative(dir, "pages")
    const filename = path.join(
      path.dirname(file),
      path.basename(file, path.extname(file)).split(".")[0] + ".html",
    );
    write(filename, `<html>${modifiedHTML}</html>`);
    /* MoVe   html files to pages directory
       ReMove html file from currrent directory */
    exec(`mv ${filename} pages/ && rm ${file}`);
  });
  return r(() => code, element!);
}
