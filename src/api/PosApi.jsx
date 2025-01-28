import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// get all response
export const getResponse = () => {
  return api.get(
    "all?fields=name,capital,currencies,population,language,flags"
  );
};

export const getSpecificData = (country_name) => {
  return api.get(
    `/name/${country_name}?fields=name,capital,currencies,population,language,flags`
  );
};
