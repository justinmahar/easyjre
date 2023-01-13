import * as React from 'react';
import { IIntention } from '../intentions';
export interface ITransferModulesPaperProps {
    intention: IIntention;
    right: string[];
    setRight: React.Dispatch<React.SetStateAction<string[]>>;
    left: string[];
    setLeft: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function TransferModulesPaper(props: ITransferModulesPaperProps): JSX.Element;
