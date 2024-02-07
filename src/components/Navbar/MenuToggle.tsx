import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";

const MenuToggle = () => {
  return (
    <div className="flex items-center gap-3">
      <ModeToggle />
      <Link to={"/"}>
        <Button>Contact</Button>
      </Link>
    </div>
  );
};
export default MenuToggle;
