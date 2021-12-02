import { useState, useEffect } from "react";
import newsData from "../data/newsData.json";

// Used update function as base https://codesandbox.io/s/hva-demo-dag3-tnn6g?file=/src/hooks/useD3.js
// Get the news data
const GetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(newsData);
  }, []);

  return data;
};

export default GetData;
