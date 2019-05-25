const STARTS_WITH_EXCLUSION: string = "jdk.";

export default function parseJDKModules(
  modulesList: string
): [string | null, string[], string[]] {
  let modules = modulesList.split(/\r?\n/);
  let strippedModules: string[] = [];
  let jdkVersion: string | null = null;
  modules.forEach((value, index) => {
    value = value.trim();
    if (value !== "" && value.indexOf("@") >= 0) {
      jdkVersion = value.slice(value.indexOf("@") + 1);
      value = value.slice(0, value.indexOf("@"));
      strippedModules.push(value);
    }
  });

  let excludedModules = strippedModules.filter(element => {
    return element.startsWith(STARTS_WITH_EXCLUSION);
  });
  excludedModules.sort();

  let includedModules = strippedModules.filter(element => {
    return !element.startsWith(STARTS_WITH_EXCLUSION);
  });
  includedModules.sort();
  return [jdkVersion, includedModules, excludedModules];
}
