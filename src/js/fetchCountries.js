 export default class ApiService {
   constructor() {}

   fetchCountries(name) {
    const queryString = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
   return fetch(queryString).then(r => 
    {
      if (!resp.ok) {
        throw new Error(response.statusText)
    }
    }
    r.json());
}
}

