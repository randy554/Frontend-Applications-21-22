import { createContext, useState, useEffect } from "react";
import newsData from "../../data/newsAPIData.json";

const NewsArticleContext = createContext();

export const NewsArticleProvider = ({ children }) => {
  const [netherlands, setNetherlands] = useState(false);

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

  const isDutch = (d) =>
    d.sourceName.includes(".nl") ||
    d.sourceName.includes("Tweakers") ||
    d.sourceName.includes("RTL Nieuws");

  // Keep only data element whose country is US

  return (
    <NewsArticleContext.Provider
      value={{
        netherlands,
        setNetherlands,
        data,
        filteredData: data?.filter((d) => {
          if (netherlands) {
            return isDutch(d);
          }

          return true;
        }),
      }}
    >
      {children}
    </NewsArticleContext.Provider>
  );
};

export default NewsArticleContext;
