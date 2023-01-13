import { Box, Button, Container, Icon, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { IPlatform, WINDOWS } from '../platforms';

export interface ICreateJREContainerProps {
  maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  platform: IPlatform;
  jdkVersion: string | null | undefined;
  includedJDKModules: string[];
  modulePath: string;
  manuallySpecifiedModules: string;
  jdkBinPath: string;
  compressionLevel: number;
  headerFilesExcluded: boolean;
  manPagesExcluded: boolean;
  bindServicesEnabled: boolean;
}

export default function CreateJREContainer(props: ICreateJREContainerProps) {
  const { enqueueSnackbar } = useSnackbar();

  const includedModulesString: string = props.includedJDKModules.join(',');
  const optionAdditionalModules: string = props.manuallySpecifiedModules.trim();

  let moduleString = '';

  if (includedModulesString !== '' || optionAdditionalModules !== '') {
    moduleString = ' --add-modules ';
    if (includedModulesString !== '') {
      moduleString += includedModulesString;
    }
    if (includedModulesString !== '' && optionAdditionalModules !== '') {
      moduleString += ',';
    }
    if (optionAdditionalModules !== '') {
      moduleString += optionAdditionalModules;
    }
  }

  let jreName = 'jre';

  const jdkVersion: string | null | undefined = props.jdkVersion;
  if (!!jdkVersion) {
    jreName += '-' + jdkVersion;
  }

  const jreFolderName: string = jreName.toLowerCase().replace(/[^a-z0-9.]/g, '-');

  const outputCommandString: string = '--output ' + jreFolderName;

  // Options
  const optionCompressionType: number = props.compressionLevel;
  const optionExcludeHeaderFiles: boolean = props.headerFilesExcluded;
  const optionExcludeManPages: boolean = props.manPagesExcluded;
  const optionBindServices: boolean = props.bindServicesEnabled;
  const optionJdkBinPath: string = props.jdkBinPath.trim();
  const optionModulePath: string = props.modulePath.trim();

  const compressionOptionString: string = ' --compress=' + optionCompressionType;

  let excludeHeaderFilesOptionString = '';
  if (optionExcludeHeaderFiles) {
    excludeHeaderFilesOptionString = ' --no-header-files';
  }

  let excludeManPagesOptionString = '';
  if (optionExcludeManPages) {
    excludeManPagesOptionString = ' --no-man-pages';
  }

  let bindServicesOptionString = '';
  if (optionBindServices) {
    bindServicesOptionString = ' --bind-services';
  }

  let modulePathOptionString = '';
  if (optionModulePath !== '') {
    modulePathOptionString = ' --module-path ' + optionModulePath;
  }

  const slash: string = props.platform.name === WINDOWS.name ? '\\' : '/';
  const jlinkCommand: string =
    optionJdkBinPath +
    (optionJdkBinPath ? slash : '') +
    'jlink ' +
    outputCommandString +
    compressionOptionString +
    excludeHeaderFilesOptionString +
    excludeManPagesOptionString +
    bindServicesOptionString +
    modulePathOptionString +
    moduleString;

  const handleClickCopyJlinkCommand = () => {
    const commandTextarea: any = document.getElementById('jlink-command');
    commandTextarea.select();
    document.execCommand('copy');
    enqueueSnackbar('✅ Copied!');
  };

  return (
    <Container maxWidth={props.maxWidth} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
        style={{ marginTop: '2rem' }}
      >
        Create Your JRE
      </Typography>
      <Paper style={{ padding: '2rem' }}>
        <Typography variant="h6" style={{ marginBottom: '1rem' }}>
          Run <code>jlink</code> To Create Your JRE
        </Typography>

        {!moduleString && (
          <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box mt={1.5} mr={2}>
              <Icon color="secondary">warning</Icon>
            </Box>
            <p>You have no modules. Add some modules using the sections above.</p>
          </Box>
        )}
        {moduleString && (
          <>
            <p>
              Copy and run the <code>jlink</code> command below
              {props.jdkBinPath === '.' && (
                <span>
                  {' '}
                  in the <code>bin</code> directory of the JDK
                </span>
              )}
              :
            </p>

            <div>
              <TextField
                variant="filled"
                label={props.platform.display + ' command:'}
                type="text"
                id="jlink-command"
                multiline={true}
                value={jlinkCommand}
                fullWidth
                helperText={
                  (props.jdkBinPath === '.' ? 'Run this in bin. ' : '') +
                  'This creates your ' +
                  jreFolderName +
                  ' directory. Be sure you have the proper write permissions!'
                }
                onChange={(e) => e.preventDefault()}
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
                          handleClickCopyJlinkCommand();
                        }}
                      >
                        <Icon>assignment</Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleClickCopyJlinkCommand();
                }}
              >
                Copy
              </Button>
            </Box>

            <Typography variant="h5" align="center" color="textPrimary" gutterBottom style={{ marginTop: '2rem' }}>
              Your JRE will be created in the <code>{jreFolderName}</code> directory. Enjoy! 🔥
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
}
