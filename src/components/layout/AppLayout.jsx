import { Outlet } from "react-router-dom";
import Headers from "../ui/Header";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
