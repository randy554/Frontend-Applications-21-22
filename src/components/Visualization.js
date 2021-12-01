// import * as d3 from "d3";
// import { useEffect, useRef } from "react";
// import GetData from "./getData";

// // Create visualization
// const Visualization = () => {
//   const d3Viz = useRef();
//   const newsData = GetData();

//   console.log("Wat is d3Viz:", d3Viz);
//   console.log("Wat is nieuws data: ", newsData);

//   // Build viz
//   useEffect(() => {
//     // Creates sources <svg> element
//     const svg = d3.select(d3Viz).append("svg");

//     // const cscale = d3.scaleOrdinal().range(d3.schemePaired);
//     // const xscale = d3.scaleSqrt().range([0, 50]);

//     // const cscale = d3.scaleOrdinal().range(d3.schemePaired);
//     // const xscale = d3.scaleSqrt().range([0, 50]);

//     // Group used to enforce margin
//     // const g = svg.append("g").attr("transform", `translate(20,200)`);
//   }, []);

//   return <p>hier komt d3 viz</p>;
// };

// export default Visualization;
