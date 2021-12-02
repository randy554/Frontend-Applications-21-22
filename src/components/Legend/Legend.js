import "./Legend.css";
import { newsData } from "../../data/newsData";

// Create object to iterate over list items
export const legendItems = newsData.map((legend, i) => ({
  id: i,
  legendName: legend.sourceName,
  legendColor: legend.backgroundColor,
}));

// Show legend on page
const Legend = (props) => {
  console.log("Wat zit in props:", props.listItem);
  return (
    <div id="legend">
      {props.listItem.map((item) => (
        <div key={item.id} className="legendBox">
          <span
            className="legendColor"
            style={{ backgroundColor: item.legendColor }}
          >
            <span className="legendText"> {item.legendName}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
