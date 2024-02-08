import { Link } from "react-router-dom";

import { Mobnav } from "./Mobnav";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Mobnav />
      <Link to={"/"}>
        <h1 className="font-bold text-4xl">Biwas</h1>
      </Link>
    </div>
  );
};
export default Logo;
