import { createContext, useReducer } from 'react'
import { reducer } from './reducer'


export const CountriesReducer = createContext()

const initialState = {
  countries: [],
  loading: true,
  country: [],
}


export const ContextProvider = ({children}) => {

  const [value, dispatch] = useReducer(reducer, initialState)
   
  value.setCountries = (data) => {
    dispatch({type: 'SET_COUNTRIES', payload: data})
  }

  value.setCountry = (data) => {
    dispatch({type: 'SET_COUNTRY', payload: data})
  }
  
  return (
    <CountriesReducer.Provider value={value}>
      {children}
    </CountriesReducer.Provider>
  )
}
