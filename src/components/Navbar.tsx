'use client';
import React, { useState } from "react";
import { Menu, MenuItem,} from "./ui/Navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50 italic ")}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
            <Link href="/" onClick={() => ("Home")}>Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
            <Link href="/courses" onClick={() => ("Courses")}>Courses</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
            <Link href="/contact" onClick={() => ("Contact Me")}>Contact Me</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar;