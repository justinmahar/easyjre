import * as React from "react";
import { Container, Typography } from "@material-ui/core";

export interface IHeroContainerProps {
  maxWidth: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
}

export default function HeroContainer(props: IHeroContainerProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Container
        maxWidth={props.maxWidth}
        style={{
          textAlign: "center",
          marginTop: "1rem"
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          EasyJRE
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Use EasyJRE to create an OpenJDK JRE easily with <code>jlink</code>!
        </Typography>
        <Typography>
          Starting with JDK 9 and up, Java classes are packaged into modules,
          and standard JREs are no longer bundled with Java JDKs. You can use
          this tool to easily create a JRE from any JDK.{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </Typography>
      </Container>
    </div>
  );
}
