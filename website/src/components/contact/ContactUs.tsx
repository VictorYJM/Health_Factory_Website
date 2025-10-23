import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { creatorsData } from "./data/creators";

// Se você tiver um componente CreatorCard separado, pode usar assim:
// import CreatorCard from "./common/CreatorCard";

const ContactUs = () => {
    return (
        <div className="bg-main min-h-screen py-20 md:py-32 text-main">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-sm uppercase tracking-widest text-main/40 mb-4">Contato</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Fale Conosco
                    </h1>
                    <p className="text-xl md:text-2xl text-main/60 max-w-2xl mx-auto font-light">
                        Entre em contato com a equipe do Health Factory
                    </p>
                </div>

                {/* Divider */}
                <div className="mb-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {creatorsData.map((creator, index) => (
                        <div key={creator.name} className="group">
                            {/* Number Badge */}
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="mb-8">
                                <div className="relative w-40 h-40 mx-auto">
                                    <img 
                                        src={creator.image} 
                                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        alt={creator.name}
                                    />
                                    <div className="absolute inset-0 rounded-full border border-main/10"></div>
                                </div>
                            </div>

                            {/* Name & Age */}
                            <div className="mb-8 text-center">
                                <h3 className="text-2xl font-bold mb-2">{creator.name}</h3>
                                <p className="text-main/50 text-sm tracking-wide">{creator.age} anos</p>
                            </div>

                            {/* Contact Links */}
                            <div className="space-y-4">
                                <a 
                                    href={creator.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-main/60 hover:text-main transition-colors group/link"
                                >
                                    <FaGithub className="text-lg" />
                                    <span className="text-sm border-b border-transparent group-hover/link:border-main/20">
                                        GitHub
                                    </span>
                                </a>

                                <a 
                                    href={creator.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-main/60 hover:text-main transition-colors group/link"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    <span className="text-sm border-b border-transparent group-hover/link:border-main/20">
                                        WhatsApp
                                    </span>
                                </a>

                                <a 
                                    href={creator.linkedinLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-main/60 hover:text-main transition-colors group/link"
                                >
                                    <FaLinkedin className="text-lg" />
                                    <span className="text-sm border-b border-transparent group-hover/link:border-main/20">
                                        LinkedIn
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* Footer Info */}
                <div className="text-center">
                    <p className="text-lg text-main/50 mb-4">
                        Ficou com alguma dúvida sobre o projeto?
                    </p>
                    <p className="text-main/40 text-sm">
                        Responderemos o mais breve possível
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;