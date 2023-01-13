import { Box, Icon, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { CHOOSE_JDK_MODULES, IIntention } from '../intentions';

export interface ITransferModulesPaperProps {
  intention: IIntention;
  right: string[];
  setRight: React.Dispatch<React.SetStateAction<string[]>>;
  left: string[];
  setLeft: React.Dispatch<React.SetStateAction<string[]>>;
}

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly string[], b: readonly string[]) {
  return [...a, ...not(b, a)];
}

export default function TransferModulesPaper(props: ITransferModulesPaperProps) {
  // const classes = useStyles();
  const [checked, setChecked] = React.useState<readonly string[]>([]);
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

  const numberOfChecked = (items: string[]) => intersection(checked, items).length;

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
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: string) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  const hasModules = props.right.length + props.left.length > 0;

  return (
    <Paper
      style={{
        padding: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Typography variant="h6" style={{ marginBottom: '1rem' }}>
        JDK Modules
      </Typography>
      {!hasModules && (
        <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Box mt={1.5} mr={2}>
            <Icon color="secondary">warning</Icon>
          </Box>
          <p>
            Paste your JDK modules above to customize which modules are included in the JRE.{' '}
            {props.intention !== CHOOSE_JDK_MODULES && (
              <span>Ignore this if you'd like to add them manually below.</span>
            )}
          </p>
        </Box>
      )}
      {hasModules && (
        <>
          <p>
            The JDK comes with many modules which contain the JDK core classes. Below, all modules that aren't prefixed
            with <code>jdk.</code> have been included in the JRE. This will get you up and running quickly without
            needing to use an entire JDK. From there, you can pick and choose the JDK modules your project depends on.
          </p>
          <p>
            Feel free to include or exclude any modules you might or might not need. For instance, you can use the{' '}
            <code>jdeps</code> command on your Java classes to narrow down which modules you actually need to include.
          </p>
          {props.intention !== CHOOSE_JDK_MODULES && (
            <p>
              See the Manually Specifed Modules section below for adding additional modules (such as custom ones, or
              manually specifying JDK ones) to the JRE.
            </p>
          )}
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList('Excluded From JRE', left)}</Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  <Icon>chevron_right</Icon>
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  <Icon>chevron_left</Icon>
                </Button>
              </Grid>
            </Grid>
            <Grid item>{customList('Included In JRE', right)}</Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
}
