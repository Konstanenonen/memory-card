import React, { ReactNode } from "react";

interface NavBarProps {
  children: ReactNode;
}

function NavBar({ children }: NavBarProps) {
  return (
    <nav className="p-10 w-full flex flex-row justify-between items-center bg-blue-500">
      {children}
    </nav>
  );
}

export default NavBar;
