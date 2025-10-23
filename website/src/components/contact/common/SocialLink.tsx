import type React from "react";

interface SocialLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
};

const SocialLink = ({ href, label, icon }: SocialLinkProps) => {
    return (
        // Social media / contacts button
        <a
            href={ href }
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ label }
            className="w-full group block animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-background-dark to-background-dark dark:from-background-light via-glow dark:to-background-light p-[2px]"
        >
            {/* Animated border */}
            <div className="flex h-full w-full items-center justify-center gap-x-2 rounded-md bg-main px-6 py-3 font-semibold text-text-dark/80 transition-colors duration-200 group-hover:text-glow dark:text-text-light/80">
                { icon }
                <span>{ label }</span>
            </div>
        </a>
    );
};

export default SocialLink;