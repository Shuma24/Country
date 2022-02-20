import { useContext } from 'react';
import { CountriesReducer } from '../../components/Props/context';
import { CountryItem } from './../countryitem/CountryItem';
import './CountryList.scss'
 
function CountryList({filtredCountries}) {
  
  const { countries = [] } = useContext(CountriesReducer)
  
  if(!countries.length){
    return <h3>Error....</h3>
 }

  return (
    <div className="list">
      {filtredCountries.map(item => <CountryItem key={item.name} {...item}/>)}
    </div>
  )
}

export { CountryList }