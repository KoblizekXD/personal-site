"use client";

import { offsetIndexAtom } from "@/atoms/offset-index";
import { useAtom } from "jotai";

export function NavBar() {
  const [index] = useAtom(offsetIndexAtom);

  return (
    <nav className="flex fixed left-0 top-0 right-0 pt-4 px-6 md:justify-between justify-center items-center">
      {index > 0 && <h1 className="md:block hidden text-2xl font-[Poppins]">Jan Prokůpek</h1>}
      <div className="md:ml-auto font-[Poppins] p-2 flex items-center justify-center gap-x-6">
        <NavItem active={index === 1} index={1}>
          About
        </NavItem>
        <NavItem active={index === 2} index={2}>
          Skills
        </NavItem>
        <NavItem active={index === 3} index={3}>
          Projects
        </NavItem>
        <NavItem active={index === 4} index={4}>
          Contact
        </NavItem>
      </div>
    </nav>
  );
}

function NavItem({
  active,
  children,
  index,
}: {
  active: boolean;
  children: React.ReactNode;
  index?: number;
}) {
  const [_, setIndex] = useAtom(offsetIndexAtom);
  return (
    <button
      type="button"
      onClick={() => {
        if (index !== undefined) {
          setIndex(index);
        }
      }}
      className={`
        relative cursor-pointer 
        after:content-[''] after:absolute after:left-0 after:-bottom-0.5
        after:h-0.5 after:bg-current
        after:transition-all after:duration-300
        ${active ? "after:w-full" : "after:w-0"}
      `}
    >
      {children}
    </button>
  );
}
