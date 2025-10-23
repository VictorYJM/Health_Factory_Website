import type React from "react";
import { useRef, useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

type HoverMenuProps = {
    buttonContent: React.ReactNode;
    children: React.ReactNode;
};

const HoverMenu = ({ buttonContent, children }: HoverMenuProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const handleMouseEnter = (isOpen: boolean) => {
        if(timeoutId) { clearTimeout(timeoutId); }
        if(!isOpen) { buttonRef.current?.click(); }
    };
    
    const handleMouseLeave = (isOpen: boolean) => {
        if(isOpen) {
            const id = setTimeout(() => buttonRef.current?.click(), 150);
            setTimeoutId(id);
        }
    };

    return (
        // Dropdown list
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <div onMouseEnter={ () => handleMouseEnter(open) } onMouseLeave={ () => handleMouseLeave(open) }>
                    {/* Button in Navbar */}
                    <MenuButton ref={ buttonRef } className="menu-name">
                        { buttonContent }
                    </MenuButton>

                    {/* Options to display */}
                    <MenuItems transition anchor="bottom" className="ring-1 ring-black ring-opacity-5 transition menu-item bg-main">
                        { children }
                    </MenuItems>
                </div>
            )}
        </Menu>
    );
};

export default HoverMenu;