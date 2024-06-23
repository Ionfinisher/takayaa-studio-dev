import React from "react"
import { useMatch, useResolvedPath } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import takayaa from "../assets/takayaa-logo.png"
import { SheetAction } from "./BurgerMenu";
import { Separator } from "~/components/ui/separator"

export default function NavBar() {
    return (
    <div className="w-full px-4 md:px-8 sticky top-0 z-40 bg-[#f1f1f1] shadow-md">
        <div className="container mx-auto flex items-center justify-between h-20">
            <Link to={"/"}>
                <img src={takayaa}  alt="logo" className="w-40 h-30"/>
            </Link>
            <div className="md:hidden">
                <SheetAction/>
            </div>
            <div className="md:flex items-center space-x-6 hidden montserrat-md text-lg">
                <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Home</CustomLink>
                <CustomLink to={"/#aboutus"} className='hover:text-[#0E3B5F]'>About us</CustomLink>
                <CustomLink to={"/#ourworks"} className='hover:text-[#0E3B5F]'>Our works</CustomLink>
                <CustomLink to={"/#services"} className='hover:text-[#0E3B5F]'>Services</CustomLink>
                <CustomLink to={"/#contact"} className='hover:text-[#0E3B5F]'>Contact</CustomLink>
            </div>
        </div>
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





