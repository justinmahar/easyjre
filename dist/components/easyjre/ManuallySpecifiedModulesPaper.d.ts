import * as React from 'react';
export interface IManuallySpecifiedModulesPaperProps {
    manuallySpecifiedModules: string;
    setManuallySpecifiedModules: React.Dispatch<React.SetStateAction<string>>;
}
export default function ManuallySpecifiedModulesPaper(props: IManuallySpecifiedModulesPaperProps): JSX.Element;
