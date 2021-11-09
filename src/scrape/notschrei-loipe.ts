import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import { fetchTimeout } from "./index.ts";

const path = "./data/notschrei-loipe/loipenbericht.html";
const url = "https://www.notschrei-loipe.de/";

export default async function scrapeNotschreiLoipe() {
  console.log("Start: Notschrei Loipe...");
  try {
    const res = await fetchTimeout(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const data = $("[role='section'] > div").html();
    if (data && data.length > 0) {
      await Deno.writeTextFile(path, data);
    }
  } catch (error) {
    console.log(error);
  }
  console.log("Finished: Notschrei Loipe...");
}
