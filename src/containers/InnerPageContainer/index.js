import React from "react";

import "./styles.scss";

export const InnerPageContainer = props => {
  return <div className={"InnerPageMain"}>{props.children}</div>;
};
