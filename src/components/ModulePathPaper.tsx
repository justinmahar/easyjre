import * as React from "react";
import {
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Icon
} from "@material-ui/core";

export interface IModulePathPaperProps {
  modulePath: string;
  setModulePath: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModulePathPaper(props: IModulePathPaperProps) {
  return (
    <Paper
      style={{
        padding: "2rem",
        marginTop: "1rem",
        marginBottom: "1rem"
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        Module Path
      </Typography>
      <p>
        The module path is a semicolon-separated list of paths where{" "}
        <code>jlink</code> will search for modules. They can be relative or
        absolute, and can use environment variables.
      </p>
      <p>
        The standard JDK modules are typically in the JDK directory{" "}
        <code>jmods</code>. If you run <code>jlink</code> from <code>bin</code>,
        then leaving this as <code>../jmods</code> will work just fine. You can
        optionally add your own module paths after that, separated by a
        semicolon.
      </p>

      <div>
        <TextField
          variant="standard"
          label="Module Path"
          type="text"
          value={props.modulePath}
          fullWidth
          helperText="Separate paths by semicolons."
          placeholder="Specify a path to your modules"
          onClick={(e: any) => {
            if (!!e.target.select) {
              e.target.select();
            }
          }}
          onChange={(e) => {
            props.setModulePath(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Clear" onClick={() => {props.setModulePath("")}}>
                  <Icon>close</Icon>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    </Paper>
  );
}
