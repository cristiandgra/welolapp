import React, { useEffect, useState } from "react";

export const ChampList = () => {
  const [champs, setChamps] = useState([]);
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((obj) => setChamps(Object.values(obj.data)));
  }, []);
  return (
    <div className="champcontainer">
      <div className="champlist">
        <ul>
          {champs.map((champ) => (
            <li>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ.id}.png`}
                alt="img"
                key={champ.id}
              />
              <h5
                style={{
                  fontSize: "16px",
                  color: "#ffffff",
                  alignItems: "center",
                }}
              >
                {champ.name}
              </h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
