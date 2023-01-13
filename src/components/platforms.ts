export interface IPlatform {
  name: string;
  display: string;
  icon: string;
  listModulesCommand: string;
}

export const MAC_OS: IPlatform = {
  name: 'mac-os',
  display: 'macOS',
  icon: 'laptop_mac',
  listModulesCommand: './java --list-modules | pbcopy',
};
export const WINDOWS: IPlatform = {
  name: 'windows',
  display: 'Windows',
  icon: 'laptop_windows',
  listModulesCommand: '.\\java --list-modules | clip',
};
export const LINUX: IPlatform = {
  name: 'linux',
  display: 'Linux',
  icon: 'laptop',
  listModulesCommand: './java --list-modules | xclip',
};
export const WSL: IPlatform = {
  name: 'wsl',
  display: 'Windows Subsystem for Linux (WSL)',
  icon: 'laptop',
  listModulesCommand: './java --list-modules | clip.exe',
};

const PLATFORMS = [MAC_OS, WINDOWS, LINUX, WSL];
export default PLATFORMS;
