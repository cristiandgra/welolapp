import React from "react";
import { ChampList } from "./ChampList";

export const ChampScreen = () => {
  return (
    <div className="champscreen">
      <h1 style={{ color: "#f7c948" }}>Champions</h1>
      <div className="site-layout-background-right">
        <div className="search">
          <input placeholder="Find your champ" className="inputsearch" />
          <i class="fa fa-search"></i>
        </div>
      </div>
      <ChampList />
    </div>
  );
};
