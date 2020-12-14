import React from "react";
import { ChampList } from "./ChampList";

export const ChampScreen = () => {
  return (
    <div className="champscreen">
      <h1 style={{ color: "#f7c948", padding: "15px" }}>Champions</h1>
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Find your champ"
            className="form-control"
            name="searchText"
            autoComplete="off"
          />
          <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
          >
            Search
          </button>
        </form>
      </div>
      <ChampList />
    </div>
  );
};
