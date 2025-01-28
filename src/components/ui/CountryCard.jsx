const CountryCard = ({ currElem }) => {
  const { country_name, population, capital, interesting_facts } = currElem;

  return (
    <div
      className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 text-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
      key={currElem.id}
    >
      <h2 className="text-xl font-bold mb-4">Country Name: {country_name}</h2>
      <p className="text-gray-300 mb-2">
        <span className="font-semibold">Population:</span>
        {population.toLocaleString()}
      </p>
      <p className="text-gray-300 mb-2">
        <span className="font-semibold">Capital:</span> {capital}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Interesting Facts:</span>
        {interesting_facts}
      </p>
    </div>
  );
};

export default CountryCard;
