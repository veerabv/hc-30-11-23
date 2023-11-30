import React from "react";
import "../Assets/css/AlphabetFilter.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const AlphabetFilter = ({
  alphabets,
  setSelectedAlphabet,
  selectedAlphabet,
}) => {
  return (
    <>
      <div className="search-result__content">
        <div
          className="alphabet-search"
          style={{ margin: "auto", width: "1200px" }}
        >
          <Card variant="outlined" className="card-listing__bottomHandler">
            <CardContent>
              <button
                onClick={() => setSelectedAlphabet("All")}
                className={selectedAlphabet === "All" ? "active" : ""}
              >
                ALL
              </button>
              {alphabets.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedAlphabet(letter)}
                  className={selectedAlphabet === letter ? "active" : ""}
                >
                  {letter}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AlphabetFilter;
