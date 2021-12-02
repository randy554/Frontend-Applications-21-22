import { useState, useEffect } from "react";
import newsData from "../data/newsData.json";

// Get the news data
const GetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(newsData);
  }, []);

  return data;
};

export default GetData;
