import Title from "../../Title/Title";
import Filter from "../../Filter/Filter";
import Legend, { legendItems } from "../../Legend/Legend";
import SvgBody from "../../SvgBody/SvgBody";
// import Visualization from "../../Visualization";
import BarChart from "../../Barchart";
import { dataByYear } from "../../data";

// Home page
const Home = () => {
  return (
    <>
      <Title />
      <Filter />
      <Legend listItem={legendItems} />
      <SvgBody />
      {/* <Visualization /> */}
      <BarChart data={dataByYear} />
    </>
  );
};

export default Home;
