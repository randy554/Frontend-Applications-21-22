import { useState, useEffect } from "react";
import newsData from "../data/newsData.json";

// Get the news data
const GetData = () => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch(
  //       "https://raw.githubusercontent.com/randy554/Frontend-data-21-22/dev/js/newsAPI.json"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  useEffect(() => {
    setData(newsData);
  }, []);

  return data;
};

export default GetData;
