import { useParams } from "react-router-dom";
import { getSpecificData } from "../../api/PosApi";
import { useEffect, useState, useTransition } from "react";
import Loading from "./Loader";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [detail, setDetail] = useState(null);
  const { country_name } = useParams();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getSpecificData(country_name);
        setDetail(res.data[0]);
        console.log(res.data[0]);
      } catch (error) {
        console.error(`The error is: ${error}`);
      }
    });
  }, [country_name]);

  if (isPending || !detail) {
    return <Loading />;
  }

  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-10 bg-zinc-800 text-white rounded-lg shadow-lg">
        {/* Country Flag */}
        <div className="md:w-1/3 flex justify-center">
          {detail.flags?.png && (
            <img
              src={detail.flags.png}
              alt={detail.name?.common}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Country Details */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:pl-10 space-y-3">
          <h1 className="text-3xl font-bold">{detail.name?.common}</h1>
          <p className="text-lg text-gray-300">
            <span className="font-semibold">Official Name:</span>{" "}
            {detail.name?.official}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Capital:</span>{" "}
            {detail.capital?.[0] || "N/A"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Population:</span>{" "}
            {detail.population?.toLocaleString()}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Subregion:</span>{" "}
            {detail.subregion ? detail.subregion : "N/A"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Websites:</span>{" "}
            {detail.tld ? detail.tld[0] : "N/A"}
          </p>

          {/* Dynamic Currencies Display */}
          <p className="text-lg">
            <span className="font-semibold">Currencies:</span>{" "}
            {detail.currencies
              ? Object.values(detail.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")
              : "N/A"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Languages:</span>{" "}
            {detail.languages
              ? Object.values(detail.languages)
                  .map((langauage) => `${langauage}`)
                  .join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
