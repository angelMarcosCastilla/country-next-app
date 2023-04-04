import { Country } from "../types/country"

interface ApiI {
  allCountry: () => Promise<Country[]>
  getCountryByName: (name: string) => Promise<Country>
}


export const api: ApiI = {
  allCountry: async () => {
    // detemos 10 segundos para ver el loading
    // vamos a probar que se genere los estaticos
    //await new Promise((resolve) => setTimeout(resolve, 10000)) 
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    return data
  },

  getCountryByName: async (code: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await res.json()
    return data[0]
  }
}