/* React Libraries */
import { GiMeal } from "react-icons/gi";
import { MdChat } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MenuItem } from "@headlessui/react";
import { FaAngleDown, FaBullseye, FaMoon, FaSun, FaUniversity, FaUser } from "react-icons/fa";

/* Components */
import HoverMenu from "./common/HoverMenu";

/* Health Factory Icons */
import iconDark from "../../assets/logos/icon-dark.png";
import iconLight from "../../assets/logos/icon-light.png";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        if (typeof window !== "undefined" && (localStorage.theme === "dark" || (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches))) { return true; }

        return false;
    });

    /* Mobile Menu */
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode])

    const toggleTheme = () => { setIsDarkMode((prevState) => !prevState); };
    const toggleMenu = () => { setIsMenuOpen((prevState) => !prevState); };
    const handleLinkClick = () => { setIsMenuOpen(false); };

    return (
        <nav className="sticky top-0 left-0 w-full shadow-md z-50 bg-main text-main">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
                {/* Left Navbar => Health Factory Logo */}
                <Link to="/Health_Factory_Website/" className="relative flex items-center z-10" onClick={ handleLinkClick }>
                    <img src={ isDarkMode ? iconDark : iconLight } className="absolute top-1/2 -translate-y-1/2 size-14 md:size-16" />
                    <h1 className="text-xl md:text-2xl font-semibold pl-16 md:pl-20">
                        <span className="text-transparent bg-clip-text transition-colors duration-200 gradient-icon-light-theme gradient-icon-dark-theme">Health Factory</span>
                    </h1>
                </Link>

                {/* Middle Navbar => Page Navigation */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
                    {/* About */}
                    <HoverMenu buttonContent={ <><span className="text-left">Sobre</span><FaAngleDown /></> }>
                        <MenuItem>
                            <Link to="/Health_Factory_Website/quemsomos" className="text-main menu-button"><FaUser />Quem Somos</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/Health_Factory_Website/objetivo" className="text-main menu-button"><FaBullseye />Objetivo</Link>
                        </MenuItem>
                    </HoverMenu>

                    {/* Database */}
                    <HoverMenu buttonContent={ <><span className="text-left">Base de Dados</span><FaAngleDown /></> }>
                        <MenuItem>
                            <Link to="/Health_Factory_Website/alimentos" className="text-main menu-button"><GiMeal />Alimentos</Link>
                        </MenuItem>
                    </HoverMenu>

                    {/* Contacts */}
                    <HoverMenu buttonContent={ <><span className="text-left">Contatos</span><FaAngleDown /></> }>
                        <MenuItem>
                            <Link to="/Health_Factory_Website/contatos" className="text-main menu-button"><MdChat />Fale Conosco</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/Health_Factory_Website/instituicao" className="text-main menu-button"><FaUniversity />Instituição</Link>
                        </MenuItem>
                    </HoverMenu>
                </div>

                {/* Right Navbar => Theme Changer and Mobile Menu*/}
                <div className="flex items-center space-x-2 z-10">
                    <button onClick={ toggleTheme } className="navbar-icon">
                        { isDarkMode ? <FaSun size={ 24 } /> : <FaMoon size={ 24 } />}
                    </button>

                    <button onClick={ toggleMenu } className="navbar-icon md:hidden">
                        { isMenuOpen ? <HiX size={ 24 } /> : <HiMenu size={ 24 } /> }
                    </button>
                </div>
            </div>

            {/* Mobile Menu Options */}
            { isMenuOpen && (
                <div className="md:hidden bg-main flex flex-col space-y-2 px-4 pb-4">
                    <Link to="/quemsomos" className="flex items-center gap-x-2 p-2 rounded-md hover:bg-main-inverse hover:text-main-inverse" onClick={ handleLinkClick }><FaUser />Quem Somos</Link>
                    <Link to="/objetivo" className="flex items-center gap-x-2 p-2 rounded-md hover:bg-main-inverse hover:text-main-inverse" onClick={ handleLinkClick }><FaBullseye />Objetivo</Link>
                    <Link to="/alimentos" className="flex items-center gap-x-2 p-2 rounded-md hover:bg-main-inverse hover:text-main-inverse" onClick={ handleLinkClick }><GiMeal />Alimentos</Link>
                    <Link to="/contatos" className="flex items-center gap-x-2 p-2 rounded-md hover:bg-main-inverse hover:text-main-inverse" onClick={ handleLinkClick }><MdChat />Fale Conosco</Link>
                    <Link to="/instituicao" className="flex items-center gap-x-2 p-2 rounded-md hover:bg-main-inverse hover:text-main-inverse" onClick={ handleLinkClick }><FaUniversity />Instituição</Link>
                </div>
            ) }
        </nav>
    );
};

export default Navbar;