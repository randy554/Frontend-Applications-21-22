import React, { useContext } from "react";
import useD3 from "../../hooks/useD3";
import * as d3 from "d3";
import centerCircleText from "../../helpers/positionText";
import "./SvgBody.css";
import NewsArticleContext from "../providers/newsArticleProvider";

// Create svg element
const SvgBody = () => {
  const { filteredData } = useContext(NewsArticleContext);
  const data = filteredData;

  const ref = useD3(
    (svg) => {
      if (!data) {
        return;
      }

      // Remove previous group element
      svg.selectAll("g").remove();
      console.log("Binnen SvgBody");

      const cscale = d3.scaleOrdinal().range(d3.schemePaired);
      const xscale = d3.scaleSqrt().range([0, 50]);

      // Group used to enforce margin
      const g = svg.append("g").attr("transform", `translate(20,200)`);

      //update the scales
      xscale.domain([0, d3.max(data, (d) => d.articleCount)]);
      cscale.domain(data.map((d) => d.sourceName));

      // Render the chart with new data
      // DATA JOIN use the key argument for ensurign that the same DOM element is bound to the same data-item
      try {
        // eslint-disable-next-line
        const circles = g
          .selectAll("g")
          .data(data, (d) => d.sourceName)
          .join(
            // ENTER
            // new elements
            (enter) => {
              let g = enter
                .append("g")
                .attr("transform", (d, i) => `translate(${30 + i * 60},0)`);

              // eslint-disable-next-line
              let circles = g
                .append("circle")
                .transition()
                .attr("r", (d) => {
                  return xscale(d.articleCount);
                })
                .duration(1000)
                .style("fill", cscale);

              // eslint-disable-next-line
              let text = g
                .append("text")
                .text((d) => {
                  return d.sourceName;
                })
                .attr("y", (d) => xscale(d.articleCount) + 20)
                .attr("x", (d) => centerCircleText(d.sourceName.length));

              // eslint-disable-next-line
              let title = g
                .append("title") // eslint-disable-next-line
                .text((d) => d.sourceName + " " + `(${d.articleCount})`);
              return enter;
            },
            // UPDATE
            // update existing elements
            (update) => update,
            // EXIT
            // elements that aren't associated with data
            (exit) => exit.remove()
          );
      } catch (e) {}
    },
    [data]
  );

  return <svg ref={ref}></svg>;
};

export default SvgBody;
