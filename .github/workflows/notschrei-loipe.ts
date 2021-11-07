import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

try {
  const path = "./data/notschrei-loipe/loipenbericht.html";
  const res = await fetch("https://www.notschrei-loipe.de/");
  const html = await res.text();
  const $ = cheerio.load(html);
  const data = $("[role='section'] > div").html();
  await Deno.writeTextFile(path, data || "");
} catch (error) {
  console.log(error);
}
