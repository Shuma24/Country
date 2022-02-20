import { useContext, useEffect, useState } from "react";
import { CountriesReducer } from "../../components/Props/context";
import "./Info.scss";
import { giveCodesCountries } from "./../api/api";
import { useNavigate } from "react-router-dom";

function Info() {
  const { country = [] } = useContext(CountriesReducer);
  const [border, setBorder] = useState([]);
  const push = useNavigate();

  useEffect(() => {
    if (country.borders) {
      giveCodesCountries(country.borders).then((data) => {
        setBorder(data.map((el) => el.name));
      });

      // eslint-disable-next-line
    } else null;
  }, [country.borders]);

  return (
    <div className='info'>
      <div className='info__container'>
        <div className='info__img'>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className='info__first-column'>
          <span className='info__name'>{country.name}</span>
          <span className='info__nativeName'>
            <b>Native Name</b> :{" "}
            <span className='nativeName'>{country.nativeName}</span>
          </span>
          <span className='info__population'>
            <b>Population</b> : {country.population}
          </span>
          <span className='info__region'>
            <b>Region</b> : <span className='region'>{country.region}</span>
          </span>
          <span className='info__subregion'>
            <b>Sub Region</b> :{" "}
            <span className='subregion'>{country.subregion}</span>
          </span>
          <span className='info__capital'>
            <b>Capital</b> : <span className='capital'>{country.capital}</span>
          </span>
          <span className='info__border'>
            <b>Border Countries</b> :{" "}
            <span className='borderds'>
              {border.length ? (
                border.map((el) => (
                  <button
                    className='btn-border'
                    key={el}
                    onClick={() => push(`/country/${el}`)}>
                    {el}
                  </button>
                ))
              ) : (
                <span>No border Country</span>
              )}
            </span>
          </span>
        </div>
        <div className='info__second-column'>
          <span className='info__domin'>
            <b>Top Level Domain</b> :{" "}
            {country.topLevelDomain ? (
              country.topLevelDomain.map((dom) => <span key={dom}>{dom}</span>)
            ) : (
              <span>No info</span>
            )}
          </span>
          <span className='info__curr'>
            <b>Currencies</b> :{" "}
            {country.currencies ? (
              country.currencies.map((с) => (
                <span className='carr' key={с.code}>
                  {с.name}
                </span>
              ))
            ) : (
              <span>No info about this</span>
            )}
          </span>
          <span className='info__lang'>
            <b>Languages</b> :{" "}
            <span className='lang'>
              {country.languages ? (
                country.languages.map((l) => (
                  <span key={l.name} className='lang__item'>
                    {l.name}
                  </span>
                ))
              ) : (
                <span>no info</span>
              )}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export { Info };
