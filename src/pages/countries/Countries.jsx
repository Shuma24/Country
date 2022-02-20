import { useEffect, useContext, useState } from 'react';
import { CountriesReducer } from '../../components/Props/context';
import { giveCountries } from '../../components/api/api';
import { Search } from '../../components/Search/Search';
import { Preloader } from '../../components/Preloader/Preloader';
import { CountryList } from './../../components/countrylist/CountryList';




function Countries () {
  
  const { loading, setCountries, countries} = useContext(CountriesReducer)

  useEffect(() => {
    giveCountries().then(data => {
      setCountries(data)
    })
    // eslint-disable-next-line
  }, [])
  
  const [filtredCountries, setFilteredCountries] = useState(countries);
  
  const handleSearch = (searchValue, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (searchValue) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);


  return (
    <>
    <Search handleSearch={handleSearch} />
    {
      loading ? <Preloader /> : <CountryList filtredCountries={filtredCountries} />
    }
    </>
    
  )
}

export { Countries }