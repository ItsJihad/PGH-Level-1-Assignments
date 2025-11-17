import { Outlet } from "react-router";
import NavBar from "../../components/header/NavBar";
import FooterBar from "../../components/footer/FooterBar";

function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterBar></FooterBar>
    </div>
  );
}

export default Root;
