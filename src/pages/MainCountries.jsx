import { useEffect, useState, useTransition } from "react";
import { getResponse } from "../api/PosApi";
import CountriesApi from "../components/layout/CountriesApi";
import Loading from "../components/layout/Loader";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const MainCountries = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getResponse();
        setCountries(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(`error is : ${error}`);
      }
    });
  }, []);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortingCountries = [...filterCountries].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="bg-zinc-900 min-h-screen p-6 px-12">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-6">
        Countries
      </h1>

      {/* Search and Sort Section */}
      <div className="flex items-center justify-between mb-6">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          placeholder="Search countries..."
          className="p-3 w-1/2 rounded-lg border border-gray-500 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="flex items-center gap-2 px-6 py-3 ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
        >
          Sort {sortOrder === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
        </button>
      </div>

      {/* Countries List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {sortingCountries.map((currElem, index) => (
          <CountriesApi key={index} currElem={currElem} />
        ))}
      </ul>
    </div>
  );
};

export default MainCountries;
