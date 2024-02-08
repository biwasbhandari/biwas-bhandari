import { Button } from "@/components/ui/button";
import { animateScroll as scroll } from "react-scroll";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const lists = [
  {
    title: "Home",
    to: "home", // Use the corresponding element ID for scrolling
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skill",
    to: "skill",
  },
  {
    title: "Project",
    to: "project",
  },
];

export function Mobnav() {
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
    <div className="grid-cols-2 gap-2 grid md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="h-screen flex justify-center">
          <SheetHeader>
            {lists.map((list) => (
              <SheetTitle key={list.title}>
                <SheetClose asChild>
                  <Button
                    variant="link"
                    onClick={() => scrollToElement(list.to)}
                  >
                    {list.title}
                  </Button>
                </SheetClose>
              </SheetTitle>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
