import { Container, List, ListItem, ListItemIcon, ListItemText, Paper, Radio, Typography } from '@material-ui/core';
import * as React from 'react';
import INTENTIONS, { IIntention } from '../intentions';

export interface IIntentionContainerProps {
  maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  intention: IIntention;
  setIntention: React.Dispatch<React.SetStateAction<IIntention>>;
}

export default function IntentionContainer(props: IIntentionContainerProps) {
  const handleListItemClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    props.setIntention(INTENTIONS[index]);
  };

  const listItems: JSX.Element[] = INTENTIONS.map((intention: IIntention, index: number) => {
    return (
      <ListItem
        key={index}
        role={undefined}
        dense
        button
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, index)}
      >
        <ListItemIcon>
          <Radio edge="start" checked={props.intention.name === intention.name} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={intention.display} />
      </ListItem>
    );
  });

  return (
    <Container maxWidth={props.maxWidth} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Paper style={{ padding: '2rem' }}>
        <Typography variant="h4" style={{ marginBottom: '1rem' }}>
          What do you need?
        </Typography>
        <List>{listItems}</List>
      </Paper>
    </Container>
  );
}
