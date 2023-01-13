/// <reference types="react" />
import { IPlatform } from '../platforms';
export interface ICreateJREContainerProps {
    maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
    platform: IPlatform;
    jdkVersion: string | null | undefined;
    includedJDKModules: string[];
    modulePath: string;
    manuallySpecifiedModules: string;
    jdkBinPath: string;
    compressionLevel: number;
    headerFilesExcluded: boolean;
    manPagesExcluded: boolean;
    bindServicesEnabled: boolean;
}
export default function CreateJREContainer(props: ICreateJREContainerProps): JSX.Element;
