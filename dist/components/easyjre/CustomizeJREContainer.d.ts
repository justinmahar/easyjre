import * as React from 'react';
import { IIntention } from '../intentions';
export interface ICustomizeJREContainerProps {
    maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
    intention: IIntention;
    jdkVersion: string | null | undefined;
    setJdkVersion: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    includedJDKModules: string[];
    setIncludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
    excludedJDKModules: string[];
    setExcludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
    modulePath: string;
    setModulePath: React.Dispatch<React.SetStateAction<string>>;
    manuallySpecifiedModules: string;
    setManuallySpecifiedModules: React.Dispatch<React.SetStateAction<string>>;
    jdkBinPath: string;
    setJdkBinPath: React.Dispatch<React.SetStateAction<string>>;
    compressionLevel: number;
    setCompressionLevel: React.Dispatch<React.SetStateAction<number>>;
    headerFilesExcluded: boolean;
    setHeaderFilesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
    manPagesExcluded: boolean;
    setManPagesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
    bindServicesEnabled: boolean;
    setBindServicesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustomizeJREContainer(props: ICustomizeJREContainerProps): JSX.Element;
