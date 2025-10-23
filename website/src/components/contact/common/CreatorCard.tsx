import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import type { Creator } from "../../../types/Creator";

interface CreatorCardProps {
  creator: Creator;
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  const socialLinks: SocialLink[] = [
    { href: creator.githubLink, icon: FaGithub, label: "GitHub" },
    { href: creator.whatsappLink, icon: FaWhatsapp, label: "WhatsApp" },
    { href: creator.linkedinLink, icon: FaLinkedin, label: "LinkedIn" },
  ];

  return (
    <article className="group h-full">
      <div className="h-full p-8 rounded-2xl border border-main/10 transition-all duration-300 hover:border-main/20 hover:shadow-lg hover:shadow-main/5">
        {/* Image Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            <img
              src={creator.image}
              alt={`Foto de ${creator.name}`}
              className="w-full h-full rounded-full object-cover ring-1 ring-main/10 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Creator Name */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-main tracking-tight">
            {creator.name}
          </h3>
        </div>

        {/* Social Links */}
        <nav className="space-y-2" aria-label={`Links de contato de ${creator.name}`}>
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 rounded-lg text-main/60 hover:text-main hover:bg-main/5 border border-transparent hover:border-main/10 transition-all duration-200 group/link"
            >
              <div className="w-8 h-8 rounded-lg bg-main/5 group-hover/link:bg-main/10 flex items-center justify-center transition-colors duration-200">
                <Icon className="text-base" />
              </div>
              <span className="text-sm font-medium flex-1">
                {label}
              </span>
              <svg 
                className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </article>
  );
};

export default CreatorCard;