const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 border-t border-main bg-main">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-main">
                {/* Copyright */}
                <div className="text-sm text-center md:text-left">
                    <p>
                        &copy; {currentYear} Health Factory. Desenvolvido por <span className="font-semibold">Aldo Junio</span>, <span className="font-semibold">Lucas Pace</span> & <span className="font-semibold">Victor Yuji</span>.
                    </p>
                    <p className="text-xs text-main/60 mt-1">
                        Feito com React, Vite & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;