import cotuca from "../../assets/logos/cotuca.png";
import { FaArrowRight, FaAward, FaGraduationCap, FaUsers } from "react-icons/fa";

const Institution = () => {
    return (
        <div className="bg-main min-h-screen py-20 md:py-32 text-main">
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Header */}
                <div className="text-center mb-24">
                    {/* Logos */}
                    <div className="flex items-center justify-center gap-8 mb-10">
                        <img
                            src={cotuca}
                            className="h-20 w-auto opacity-90"
                            alt="Logo do Cotuca"
                        />
                       
                    </div>

                    <h2 className="text-sm uppercase tracking-widest text-main/40 mb-3">
                        Gratidão
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
                        Nossa Base<br />
                        <span className="text-main/40">no COTUCA</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-main/60 max-w-2xl mx-auto font-light">
                        Colégio Técnico de Campinas - UNICAMP
                    </p>
                </div>

                {/* Divider */}
                <div className="mb-16">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* Main Message */}
                <div className="mb-20">
                    <p className="text-2xl font-light leading-relaxed text-main/80 text-center max-w-3xl mx-auto">
                        Agradecemos ao COTUCA por todo o aprendizado e apoio que moldaram nossa trajetória. Foi aqui que tudo começou.
                    </p>
                </div>

                {/* Divider */}
                <div className="mb-16">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* Impact Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    <div className="text-center">
                        <FaGraduationCap className="text-4xl text--500/40 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Formação Sólida</h3>
                        <p className="text-main/60 text-sm leading-relaxed">
                            Ensino médio forte e base técnica e prática que impulsiona nossos projetos.
                        </p>
                    </div>

                    <div className="text-center">
                        <FaUsers className="text-4xl text--500/40 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Professores Inspiradores</h3>
                        <p className="text-main/60 text-sm leading-relaxed">
                            Dedicação e incentivo que marcaram nossa jornada.
                        </p>
                    </div>

                    <div className="text-center">
                        <FaAward className="text-4xl text--500/40 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Ambiente Criativo</h3>
                        <p className="text-main/60 text-sm leading-relaxed">
                            Lugar onde inovação e aprendizado caminham juntos.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-16">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-light text-main/90 mb-1">1967</div>
                        <div className="text-sm text-main/40 tracking-wide">Fundação</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-light text-main/90 mb-1">UNICAMP</div>
                        <div className="text-sm text-main/40 tracking-wide">Instituição Vinculada</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-light text-main/90 mb-1">+50</div>
                        <div className="text-sm text-main/40 tracking-wide">Anos Educando</div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://cotuca.unicamp.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <button className="relative px-8 py-4 rounded-full border border-main/20 hover:border-main/40 transition-all duration-300">
                            <span className="flex items-center gap-3 text-lg font-medium">
                                Visite o Site Oficial
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </a>
                    <p className="text-sm text-main/40 mt-6">cotuca.unicamp.br</p>
                </div>
            </div>
        </div>
    );
};

export default Institution;