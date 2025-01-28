import { NavLink } from "react-router-dom";
const CountriesApi = ({ currElem }) => {
  const { name, flags, population, capital, currencies } = currElem;
  const currencyKey = currencies ? Object.keys(currencies)[0] : null;
  const currencySymbol = currencyKey ? currencies[currencyKey].symbol : "N/A";

  return (
    <li className="country-card w-80 p-4 bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 rounded-lg mx-auto">
      <div className="container-card">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-200">
          <span>
            Country:
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </span>
        </p>
        <p className="text-lg font-semibold text-gray-200">
          <span>Population: {population.toLocaleString()}</span>
        </p>
        <p className="text-lg font-semibold text-gray-200">
          <span>Capital: {capital}</span>
        </p>
        <p className="text-lg font-semibold text-gray-200">
          <span>Currency: {currencySymbol}</span>
        </p>
        <NavLink to={`/find/${encodeURIComponent(name.common)}`}>
          <button>Read More</button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountriesApi;
