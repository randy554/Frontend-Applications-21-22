import Title from "../../Title/Title";
import Filter from "../../Filter/Filter";
import Legend from "../../Legend/Legend";
import SvgBody from "../../SvgBody/SvgBody";
import { newsData } from "../../../data/newsData";

// Home page
const Home = () => {
  return (
    <>
      <Title />
      <Filter />
      <Legend />
      <SvgBody data={newsData} />
    </>
  );
};

export default Home;
