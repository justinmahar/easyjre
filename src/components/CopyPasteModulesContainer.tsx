import {
  Box,
  Chip,
  Container,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import * as React from "react";
import { useSnackbar } from "notistack";
import { IPlatform, MAC_OS } from "../platforms";
import parseJDKModules from "../jdk-modules";

export interface ICopyPasteModulesContainerProps {
  maxWidth: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  platform: IPlatform;
  jdkVersion: string | null | undefined;
  setJdkVersion: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  includedJDKModules: string[];
  setIncludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
  excludedJDKModules: string[];
  setExcludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function CopyPasteModulesContainer(
  props: ICopyPasteModulesContainerProps
) {
  const { enqueueSnackbar } = useSnackbar();
  const [pastedModulesList, setPastedModulesList] = React.useState("");
  const [clipboardErrorOccurred, setClipboardErrorOccurred] = React.useState(
    false
  );

  const handleClickCopyListModulesCommand = () => {
    let commandTextarea: any = document.getElementById("list-modules-command");
    commandTextarea.select();
    document.execCommand("copy");
    enqueueSnackbar("✔️ Copied!");
  };

  const navigatorClipboardSupported =
    !clipboardErrorOccurred && !!navigator.clipboard;

  const parsePastedList = (text: string) => {
    const [jdkVersion, includedModules, excludedModules] = parseJDKModules(
      text
    );
    if (!!jdkVersion) {
      props.setJdkVersion(jdkVersion);
      props.setIncludedJDKModules(includedModules);
      props.setExcludedJDKModules(excludedModules);
      enqueueSnackbar(
        "✔️ Added " +
          (includedModules.length + excludedModules.length) +
          " modules for JDK " +
          jdkVersion
      );
    } else {
      enqueueSnackbar("❌️ Not a valid list of JDK modules.");
    }
  };

  const handleClickPaste = () => {
    if (navigatorClipboardSupported) {
      navigator.clipboard
        .readText()
        .then((text: string) => {
          parsePastedList(text);
        })
        .catch(err => {
          // This can happen if the user denies clipboard permissions:
          console.error("Could not copy text: ", err);
          setClipboardErrorOccurred(true);
          enqueueSnackbar("❌️ Something went wrong. Paste into the text input.");
        });
    } else {
      alert(
        "Sorry, your browser doesn't support pasting.\nSpecifically, there is no navigator.clipboard support.\n\nTry using Safari or Google Chrome."
      );
    }
  };

  const pasteKeystroke: string =
    props.platform.name === MAC_OS.name ? "⌘+V" : "Ctrl+V";

  return (
    <Container
      maxWidth={props.maxWidth}
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Paper style={{ padding: "2rem" }}>
        <Typography variant="h6">Copy your JDK module list:</Typography>
        <p>
          Copy a list of the available Java modules by running the following
          command in the JDK bin folder:
        </p>
        <div>
          <TextField
            variant="filled"
            label={props.platform.display + " command:"}
            type="text"
            id="list-modules-command"
            value={props.platform.listModulesCommand}
            fullWidth
            helperText="Be sure to run this in the Java JDK bin folder."
            onChange={e => e.preventDefault()}
            onClick={(e: any) => {
              if (!!e.target.select) {
                e.target.select();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>{props.platform.icon}</Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={() => {
                      handleClickCopyListModulesCommand();
                    }}
                  >
                    <Icon>assignment</Icon>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <Typography variant="h6" style={{ marginTop: "1.5rem" }}>
          Paste your JDK module list:
        </Typography>
        <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          After running the above command, paste the list of Java modules below:
        </p>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.3rem"
          }}
        >
          {!props.jdkVersion && (
            <>
              {navigatorClipboardSupported && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickPaste()}
                >
                  Paste
                </Button>
              )}
              {!navigatorClipboardSupported && (
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    variant="filled"
                    label="JDK Modules List"
                    type="text"
                    multiline
                    rows={1}
                    rowsMax={1}
                    id="list-modules-pasted"
                    value={pastedModulesList}
                    //fullWidth
                    helperText={`Paste your modules here using ${pasteKeystroke}.`}
                    onChange={e => {
                      if (e.target.value.length === 1) {
                        setPastedModulesList("");
                        enqueueSnackbar(
                          `❌️ Paste your modules here using ${pasteKeystroke}.`
                        );
                      } else {
                        parsePastedList(e.target.value);
                      }
                    }}
                  />
                </Box>
              )}
              <Chip
                icon={<Icon>not_interested</Icon>}
                label="No JDK Root Modules"
              />
            </>
          )}
          {props.jdkVersion && (
            <>
              <Chip
                icon={<Icon>check</Icon>}
                label={"JDK " + props.jdkVersion}
                onDelete={() => {
                  props.setJdkVersion(null);
                  props.setIncludedJDKModules([]);
                  props.setExcludedJDKModules([]);
                }}
                color="primary"
              />
              <Chip
                icon={<Icon>playlist_add_check</Icon>}
                label={
                  props.includedJDKModules.length +
                  props.excludedJDKModules.length +
                  " JDK Root Modules"
                }
                color="secondary"
                style={{ marginRight: ".5rem" }}
              />
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
