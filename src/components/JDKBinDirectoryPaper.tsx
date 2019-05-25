import * as React from "react";
import {
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Icon
} from "@material-ui/core";

export interface IJdkBinPathPaperProps {
  jdkBinPath: string;
  setJdkBinPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function JdkBinPathPaper(props: IJdkBinPathPaperProps) {
  return (
    <Paper
      style={{
        padding: "2rem",
        marginTop: "1rem",
        marginBottom: "1rem"
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        JDK Bin Path
      </Typography>
      <p>
        Specify the path to the <code>bin</code> folder of your JDK. You can use
        an environment variable here, but it's safer to execute{" "}
        <code>jlink</code> directly from the JDK <code>bin</code> to prevent
        using an incorrect JDK that might be on your <code>PATH</code>.
      </p>
      <p>
        The safest way is to leave this as <code>.</code>, navigate to the{" "}
        <code>bin</code> directory, and run the <code>jlink</code> command
        copied from below. If you change this, be sure to also change the Module
        Path above.
      </p>
      <div>
        <TextField
          variant="standard"
          label="JDK Bin Path"
          type="text"
          value={props.jdkBinPath}
          fullWidth
          helperText="Can be relative or absolute."
          onClick={(e: any) => {
            if (!!e.target.select) {
              e.target.select();
            }
          }}
          onChange={(e) => {
            props.setJdkBinPath(e.target.value);
          }}
          placeholder="Enter the path to the bin folder"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Clear" onClick={() => {props.setJdkBinPath("")}}>
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
