import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Content(props) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div> Loading Coins </div>;
        }
        return <div> {props.children} </div>;
      }}
    </AppContext.Consumer>
  );
}
