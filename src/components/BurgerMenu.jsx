import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import { useMatch, useResolvedPath } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import takayaa from "../assets/takayaa-logo.png"




export function SheetAction() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <AlignJustify size={32} strokeWidth={1}/>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="mt-5 flex flex-row justify-between">
            <Link to={"/"}>
                <img src={takayaa}  alt="logo" className="w-40 h-30"/>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-8 items-center montserrat-md">
            <SheetClose asChild>
              <CustomLink to={"/#home"} className='hover:text-[#0E3B5F]'>Home</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink to={"/#aboutus"} className='hover:text-[#0E3B5F]'>About us</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink to={"/#ourexpertise"} className='hover:text-[#0E3B5F]'>Our expertise</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink to={"/#freeresources"} className='hover:text-[#0E3B5F]'>Free resource</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink to={"/#contact"} className='hover:text-[#0E3B5F]'>Contact</CustomLink>
            </SheetClose>
            
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button size={"lg"} variant={"outline"} className="text-lg montserrat-md">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


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