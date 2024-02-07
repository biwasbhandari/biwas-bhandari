import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const lists = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/",
  },
  {
    title: "Skill",
    to: "/",
  },
  {
    title: "Project",
    to: "/",
  },
  {
    title: "Refernces",
    to: "/",
  },
];
export function Mobnav() {
  return (
    <div className=" grid-cols-2 gap-2 grid md:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="bottom" className="h-screen flex justify-center ">
          <SheetHeader>
            {lists.map((list) => (
              <SheetTitle key={list.title}>
                <SheetClose asChild>
                  <Link to={list.to}>
                    <Button variant="link">{list.title}</Button>
                  </Link>
                </SheetClose>
              </SheetTitle>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
