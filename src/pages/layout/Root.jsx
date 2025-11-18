import { Outlet } from "react-router";
import NavBar from "../../components/header/NavBar";
import FooterBar from "../../components/footer/FooterBar";
import GradientBackground from "../../components/BG/GradientBackground";

function Root() {
  return (
    <div>
     
      <NavBar></NavBar>
       <GradientBackground>
      <Outlet></Outlet>
      </GradientBackground>
      <FooterBar></FooterBar>
      
    </div>
  );
}

export default Root;
