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
import { Link, useMatch, useResolvedPath } from "react-router-dom"




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
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 items-center">
            <SheetClose asChild>
              <CustomLink  to={"/"}>Home</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink  to={"/"}>Projects</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink  to={"/"}>Freelance</CustomLink>
            </SheetClose>
            <SheetClose asChild>
              <CustomLink  to={"/"}>Contact</CustomLink>
            </SheetClose>
            {/* <Link to={"/"}>Blog</Link> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button size={"lg"} variant={"outline"} className="text-lg">Close</Button>
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
        <div className={isActive ? "underline underline-offset-4" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}