import * as React from 'react';
import { Paper, Typography, InputAdornment, IconButton, Icon, TextField } from '@mui/material';

export interface IManuallySpecifiedModulesPaperProps {
  manuallySpecifiedModules: string;
  setManuallySpecifiedModules: React.Dispatch<React.SetStateAction<string>>;
}

export default function ManuallySpecifiedModulesPaper(props: IManuallySpecifiedModulesPaperProps) {
  return (
    <Paper
      style={{
        padding: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Typography variant="h6" style={{ marginBottom: '1rem' }}>
        Manually Specifed Modules
      </Typography>
      <p>
        Specify any modules you'd like added here, such as your custom ones. Comma-separate the values and don't use
        spaces.
      </p>
      <p>
        You can specify JDK modules (such as <code>java.se</code>) here manually if you'd like, too.
      </p>
      <div>
        <TextField
          variant="standard"
          label="Manually Specified Modules"
          type="text"
          fullWidth
          value={props.manuallySpecifiedModules}
          helperText="Separate modules by commas. They should be found in one or more of your module paths (see previous section)"
          onClick={(e: any) => {
            if (!!e.target.select) {
              e.target.select();
            }
          }}
          onChange={(e) => {
            props.setManuallySpecifiedModules(e.target.value);
          }}
          placeholder="my.mod,other.mod,etc"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Clear"
                  onClick={() => {
                    props.setManuallySpecifiedModules('');
                  }}
                >
                  <Icon>close</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Paper>
  );
}
