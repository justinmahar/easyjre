import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Radio,
  Typography
} from "@material-ui/core";
import * as React from "react";
import PLATFORMS, { IPlatform } from "../platforms";

export interface IChoosePlatformContainerProps {
  maxWidth: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  platform: IPlatform;
  setPlatform: React.Dispatch<React.SetStateAction<IPlatform>>;
}

export default function ChoosePlatformContainer(
  props: IChoosePlatformContainerProps
) {
  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    props.setPlatform(PLATFORMS[index]);
  };

  const listItems: JSX.Element[] = PLATFORMS.map(
    (platform: IPlatform, index: number) => {
      return (
        <ListItem
          key={index}
          role={undefined}
          dense
          button
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleListItemClick(event, index)
          }
        >
          <ListItemIcon>
            <Radio
              edge="start"
              checked={props.platform.name === platform.name}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={platform.display} />
        </ListItem>
      );
    }
  );

  return (
    <Container
      maxWidth={props.maxWidth}
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Paper style={{ padding: "2rem" }}>
        <Typography variant="h6">Which platform are you using?</Typography>
        <List>{listItems}</List>
      </Paper>
    </Container>
  );
}
