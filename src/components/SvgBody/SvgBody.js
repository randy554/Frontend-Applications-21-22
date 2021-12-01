import React from "react";
import useD3 from "../useD3";
import * as d3 from "d3";

// Create svg element
const SvgBody = ({ data }) => {
  const ref = useD3(
    (svg) => {
      console.log("Wat is die data binnen SvgBody?", data);
      console.log("Wat is die svg binnen SvgBody?", svg);

      const cscale = d3.scaleOrdinal().range(d3.schemePaired);
      const xscale = d3.scaleSqrt().range([0, 50]);

      // Group used to enforce margin
      const g = svg.append("g").attr("transform", `translate(20,200)`);

      //update the scales
      xscale.domain([0, d3.max(data, (d) => d.articleCount)]);
      cscale.domain(data.map((d) => d.sourceName));
    },
    [data.length]
  );

  return <svg ref={ref}></svg>;
};

export default SvgBody;
