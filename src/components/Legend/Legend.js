import "./Legend.css";
const data = [
  {
    sourceName: "Nu.nl",
    articleCount: 15,
    backgroundColor: "#B2DF8A",
  },
  {
    sourceName: "Nos.nl",
    articleCount: 10,
    backgroundColor: "#33A02C",
  },
  {
    sourceName: "Tweakers.net",
    articleCount: 3,
    backgroundColor: "#FB9A99",
  },
  {
    sourceName: "Nrc.nl",
    articleCount: 14,
    backgroundColor: "#E31A1C",
  },
  {
    sourceName: "Telegraaf.nl",
    articleCount: 10,
    backgroundColor: "#FF7F00",
  },
  {
    sourceName: "Geenstijl.nl",
    articleCount: 1,
    backgroundColor: "#CAB2D6",
  },
  {
    sourceName: "RTL Nieuws",
    articleCount: 25,
    backgroundColor: "#6A3D9A",
  },
  {
    sourceName: "Ad.nl",
    articleCount: 11,
    backgroundColor: "#FFFF99",
  },
  {
    sourceName: "Demorgen.be",
    articleCount: 1,
    backgroundColor: "#B15928",
  },
  {
    sourceName: "Rtlboulevard.nl",
    articleCount: 2,
    backgroundColor: "#A6CEE3",
  },
  {
    sourceName: "Emerce.nl",
    articleCount: 1,
    backgroundColor: "#1F78B4",
  },
  {
    sourceName: "Parool.nl",
    articleCount: 5,
    backgroundColor: "#40E0D0",
  },
  {
    sourceName: "Bnr.nl",
    articleCount: 1,
    backgroundColor: "#DE3163",
  },
  {
    sourceName: "Onemorething.nl",
    articleCount: 1,
    backgroundColor: "#800080",
  },
];

// Create object to iterate over list items
export const legendItems = data.map((legend, i) => ({
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
