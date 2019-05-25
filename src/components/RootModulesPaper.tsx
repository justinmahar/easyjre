import { Box, Icon, Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { CHOOSE_JDK_MODULES, IIntention } from "../intentions";

export interface IRootModulesPaperProps {
  intention: IIntention;
  right: string[];
  setRight: React.Dispatch<React.SetStateAction<string[]>>;
  left: string[];
  setLeft: React.Dispatch<React.SetStateAction<string[]>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto"
  },
  cardHeader: {
    padding: theme.spacing(1, 2)
  },
  list: {
    width: 240,
    height: 276,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(0.5, 0)
  }
}));

function not(a: string[], b: string[]) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a: string[], b: string[]) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a: string[], b: string[]) {
  return [...a, ...not(b, a)];
}

export default function RootModulesPaper(props: IRootModulesPaperProps) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<string[]>([]);
  const [left, setLeft] = [props.left, props.setLeft];
  const [right, setRight] = [props.right, props.setRight];

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: string[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: string[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked).sort());
    setLeft(not(left, leftChecked).sort());
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked).sort());
    setRight(not(right, rightChecked).sort());
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: string[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense>
        {items.map((value: string) => (
          <ListItem
            key={value}
            role={undefined}
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItem>
        ))}
        <ListItem />
      </List>
    </Card>
  );

  const hasModules = props.right.length + props.left.length > 0;

  return (
    <Paper
      style={{
        padding: "2rem",
        marginTop: "1rem",
        marginBottom: "1rem"
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        JDK Root Modules
      </Typography>
      {!hasModules && (
        <Box style={{ display: "flex", alignItems: "flex-start" }}>
          <Box mt={1.5} mr={2}>
            <Icon color="secondary">warning</Icon>
          </Box>
          <p>
            Paste your JDK modules above to customize which root modules are
            included in the JRE.{" "}
            {props.intention !== CHOOSE_JDK_MODULES && (
              <span>Ignore this if you'd like to add them manually below.</span>
            )}
          </p>
        </Box>
      )}
      {hasModules && (
        <>
          <p>
            The JDK comes with many root modules which contain the JDK core
            classes. The modules prefixed with <code>jdk.</code> are typically
            not needed for a production JRE. Below, all non-JDK modules have
            been included in the JRE. This will get you up and running quickly
            without needing to use an entire JDK.
          </p>
          <p>
            Feel free to include or exclude any modules you might or might not
            need. For instance, you can use the <code>jdeps</code> command on
            your Java classes to narrow down which modules you actually need to
            include.
          </p>
          {props.intention !== CHOOSE_JDK_MODULES && (
            <p>
              See the Manually Specifed Modules section below for adding
              additional modules (such as custom ones, or manually specifying
              JDK ones) to the JRE.
            </p>
          )}
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
            className={classes.root}
          >
            <Grid item>{customList("Excluded From JRE", left)}</Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  <Icon>chevron_right</Icon>
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  <Icon>chevron_left</Icon>
                </Button>
              </Grid>
            </Grid>
            <Grid item>{customList("Included In JRE", right)}</Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
}
