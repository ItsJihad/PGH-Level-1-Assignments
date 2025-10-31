import React, { use } from "react";

import FooTer from "../../components/footer/Footer";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../../components/header/NavBar";
import Spinner from "../Loading/Spinner";

function Root() {
  const { state } = useNavigation();

  return (
    <div>
      <NavBar></NavBar>
      {state == "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
      <FooTer></FooTer>
    </div>
  );
}

export default Root;
