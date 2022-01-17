import React, { Fragment } from "react";
import { rowTitle, tileContainer } from "../styles/AppStyles";
/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "@emotion/react";

const TileRow = (props: any) => {
  return (
    <Fragment>
      <div css={rowTitle}>
        <h3>{props.title}</h3>
      </div>
      <div css={tileContainer}>{props.children}</div>
    </Fragment>
  );
};

export default TileRow;
