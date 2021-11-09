import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import { fetchTimeout } from "./index.ts";

const path = "./data/thurnerspur/loipenbericht.html";
const url = "https://www.thurnerspur.de/";
const selectors = [
  ".fusion-builder-row-5",
  ".fusion-builder-row-7",
  ".fusion-builder-row-9",
  ".fusion-builder-row-11",
  ".fusion-builder-row-12",
];

export default async function scrapeThurnerspur() {
  console.log("Start: Thurnerspur...");
  try {
    const res = await fetchTimeout(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const data = selectors.map((s) => $(s).html()).join(`
`);
    if (data && data.length > 0) {
      await Deno.writeTextFile(path, data);
    }
  } catch (error) {
    console.log(error);
  }
  console.log("Finished: Thurnerspur...");
}
