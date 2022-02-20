import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { CountriesReducer } from "../../components/Props/context";
import { giveCountrie } from "../../components/api/api";
import { Preloader } from "../../components/Preloader/Preloader";
import { Info } from "../../components/Info/Info";
import { IoArrowBack } from "react-icons/io5";
import './Details.scss'

function Details() {
  const { setCountry, loading} = useContext(CountriesReducer);
  const navigate = useNavigate();
  const back = () => navigate(-1);
  const { name } = useParams();

  useEffect(() => {
    giveCountrie(name).then((data) => {
      setCountry(data[0]);
    });
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className='details'>
      <button className="back" onClick={back}>
        <IoArrowBack className="arrow"/>
        Back
      </button>
      <div className="info_wrapper">
        {loading ? <Preloader /> : <Info />}
      </div>
    </div>
  );
}

export { Details };
