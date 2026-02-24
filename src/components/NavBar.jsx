import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navTitles = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn(
            "fixed z-40 w-full transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="w-full px-8 flex items-center">
                <div className="flex-1">
                    <a href="#home" className="text-xl font-bold text-primary flex items-center">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Rafe </span> Umair
                        </span>
                    </a>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navTitles.map((title, key) => (
                        <a key={key} href={title.href} className="text-foreground hover:text-primary transition-colors duration-200">
                            {title.name}
                        </a>
                    ))}
                </div>

                <div className="flex-1" />
            </div>
        </nav>
    );
};