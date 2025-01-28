import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <p>{err.data}</p>
    </>
  );
};
export default Error;
