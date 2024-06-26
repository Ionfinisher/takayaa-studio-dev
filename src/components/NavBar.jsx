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
            <div className="lg:hidden">
                <SheetAction/>
            </div>
            <div className="lg:flex items-center space-x-6 hidden montserrat-md text-lg">
                <CustomLink to={"/#home"} className='hover:underline underline-offset-4'>Home</CustomLink>
                <CustomLink to={"/#aboutus"} className='hover:underline underline-offset-4'>About us</CustomLink>
                <CustomLink to={"/#ourexpertise"} className='hover:underline underline-offset-4'>Our expertise</CustomLink>
                <CustomLink to={"/#freeresources"} className='hover:underline underline-offset-4'>Free resource</CustomLink>
                <CustomLink to={"/#contact"} className='hover:underline underline-offset-4'>Contact</CustomLink>
            </div>
        </div>
    </div>
    )
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <div>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}





