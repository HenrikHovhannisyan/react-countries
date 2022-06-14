export const singleCountry = (country) => {
    return fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json());
}