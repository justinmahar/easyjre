import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import VENDORS, { IVendor } from '../vendors';

export interface IDownloadJDKContainerProps {
  maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
}

export default function DownloadJDKContainer(props: IDownloadJDKContainerProps) {
  const [selectedVendorIndex, setSelectedVendorIndex] = React.useState(0);

  const handleMenuItemClick = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    const value: any = e.target.value;
    if (typeof value !== 'undefined') {
      setSelectedVendorIndex(parseInt(value));
    }
  };

  const selectItems: JSX.Element[] = VENDORS.map((vendor: IVendor, index: number) => {
    return (
      <MenuItem value={index} key={index}>
        {vendor.organization} {vendor.product}
      </MenuItem>
    );
  });

  const selectedVendor = VENDORS[selectedVendorIndex];

  return (
    <Container maxWidth={props.maxWidth} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Paper style={{ padding: '2rem' }}>
        <Typography variant="h6">Download JDK</Typography>
        <p>If you haven't already, select, download, and unpack your desired JDK (9 or greater):</p>
        <FormControl fullWidth style={{ marginTop: '0.5rem' }}>
          <InputLabel htmlFor="vendor">JDK To Download</InputLabel>
          <Select
            value={selectedVendorIndex}
            inputProps={{
              name: 'vendor',
              id: 'vendor',
            }}
            onChange={(
              e: React.ChangeEvent<{
                name?: string | undefined;
                value: unknown;
              }>,
            ) => handleMenuItemClick(e)}
          >
            {selectItems}
          </Select>
        </FormControl>
        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '0.3rem', marginTop: '1.5rem' }}
            href={selectedVendor.jdkDownloadLink}
            target="_new"
          >
            Download JDK &raquo;
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
