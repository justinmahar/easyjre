"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSL = exports.LINUX = exports.WINDOWS = exports.MAC_OS = void 0;
exports.MAC_OS = {
    name: 'mac-os',
    display: 'macOS',
    icon: 'laptop_mac',
    listModulesCommand: './java --list-modules | pbcopy',
};
exports.WINDOWS = {
    name: 'windows',
    display: 'Windows',
    icon: 'laptop_windows',
    listModulesCommand: '.\\java --list-modules | clip',
};
exports.LINUX = {
    name: 'linux',
    display: 'Linux',
    icon: 'laptop',
    listModulesCommand: './java --list-modules | xclip',
};
exports.WSL = {
    name: 'wsl',
    display: 'Windows Subsystem for Linux (WSL)',
    icon: 'laptop',
    listModulesCommand: './java --list-modules | clip.exe',
};
const PLATFORMS = [exports.MAC_OS, exports.WINDOWS, exports.LINUX, exports.WSL];
exports.default = PLATFORMS;
