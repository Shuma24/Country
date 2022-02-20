function reducer (state, {type, payload}){
  
  switch(type){
    case 'SET_COUNTRIES':
      return{
        ...state,
        countries: payload || [],
        loading: false,
      }
    
    case 'SET_COUNTRY':
      return {
        ...state,
        country: payload || [],
        loading: false,
      }

    default:
      return state
  }
}

export { reducer }