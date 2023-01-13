import * as React from 'react';
import { IIntention } from '../intentions';
export interface IIntentionContainerProps {
    maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
    intention: IIntention;
    setIntention: React.Dispatch<React.SetStateAction<IIntention>>;
}
export default function IntentionContainer(props: IIntentionContainerProps): JSX.Element;
