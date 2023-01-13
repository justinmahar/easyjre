import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import * as React from 'react';

export interface IMiscOptionsPaperProps {
  compressionLevel: number;
  setCompressionLevel: React.Dispatch<React.SetStateAction<number>>;
  headerFilesExcluded: boolean;
  setHeaderFilesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
  manPagesExcluded: boolean;
  setManPagesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
  bindServicesEnabled: boolean;
  setBindServicesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MiscOptionsPaper(props: IMiscOptionsPaperProps) {
  return (
    <Paper
      style={{
        padding: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Typography variant="h6" style={{ marginBottom: '1rem' }}>
        Other Options
      </Typography>
      <Typography variant="subtitle2">Compression</Typography>
      <p>
        Choose the level of compression. ZIP compression offers a significant reduction in size with a small hit to
        class loading performance.
      </p>
      <div>
        <FormControl fullWidth>
          <InputLabel htmlFor="age-simple" style={{ paddingLeft: 2, paddingRight: 2, background: 'white' }}>
            Compression Level
          </InputLabel>
          <Select
            value={props.compressionLevel}
            onChange={(e) => props.setCompressionLevel(parseInt(e.target.value + ''))}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={0}>No compression</MenuItem>
            <MenuItem value={1}>Constant string sharing</MenuItem>
            <MenuItem value={2}>ZIP</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Divider style={{ marginTop: '2rem', marginBottom: '1rem' }} />
      <Typography variant="subtitle2" style={{ marginTop: '1.5rem' }}>
        Header Files
      </Typography>
      <p>Whether or not to exclude header files from the JRE.</p>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.headerFilesExcluded}
              onChange={(e) => props.setHeaderFilesExcluded(e.target.checked)}
            />
          }
          label="Exclude Header Files"
        />
      </div>
      <Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} />
      <Typography variant="subtitle2" style={{ marginTop: '1.5rem' }}>
        Man Pages
      </Typography>
      <p>Whether or not to exclude man pages from the JRE.</p>
      <div>
        <FormControlLabel
          control={
            <Checkbox checked={props.manPagesExcluded} onChange={(e) => props.setManPagesExcluded(e.target.checked)} />
          }
          label="Exclude Man Pages"
        />
      </div>
      <Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} />
      <Typography variant="subtitle2" style={{ marginTop: '1.5rem' }}>
        Bind Services
      </Typography>
      <p>Whether or not to link service provider modules and their dependencies.</p>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.bindServicesEnabled}
              onChange={(e) => props.setBindServicesEnabled(e.target.checked)}
            />
          }
          label="Bind Services"
        />
      </div>
    </Paper>
  );
}
