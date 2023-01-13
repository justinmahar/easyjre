import * as React from 'react';
import { IPlatform } from '../platforms';
export interface IChoosePlatformContainerProps {
    maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
    platform: IPlatform;
    setPlatform: React.Dispatch<React.SetStateAction<IPlatform>>;
}
export default function ChoosePlatformContainer(props: IChoosePlatformContainerProps): JSX.Element;
