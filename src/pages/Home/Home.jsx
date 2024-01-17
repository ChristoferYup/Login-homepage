import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";

const Home = ({filteredApiNew}) => {
  return (
    <>
      
      <Carru />
      <Categoria />
      <Novedades items={filteredApiNew} />
      <Slider />
    </>
  );
};

export default Home;
