
const giveCountries = async () => {
  const response = await fetch('https://restcountries.com/v2/all?fields=name,capital,flag,region,population')
  return await response.json()
}


const giveCountrie = async (name) => {
  const response = await fetch(`https://restcountries.com/v2/name/${name}/`)
  return await response.json()
}


const giveCodesCountries = async (codes) => {
  const response = await fetch(`https://restcountries.com/v2/alpha?codes=${codes}`)
  return await response.json()
}

export { giveCountries, giveCountrie, giveCodesCountries }