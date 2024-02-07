import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

const lists = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "#about",
  },
  {
    title: "Skill",
    to: "/",
  },
  {
    title: "Project",
    to: "/",
  },
];

export function Navlist() {
  return (
    <NavigationMenu className="md:flex hidden ">
      <NavigationMenuList>
        {lists.map((list) => (
          <NavigationMenuItem key={list.title}>
            <Link to={list.to}>
              <Button variant="link">{list.title}</Button>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
