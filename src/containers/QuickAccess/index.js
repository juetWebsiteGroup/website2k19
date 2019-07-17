import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export const QuickAccess = props => {
  return (
    <div className='QuickAccessContainer'>
      <h3>{props.Title}</h3>
      <div className='line' />
      <ul>
        {props.linkItems.map(linksObj => {
          switch (linksObj.type) {
            case "pageLinks":
              return (
                <li key={linksObj.id}>
                  <Link to={linksObj.link}>{linksObj.title}</Link>
                </li>
              );
            default:
              return (
                <li key={linksObj.id}>
                  <a href={linksObj.link}>{linksObj.title}</a>
                </li>
              );
          }
        })}
      </ul>
    </div>
  );
};
