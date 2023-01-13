import * as React from 'react';
export interface IModulePathPaperProps {
    modulePath: string;
    setModulePath: React.Dispatch<React.SetStateAction<string>>;
}
export default function ModulePathPaper(props: IModulePathPaperProps): JSX.Element;
