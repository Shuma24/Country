import { useNavigate } from "react-router-dom";
import "./CountryItem.scss";


function CountryItem(props) {
  const { flag, name, capital, region, population } = props;

  const push  = useNavigate()
  
  return (
    <div className='card' onClick={() => push(`/country/${name}`)}>
      <img src={flag} alt={name} />
      <div className='card__body'>
        <div className='card__name'>{name}</div>
        <div className='card__population'>
          <strong>Population:</strong> {population.toLocaleString()}
        </div>
        <div className='card__region'>
          <strong>Region:</strong> {region}
        </div>
        <div className='card__capital'>
          <strong>Capital:</strong> {capital}
        </div>
      </div>
    </div>
  );
}

export { CountryItem };
