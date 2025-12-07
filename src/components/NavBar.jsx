import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Works", href: "#works"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    const[isMenuClicked, setIsMenuClicked] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    // If the second argument is empty [] -> run only once.
    // If the one is with specific number in [] -> run only when the element is changed.
    // If the one is no dependency(w/o[] array) -> run whenever any state changes
    },[]);

    return (<nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5" )}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <span className="relative z-10 text-orange-300">
                    <span className="text-glow text-foreground">Masahiro</span> Togasaki
                </span>
            </a>

            {/* Deskctop version navigation */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key)=> (
                    <a 
                    key = {key} 
                    href={item.href} 
                    className="text-foreground/80 
                    hover:text-orange-300 transition-colors duration-300"
                    >{item.name}</a>
                ))}
            </div>
                {/* Mobile version navi　gation */}
            {/* Set the Menue button and Closing button in the upper right position */}
            <button 
            　onClick={() => setIsMenuClicked((prev) => !prev)}
            　className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuClicked ? "Close Menu" : "Open Menu"}

            >{isMenuClicked ? <X size={24}/> : <Menu size={24}/>}
            </button>
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuClicked
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}>
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key)=> (
                    <a 
                    key = {key} 
                    href={item.href} 
                    className="text-foreground/80 
                    hover:text-orange-300 transition-colors duration-300"
                    // That settings for closing Shortcut menu when user clicked the buttun in the menu.
                    onClick={() => setIsMenuClicked(false)}
                    >{item.name}</a>
                ))}
            </div>
            </div>
        </div>

        </nav>
    );

};