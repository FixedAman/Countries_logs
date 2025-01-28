import { useEffect, useState, useTransition } from "react";
import { getResponse } from "../api/PosApi";
import CountriesApi from "../components/layout/CountriesApi";

const MainCountries = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

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
        <h1 className="text-2xl font-semibold text-gray-700">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen p-6 pl-12 pr-12">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-6">
        Countries
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {countries.map((currElem, index) => {
          return <CountriesApi key={index} currElem={currElem} />;
        })}
      </ul>
    </div>
  );
};

export default MainCountries;
