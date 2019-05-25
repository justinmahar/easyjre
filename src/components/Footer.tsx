import { Container, Link } from "@material-ui/core";
import * as React from "react";

export interface IFooterProps {}

const linkStyle = {
  fontWeight: 500
};

export default function Footer(props: IFooterProps) {
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "3rem",
        background: "#555555",
        color: "white"
      }}
    >
      <Container
        maxWidth="lg"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <p style={{ textAlign: "center" }}>
          Copyright © 2019{" "}
          <Link
            href="https://github.com/justinmahar"
            color="inherit"
            style={linkStyle}
          >
            Justin Mahar
          </Link>{" "}
          • MIT License •{" "}
          <Link
            href="https://github.com/justinmahar/easyjre"
            color="inherit"
            style={linkStyle}
          >
            GitHub
          </Link>{" "}
          • Coffee Icon By{" "}
          <Link
            href="https://feathericons.com/"
            color="inherit"
            style={linkStyle}
          >
            FeatherIcon
          </Link>
        </p>
      </Container>
    </div>
  );
}
