import { FaBrain, FaHeart, FaDna, FaDatabase } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-main min-h-screen text-main">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-32 md:pt-48 pb-32">
                <div className="max-w-5xl mx-auto">
                    {/* Badge minimalista */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-main/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-3"></div>
                            <span className="text-sm tracking-wide text-main/60">
                                Powered by AI · FNN + BRKGA + LLM
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
                            Health
                            <br />
                            <span className="text-main/40">Factory</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-main/50 font-light leading-relaxed max-w-2xl mx-auto">
                            Democratização da alimentação saudável através de ciência de dados e inteligência artificial
                        </p>
                    </div>                    
                </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
            </div>

            {/* Context Section */}
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-main/40 mb-4">Contexto</h2>
                    <p className="text-3xl md:text-4xl font-light text-main/80">
                        Combatendo as DCNTs no Brasil
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center p-6">
                        <div className="text-4xl font-bold text-main/90 mb-2">56,9%</div>
                        <div className="text-sm text-main/40">dos óbitos por DCNTs (30-69 anos)</div>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-4xl font-bold text-main/90 mb-2">60,3%</div>
                        <div className="text-sm text-main/40">da população com excesso de peso</div>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-4xl font-bold text-main/90 mb-2">96M</div>
                        <div className="text-sm text-main/40">de brasileiros afetados</div>
                    </div>
                </div>

                <p className="text-lg text-main/60 text-center leading-relaxed">
                    A alimentação inadequada é o principal fator de risco modificável para obesidade, diabetes tipo 2 e hipertensão. 
                    O Health Factory surge como resposta tecnológica a esse desafio de saúde pública.
                </p>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
            </div>

            {/* Technology Section */}
            <div className="container mx-auto px-4 py-32 max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-sm uppercase tracking-widest text-main/40 mb-4">Tecnologia</h2>
                    <p className="text-3xl md:text-4xl font-light text-main/80">
                        Arquitetura híbrida de IA
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                    {/* Neural Network */}
                    <div className="group">
                        <div className="mb-8 overflow-hidden">
                            <FaBrain className="text-6xl text-main/20 group-hover:text-purple-500/40 transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">FNN</h3>
                        <p className="text-lg text-main/60 leading-relaxed mb-6">
                            Feedforward Neural Network prediz compatibilidade entre alimentos e perfil metabólico com precisão de 97,6%.
                        </p>
                        <div className="text-sm text-main/40 font-mono">PyTorch · MSE Loss · Adam</div>
                    </div>

                    {/* LLM */}
                    <div className="group">
                        <div className="mb-8 overflow-hidden">
                            <FaDatabase className="text-6xl text-main/20 group-hover:text-blue-500/40 transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">LLM</h3>
                        <p className="text-lg text-main/60 leading-relaxed mb-6">
                            Google Gemini estrutura refeições culinárias coerentes e contextualizadas a partir dos alimentos selecionados.
                        </p>
                        <div className="text-sm text-main/40 font-mono">Gemini · Contextual Reasoning</div>
                    </div>

                    {/* Genetic Algorithm */}
                    <div className="group">
                        <div className="mb-8 overflow-hidden">
                            <FaDna className="text-6xl text-main/20 group-hover:text-green-500/40 transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">BRKGA</h3>
                        <p className="text-lg text-main/60 leading-relaxed mb-6">
                            Biased Random Key Genetic Algorithm calcula porções exatas em gramas maximizando aderência às metas nutricionais.
                        </p>
                        <div className="text-sm text-main/40 font-mono">Meta-heurística · Fitness 43.0</div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
            </div>

            {/* Process Section */}
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-sm uppercase tracking-widest text-main/40 mb-4">Metodologia</h2>
                    <p className="text-3xl md:text-4xl font-light text-main/80">
                        Do hemograma ao prato
                    </p>
                </div>

                <div className="space-y-20">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-16 h-16 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light text-xl">
                                01
                            </div>
                        </div>
                        <div className="md:col-span-10">
                            <h3 className="text-2xl font-bold mb-3">Extração de Dados Clínicos</h3>
                            <p className="text-lg text-main/60 leading-relaxed">
                                Leitor automatizado em Python (PyMuPDF) processa hemogramas completos, padroniza métricas e integra com dados do usuário no Supabase
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-16 h-16 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light text-xl">
                                02
                            </div>
                        </div>
                        <div className="md:col-span-10">
                            <h3 className="text-2xl font-bold mb-3">Análise pela FNN</h3>
                            <p className="text-lg text-main/60 leading-relaxed">
                                Rede neural concatena features do usuário (hemograma, perfil, objetivos) com dados nutricionais da TACO e prediz notas de compatibilidade (0-1)
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-16 h-16 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light text-xl">
                                03
                            </div>
                        </div>
                        <div className="md:col-span-10">
                            <h3 className="text-2xl font-bold mb-3">Cálculo de Metas (TMB)</h3>
                            <p className="text-lg text-main/60 leading-relaxed">
                                Fórmula de Mifflin-St Jeor calcula Taxa Metabólica Basal ajustada por fator de atividade física para definir metas diárias
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-16 h-16 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light text-xl">
                                04
                            </div>
                        </div>
                        <div className="md:col-span-10">
                            <h3 className="text-2xl font-bold mb-3">Estruturação Culinária (LLM)</h3>
                            <p className="text-lg text-main/60 leading-relaxed">
                                Gemini recebe templates estruturais com top-5 alimentos por categoria e compõe refeições balanceadas em formato JSON
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex justify-center md:justify-start">
                            <div className="w-16 h-16 rounded-full border border-main/20 flex items-center justify-center text-main/40 font-light text-xl">
                                05
                            </div>
                        </div>
                        <div className="md:col-span-10">
                            <h3 className="text-2xl font-bold mb-3">Otimização BRKGA</h3>
                            <p className="text-lg text-main/60 leading-relaxed">
                                Algoritmo genético evolucionário calcula porções em gramas minimizando distância das metas nutricionais (desvio médio &lt;6,4%)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
            </div>

            {/* Stats */}
            <div className="container mx-auto px-4 py-32 max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                    <div className="text-center">
                        <div className="text-5xl font-light text-main/90 mb-3">97,6%</div>
                        <div className="text-sm text-main/40 tracking-wide">Precisão Calórica</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-light text-main/90 mb-3">93,6%</div>
                        <div className="text-sm text-main/40 tracking-wide">Precisão Macro</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-light text-main/90 mb-3">3</div>
                        <div className="text-sm text-main/40 tracking-wide">Camadas de IA</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-light text-main/90 mb-3">TACO</div>
                        <div className="text-sm text-main/40 tracking-wide">Base UNICAMP</div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-main/10 to-transparent"></div>
            </div>

            {/* Impact Section */}
            <div className="container mx-auto px-4 py-32 max-w-3xl text-center">
                <FaHeart className="text-5xl text-main/20 mx-auto mb-8" />
                <h2 className="text-3xl md:text-5xl font-light text-main/80 mb-8 leading-tight">
                    Democratizando acesso à nutrição de precisão
                </h2>
                <p className="text-xl text-main/50 leading-relaxed mb-4">
                    Combatendo DCNTs através de tecnologia acessível, cientificamente fundamentada e culturalmente contextualizada
                </p>
                <p className="text-lg text-main/40 leading-relaxed mb-12 italic">
                    "Que o remédio seja o seu alimento, e que o seu alimento seja o seu remédio" — Hipócrates
                </p>
            </div>

            {/* Footer Spacing */}
            <div className="h-32"></div>
        </div>
    );
};

export default Home;