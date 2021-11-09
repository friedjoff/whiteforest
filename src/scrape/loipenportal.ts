// deno-lint-ignore-file camelcase
import { fetchTimeout } from "./index.ts";

const path = "./data/loipenportal/schwarzwald.json";
const url = "https://www.loipenportal.de/min/f=data/sch/sinfo.js?1636286246";

export default async function scrapeLoipenportal() {
  console.log("Start: Loipenportal...");
  try {
    const res = await fetchTimeout(url);
    const code = await res.text();

    let SInfo, SInfo_SID_Index, SInfo_ZID_Index;
    try {
      eval(code);
    } catch {
      // ignore eval errors
    }
    if (Array.isArray(SInfo)) {
      const data = { SInfo, SInfo_SID_Index, SInfo_ZID_Index };
      await Deno.writeTextFile(path, JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log(error);
  }
  console.log("Finished: Loipenportal...");
}
