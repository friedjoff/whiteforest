import scrapeLoipenportal from "./loipenportal.ts";
import scrapeNotschreiLoipe from "./notschrei-loipe.ts";
import scrapeThurnerspur from "./thurnerspur.ts";

export async function fetchTimeout(url: string) {
  const controller = new AbortController();
  const timeoutID = setTimeout(() => controller.abort(), 60000);
  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutID);
  return res;
}

await scrapeLoipenportal();
await scrapeNotschreiLoipe();
await scrapeThurnerspur();
