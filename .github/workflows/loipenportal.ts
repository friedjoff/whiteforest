// deno-lint-ignore-file camelcase

try {
  const path = "./data/loipenportal/schwarzwald.json";
  const url = "https://www.loipenportal.de/min/f=data/sch/sinfo.js?1636286246";
  const res = await fetch(url);
  const code = await res.text();

  let SInfo, SInfo_SID_Index, SInfo_ZID_Index;
  try {
    eval(code);
  } catch {
    // ignore eval errors
  }
  const data = { SInfo, SInfo_SID_Index, SInfo_ZID_Index };
  await Deno.writeTextFile(path, JSON.stringify(data, null, 2));
} catch (error) {
  console.log(error);
}
