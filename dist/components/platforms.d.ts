export interface IPlatform {
    name: string;
    display: string;
    icon: string;
    listModulesCommand: string;
}
export declare const MAC_OS: IPlatform;
export declare const WINDOWS: IPlatform;
export declare const LINUX: IPlatform;
export declare const WSL: IPlatform;
declare const PLATFORMS: IPlatform[];
export default PLATFORMS;
