import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../assets/react.svg"

export default function NavBar() {
    return (
        <div className="container relative mx-auto z-40 text-white font-bold bg-transparent">
            <nav className="absolute inset-x-0 top-0 flex items-center justify-between h-24">
                <div className="flex w-[150px] h-[60px] p-1 ml-5">
                    <Link to={"/"}>
                        <img src={logo}  alt="logo" className="w-25 h-25" />
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-10 w-full text-lg">
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Home</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>About us</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Portfolio</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Services</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Contact</CustomLink>
                </div>
            </nav>
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


{/* <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Home</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>About us</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Portfolio</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Services</CustomLink>
                    <CustomLink to={"/"} className='hover:text-[#0E3B5F]'>Contact</CustomLink>
                 */}