import { animateScroll as scroll } from "react-scroll";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

interface NavItem {
  title: string;
  to: string;
}

const lists: NavItem[] = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skill",
  },
  {
    title: "Projects",
    to: "project",
  },
];

export function Navlist() {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      scroll.scrollTo(element.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <NavigationMenu className="md:flex hidden">
      <NavigationMenuList>
        {lists.map((list) => (
          <NavigationMenuItem key={list.title}>
            <Button
              variant="link"
              className="text-xl"
              onClick={() => scrollToElement(list.to)}
            >
              {list.title}
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
