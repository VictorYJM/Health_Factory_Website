import { FaUsers, FaDatabase, FaBrain } from "react-icons/fa";
import { SiPython, SiPytorch, SiReact } from "react-icons/si";

const WhoWeAre = () => {
    return (
        <div className="py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <div className="inline-block mb-6">
                        <FaUsers className="text-5xl md:text-6xl text--500 mx-auto" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Quem Somos
                    </h1>
                    <p className="text-xl md:text-2xl text-main/60 max-w-2xl mx-auto font-light">
                        A equipe por trás da revolução nutricional inteligente
                    </p>
                </div>

                {/* Autores */}
                <div className="mb-32">
                    <div className="border-l-4 border-black-500 pl-8 py-6 mb-12">
                        <h2 className="text-3xl font-bold mb-6">Desenvolvedores</h2>
                        <p className="text-xl text-main/80 leading-relaxed font-light mb-4">
                            <span className="font-semibold">Aldo Junio Brandão</span>, <span className="font-semibold">Lucas Pace Zerbinatti</span> e <span className="font-semibold">Victor Yuji Mimura</span>
                        </p>
                        <p className="text-lg text-main/70 leading-relaxed">
                            Estudantes do COTUCA-UNICAMP, unindo ciência de dados e saúde pública em uma solução tecnológica inovadora.
                        </p>
                    </div>

                    <div className="border-l-4 border-black-500 pl-8 py-6">
                        <h2 className="text-3xl font-bold mb-6">Orientação</h2>
                        <p className="text-xl text-main/80 leading-relaxed font-light mb-4">
                            <span className="font-semibold">Prof.ª Márcia Maria Tognetti Correa</span> e <span className="font-semibold">Prof.ª Andreia Cristina de Souza</span>
                        </p>
                        <p className="text-lg text-main/70 leading-relaxed">
                            Fundamentais no alinhamento técnico e metodológico, guiando o desenvolvimento científico do projeto.
                        </p>
                    </div>
                </div>

                {/* A Origem */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl font-bold">A Origem</h2>
                    </div>
                    <div className="space-y-6 text-lg text-main/70 leading-relaxed">
                        <p>
                            O Health Factory nasceu da observação de um problema crítico: o aumento alarmante de <span className="font-semibold text-main/90">Doenças Crônicas Não Transmissíveis</span> (obesidade, diabetes tipo 2, hipertensão) no Brasil.
                        </p>
                        <p>
                            A industrialização de alimentos, aliada à desinformação e barreiras financeiras, criou um ciclo vicioso de má nutrição que afeta milhões de brasileiros.
                        </p>
                        <p>
                            Nossa resposta: <span className="font-semibold text-main/90">tecnologia acessível e inteligente</span> que democratiza o acesso à orientação nutricional de qualidade, considerando as limitações reais da população.
                        </p>
                    </div>
                </div>

                {/* Stack Tecnológico */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold mb-16 text-center">Stack Tecnológico</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* IA e Machine Learning */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-main/50 uppercase tracking-wider text-sm mb-6">Inteligência Artificial</h3>
                            
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <SiPytorch className="text-4xl text-orange-600 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">PyTorch</h4>
                                        <p className="text-sm text-main/60">Neural Network</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Rede Feed Forward para análise de compatibilidade alimentar
                                </p>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <FaBrain className="text-4xl text-pink-500 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">BRKGA</h4>
                                        <p className="text-sm text-main/60">Algoritmo Genético</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Otimização evolutiva para cálculo de porções ideais
                                </p>
                            </div>
                        </div>

                        {/* Dados */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-main/50 uppercase tracking-wider text-sm mb-6">Dados</h3>
                            
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <SiPython className="text-4xl text-blue-500 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Python</h4>
                                        <p className="text-sm text-main/60">Data Science</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Processamento e análise de dados nutricionais
                                </p>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <FaDatabase className="text-4xl text-green-500 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">TACO</h4>
                                        <p className="text-sm text-main/60">Dataset</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Tabela Brasileira de Composição de Alimentos
                                </p>
                            </div>
                        </div>

                        {/* Frontend & Backend */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-main/50 uppercase tracking-wider text-sm mb-6">Aplicação</h3>
                            
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <SiReact className="text-4xl text-cyan-500 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">React</h4>
                                        <p className="text-sm text-main/60">Frontend</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Interface moderna e responsiva com Vite
                                </p>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-3">
                                    <FaDatabase className="text-4xl text-green-400 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Supabase</h4>
                                        <p className="text-sm text-main/60">Backend</p>
                                    </div>
                                </div>
                                <p className="text-main/70 text-sm leading-relaxed pl-14">
                                    Banco de dados e autenticação em tempo real
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Diferencial */}
                <div className="text-center py-16 border-t border-b border-main/10">
                    <h3 className="text-3xl font-bold mb-6">Nosso Diferencial</h3>
                    <p className="text-xl text-main/70 max-w-3xl mx-auto leading-relaxed font-light">
                        Combinamos <span className="font-semibold text-main/90">duas tecnologias de IA</span> — redes neurais e algoritmos genéticos — para criar uma solução completa: da análise de perfil até o cálculo preciso de cada grama de alimento, tudo personalizado para você.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;