import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithParameter = () => handleVisitedCountry(country);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "Purple" : "black" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={passWithParameter}>Mark Visited</button>
      <br /> <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? " I have visited" : "   I want ot visit"}
    </div>
  );
};

export default Country;
