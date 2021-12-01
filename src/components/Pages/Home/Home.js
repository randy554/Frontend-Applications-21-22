import Title from "../../Title/Title";
import Filter from "../../Filter/Filter";
import Legend, { legendItems } from "../../Legend/Legend";
import SvgBody from "../../SvgBody/SvgBody";

// Home page
const Home = () => {
  return (
    <>
      <Title />
      <Filter />
      <Legend listItem={legendItems} />
      <SvgBody />
    </>
  );
};

export default Home;
