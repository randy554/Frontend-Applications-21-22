import "./Legend.css";
import React, { useContext } from "react";
import NewsArticleContext from "../providers/newsArticleProvider";

// Show legend on page
const Legend = () => {
  const { filteredData } = useContext(NewsArticleContext);

  return (
    <div id="legend">
      {filteredData !== undefined &&
        filteredData.map((item, id) => (
          <div key={id} className="legendBox">
            <span
              className="legendColor"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <span className="legendText"> {item.sourceName}</span>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Legend;
