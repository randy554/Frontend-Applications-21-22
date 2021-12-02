import { useState } from "react";
import "./Filter.css";

// Show filters on page
const Filter = () => {
  const [international, setInternational] = useState(null);
  const [netherlands, setNetherlands] = useState(null);

  const filterOnInternational = (event) => {
    console.log("International status:", international);
    console.log("International status again:", event.currentTarget.checked);
    setInternational(event.currentTarget.checked);

    if (event.currentTarget.checked === true) {
      console.log(" Internationl Checked is true");
      // Checkbox was just checked

      // // Keep only data element whose country is US
      // const filtered_data = data.filter((d) => {
      //   if (
      //     !(
      //       d.sourceName.includes(".nl") ||
      //       d.sourceName.includes("Tweakers") ||
      //       d.sourceName.includes("RTL Nieuws")
      //     )
      //   ) {
      //     return d.sourceName;
      //   }
      // });

      // update(filtered_data); // Update the chart with the filtered data
    } else {
      // Checkbox was just unchecked
      // update(data); // Update the chart with all the data we have
      console.log(" Internationl Checked is false");
    }
  };
  const filterOnNetherlands = (event) => {
    console.log("Netherlands status:", netherlands);
    console.log("Netherlands status again:", event.currentTarget.checked);
    setNetherlands(event.currentTarget.checked);

    if (event.currentTarget.checked === true) {
      console.log(" Netherlands Checked is true");
      // Checkbox was just checked

      // Keep only data element whose country is US
      // const filtered_data = data.filter((d) => {
      //   if (
      //     d.sourceName.includes(".nl") ||
      //     d.sourceName.includes("Tweakers") ||
      //     d.sourceName.includes("RTL Nieuws")
      //   ) {
      //     return d.sourceName;
      //   }
      // });

      // update(filtered_data); // Update the chart with the filtered data
    } else {
      // Checkbox was just unchecked
      // update(data); // Update the chart with all the data we have
      console.log(" Netherlands Checked is false");
    }
  };

  return (
    <div id="filterGroup">
      <strong>Filter:</strong>
      <label>
        <input
          type="checkbox"
          name="Netherlands"
          // value="1"
          id="netherlands"
          onChange={filterOnNetherlands}
        />
        The Netherlands
      </label>
      <label>
        <input
          type="checkbox"
          name="International"
          // value="2"
          id="international"
          onChange={filterOnInternational}
        />
        International
      </label>
    </div>
  );
};

export default Filter;
