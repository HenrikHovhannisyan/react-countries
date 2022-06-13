export const fechCountries = () => {
  return fetch("https://countriesnow.space/api/v0.1/countries/")
    .then((res) => res.json()
  );
};
