import { Outlet } from "react-router-dom";
import NavBarSignUpPro from "../NavBarSignUpPro/NavBarSignUpPro";

function LayoutSignUpPro() {
  return (
    <div>
      <NavBarSignUpPro />
      <Outlet />
    </div>
  );
}

export default LayoutSignUpPro;
