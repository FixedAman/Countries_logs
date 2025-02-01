import { NavLink } from "react-router-dom";
const CountriesApi = ({ currElem }) => {
  const { name, flags, population } = currElem;

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
        <NavLink to={`/find/${encodeURIComponent(name.common)}`}>
          <button>Read More</button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountriesApi;
