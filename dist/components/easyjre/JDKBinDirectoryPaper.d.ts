import * as React from 'react';
export interface IJdkBinPathPaperProps {
    jdkBinPath: string;
    setJdkBinPath: React.Dispatch<React.SetStateAction<string>>;
}
export default function JdkBinPathPaper(props: IJdkBinPathPaperProps): JSX.Element;
