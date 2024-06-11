import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../assets/react.svg"
import { SheetAction } from "./BurgerMenu";
import { Separator } from "~/components/ui/separator"

export default function NavBar() {
    return (      
    <div className="container mx-auto px-4 md:px-8 sticky top-0 z-40 w-full backdrop-blur-md">
        <div className="flex items-center justify-between h-24">
            <Link to={"/"}>
                <img src={logo}  alt="logo" className="w-25 h-25" />
            </Link>
            <div className="md:hidden">
                <SheetAction/>
            </div>
            <div className="md:flex items-center space-x-6 hidden">
                <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Home</CustomLink>
                <CustomLink to={"/1"} className='hover:text-[#0E3B5F]'>About us</CustomLink>
                <CustomLink to={"/2"} className='hover:text-[#0E3B5F]'>Portfolio</CustomLink>
                <CustomLink to={"/3"} className='hover:text-[#0E3B5F]'>Services</CustomLink>
                <CustomLink to={"/4"} className='hover:text-[#0E3B5F]'>Contact</CustomLink>
            </div>
        </div>
        <Separator/>
    </div>
    )
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <div className={isActive ? "underline underline-offset-4" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}





