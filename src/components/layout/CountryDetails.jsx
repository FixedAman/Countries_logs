import { useParams } from "react-router-dom";
import { getSpecificData } from "../../api/PosApi";
import { useEffect, useState, useTransition } from "react";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [detail, setDetail] = useState([]);
  const { country_name } = useParams();
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getSpecificData(country_name);
        setDetail(res.data[0]);
        console.log(res.data[0]);
      } catch (error) {
        console.error(`the error is : ${error}`);
      }
    });
  }, [country_name]);
  if (isPending) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  }
  return (
    <>
      <h1>countries Details</h1>
      <div>
        <img src={detail.flags.svg} alt="" />
        <p></p>
      </div>
    </>
  );
};
export default CountryDetails;
