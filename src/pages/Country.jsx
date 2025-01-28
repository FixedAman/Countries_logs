import { useEffect, useState } from "react";
import json from "../api/CountryApi.json";
import CountryCard from "../components/ui/CountryCard";

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    try {
      setCountry(json);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section className="bg-zinc-900 text-white min-h-screen py-10 px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Here's the Interesting Facts
          </h1>
          <p className="text-gray-300 text-lg">
            Let's explore amazing facts about countries around the world!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {country.map((currElem) => {
            return <CountryCard key={currElem.id} currElem={currElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Country;
