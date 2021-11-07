import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

const selectors = [
  ".fusion-builder-row-5",
  ".fusion-builder-row-7",
  ".fusion-builder-row-9",
  ".fusion-builder-row-11",
  ".fusion-builder-row-12",
];

try {
  const path = "./data/thurnerspur/loipenbericht.html";
  const res = await fetch("https://www.thurnerspur.de/");
  const html = await res.text();
  const $ = cheerio.load(html);
  const data = selectors.map((s) => $(s).html()).join(`
`);
  await Deno.writeTextFile(path, data || "");
} catch (error) {
  console.log(error);
}
