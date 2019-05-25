import * as React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

export interface ITopBarProps {}

export default function TopBar(props: ITopBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
          <span style={{ marginLeft: "1rem" }}>EasyJRE</span>
        </Typography>
        <div style={{ marginRight: "0.35rem" }}>
          <a
            className="github-button"
            href="https://github.com/justinmahar/easyjre/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="false"
            aria-label="Fork justinmahar/easyjre on GitHub"
          >
            Fork
          </a>
        </div>
        <div>
          <a
            className="github-button"
            href="https://github.com/justinmahar/easyjre"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star justinmahar/easyjre on GitHub"
          >
            Star
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
}
