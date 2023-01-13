import * as React from 'react';
import { IPlatform } from '../platforms';
export interface ICopyPasteModulesContainerProps {
    maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
    platform: IPlatform;
    jdkVersion: string | null | undefined;
    setJdkVersion: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    includedJDKModules: string[];
    setIncludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
    excludedJDKModules: string[];
    setExcludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function CopyPasteModulesContainer(props: ICopyPasteModulesContainerProps): JSX.Element;
