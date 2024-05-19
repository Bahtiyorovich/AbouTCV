import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LogoIcon, LogoName } from "../assets";
 

 
export function NavbarSimple() { 
  return (
    <Navbar className="flex items-center bg-teal-500 col-span-12 h-[10vh] mx-auto  px-6 shadow-md rounded-none sm:rounded-md">
      <div className="flex items-center gap-x-2 text-blue-gray-900">
        <img src={LogoIcon} alt="logo" className="w-14 h-14"/>
        <Typography variant="h4" color="white" className="mt-4">AbouTCV.uz</Typography>
      </div>
    </Navbar>
  );
}