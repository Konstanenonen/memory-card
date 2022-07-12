import React, { ReactNode } from "react";

interface NavBarProps {
  children: ReactNode;
}

function NavBar({ children }: NavBarProps) {
  return (
    <nav className="p-10 mb-10 w-full flex flex-col gap-6 sm:flex-row justify-around items-center bg-blue-500 shadow-md shadow-blue-300">
      {children}
    </nav>
  );
}

export default NavBar;
