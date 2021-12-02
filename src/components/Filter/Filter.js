import { useContext } from "react";
import "./Filter.css";
import NewsArticleContext from "../providers/newsArticleProvider";

// Show filters on page
const Filter = () => {
  const { setNetherlands } = useContext(NewsArticleContext);

  const filterOnNetherlands = (event) => {
    setNetherlands(event.currentTarget.checked);
  };

  return (
    <div id="filterGroup">
      <strong>Filter:</strong>
      <label>
        <input
          type="checkbox"
          name="Netherlands"
          id="netherlands"
          onChange={filterOnNetherlands}
        />
        Dutch publishers only
      </label>
    </div>
  );
};

export default Filter;
