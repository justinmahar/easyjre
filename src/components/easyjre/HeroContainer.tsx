import * as React from 'react';
import { Container, Typography } from '@mui/material';

export interface IHeroContainerProps {
  maxWidth: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
}

export default function HeroContainer(props: IHeroContainerProps) {
  return (
    <div className="easyjre-header" style={{ marginBottom: '1rem' }}>
      <Container
        maxWidth={props.maxWidth}
        style={{
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          EasyJRE
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Use EasyJRE to create an OpenJDK JRE easily with <code>jlink</code>!{' '}
          <span style={{ color: '#000000' }}>🔥</span>
        </Typography>
      </Container>
    </div>
  );
}
