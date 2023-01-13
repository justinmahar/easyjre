import * as React from 'react';
export interface IMiscOptionsPaperProps {
    compressionLevel: number;
    setCompressionLevel: React.Dispatch<React.SetStateAction<number>>;
    headerFilesExcluded: boolean;
    setHeaderFilesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
    manPagesExcluded: boolean;
    setManPagesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
    bindServicesEnabled: boolean;
    setBindServicesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MiscOptionsPaper(props: IMiscOptionsPaperProps): JSX.Element;
