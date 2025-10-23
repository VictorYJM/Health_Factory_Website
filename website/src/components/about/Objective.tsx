import { FaBullseye, FaCheckCircle, FaChartLine, FaBrain, FaShieldAlt, FaUsers } from "react-icons/fa";

const Objective = () => {
    return (
        <div className="py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6">
                        <FaBullseye className="text-5xl md:text-6xl text-main/60 mx-auto" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Nosso Objetivo
                    </h1>
                    <p className="text-xl md:text-2xl text-main/60 max-w-2xl mx-auto font-light">
                        Democratizar o acesso à saúde nutricional através de tecnologias de ciência de dados aplicadas à alimentação saudável.
                    </p>
                </div>

                {/* Main Statement */}
                <div className="mb-32">
                    <div className="border-l-4 border-green-500 pl-8 py-6 rounded-r-2xl bg-main/5">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-main">
                            Desenvolver uma solução tecnológica acessível capaz de recomendar dietas personalizadas mediante <span className="font-semibold">exame clínico (hemograma completo)</span>, auxiliando na promoção de hábitos alimentares saudáveis e no combate às <span className="font-semibold">Doenças Crônicas Não Transmissíveis (DCNTs)</span>.
                        </p>
                    </div>
                </div>

                {/* Problem Context */}
                <div className="mb-32 bg-main/5 rounded-3xl p-12 border border-main/10">
                    <h2 className="text-3xl font-bold mb-8 text-center">O Problema</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Precarização dos hábitos alimentares</h4>
                                <p className="text-main/70">Intensificação da industrialização, desinformação e romantização de estilos de vida não saudáveis perpetuam um ciclo de má nutrição</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Barreiras de acesso</h4>
                                <p className="text-main/70">Parcelas vulneráveis da sociedade enfrentam obstáculos financeiros e de tempo para buscar acompanhamento profissional especializado</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Lacuna tecnológica</h4>
                                <p className="text-main/70">Aplicativos existentes (Samsung Health, FatSecret, Nutrium) não oferecem personalização baseada em dados clínicos individuais</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-3xl font-bold">Missão</h3>
                        </div>
                        <p className="text-lg text-main/70 leading-relaxed font-light">
                            Democratizar o acesso à alimentação saudável por meio de tecnologias de inteligência artificial que se adequam ao perfil clínico e metabólico do usuário, contribuindo para a preservação da saúde pública e formação de cidadãos conscientes.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-3xl font-bold">Visão</h3>
                        </div>
                        <p className="text-lg text-main/70 leading-relaxed font-light">
                            Configurar-se como uma solução viável e escalável que respeita preferências alimentares enquanto promove conscientização sobre práticas nutricionais mais saudáveis, combatendo DCNTs no Brasil.
                        </p>
                    </div>
                </div>

                {/* Como Funciona */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold mb-16 text-center">Como Funciona</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl transition-transform group-hover:scale-110">
                                01
                            </div>
                            <div className="flex-1 pt-2">
                                <h4 className="text-xl font-semibold mb-2">Upload do Hemograma Completo</h4>
                                <p className="text-main/70 leading-relaxed">
                                    Microserviço Python (PyMuPDF) extrai automaticamente métricas laboratoriais do PDF, padroniza nomenclaturas e unidades de medida, e integra com dados antropométricos no Supabase
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl transition-transform group-hover:scale-110">
                                02
                            </div>
                            <div className="flex-1 pt-2">
                                <h4 className="text-xl font-semibold mb-2">Análise por Inteligência Artificial Híbrida</h4>
                                <p className="text-main/70 leading-relaxed mb-3">
                                    <strong>FNN</strong> concatena features do usuário (hemograma, IMC, idade, objetivos) com dados da TACO e prediz compatibilidade alimentar (0-1). <strong>LLM</strong> estrutura refeições culinárias a partir de templates. <strong>BRKGA</strong> otimiza porções em gramas.
                                </p>
                                <div className="text-sm text-main/50 font-mono">Dataset sintético → Treinamento supervisionado → MSE Loss &lt; 0.05</div>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl transition-transform group-hover:scale-110">
                                03
                            </div>
                            <div className="flex-1 pt-2">
                                <h4 className="text-xl font-semibold mb-2">Cálculo de Metas Nutricionais</h4>
                                <p className="text-main/70 leading-relaxed">
                                    Fórmula de Mifflin-St Jeor calcula Taxa Metabólica Basal ajustada por nível de atividade física (sedentário: 1.2x, extremamente ativo: 1.9x) para definir metas calóricas e de macronutrientes
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl transition-transform group-hover:scale-110">
                                04
                            </div>
                            <div className="flex-1 pt-2">
                                <h4 className="text-xl font-semibold mb-2">Dieta Personalizada Contextualizada</h4>
                                <p className="text-main/70 leading-relaxed">
                                    Plano alimentar estruturalmente balanceado, culturalmente contextualizado (jurubeba, babaçu), nutricionalmente otimizado (precisão 97,6%) e entregue via React Native multiplataforma
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Diferenciais */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold mb-16 text-center">Diferenciais Técnicos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-main/20 rounded-2xl p-8 hover:border-green-500 transition-colors bg-main/5">
                            <FaBrain className="text-4xl text-main/60 mb-4" />
                            <h4 className="text-xl font-semibold mb-3">Base Científica</h4>
                            <p className="text-main/70">
                                Regras nutricionais validadas por matriz de correlação entre métricas sanguíneas e componentes alimentares da TACO
                            </p>
                        </div>

                        <div className="border border-main/20 rounded-2xl p-8 hover:border-green-500 transition-colors bg-main/5">
                            <FaUsers className="text-4xl text-main/60 mb-4" />
                            <h4 className="text-xl font-semibold mb-3">Contextualização Cultural</h4>
                            <p className="text-main/70">
                                Valorização da culinária regional brasileira supera limitações de dietas padronizadas europeias ou norte-americanas
                            </p>
                        </div>

                        <div className="border border-main/20 rounded-2xl p-8 hover:border-green-500 transition-colors bg-main/5">
                            <FaShieldAlt className="text-4xl text-main/60 mb-4" />
                            <h4 className="text-xl font-semibold mb-3">Segurança de Dados</h4>
                            <p className="text-main/70">
                                Conformidade SOC 2 e HIPAA com criptografia end-to-end, MFA, RBAC e proteção anti-DDoS no Supabase
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resultados Validados */}
                <div className="mb-32 bg-main/5 rounded-3xl p-12 border border-main/10">
                    <h2 className="text-3xl font-bold mb-12 text-center">Resultados Validados</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-main rounded-2xl p-6 border border-green-500/30">
                            <div className="text-4xl font-bold text-green-500 mb-2">97,6%</div>
                            <div className="text-sm text-main/70 mb-3">Precisão Calórica</div>
                            <p className="text-xs text-main/50">Meta: 1317 kcal | Fornecido: 1285 kcal | Desvio: -32 kcal</p>
                        </div>

                        <div className="bg-main rounded-2xl p-6 border border-green-500/30">
                            <div className="text-4xl font-bold text-green-500 mb-2">93,6%</div>
                            <div className="text-sm text-main/70 mb-3">Precisão em Macronutrientes</div>
                            <p className="text-xs text-main/50">Desvio médio absoluto: 6,4% (proteínas, carboidratos, gorduras)</p>
                        </div>

                        <div className="bg-main rounded-2xl p-6 border border-green-500/30">
                            <div className="text-4xl font-bold text-green-500 mb-2">43,0</div>
                            <div className="text-sm text-main/70 mb-3">Fitness Médio BRKGA</div>
                            <p className="text-xs text-main/50">Pontos por refeição (jantar: 26.48 - excelente)</p>
                        </div>

                        <div className="bg-main rounded-2xl p-6 border border-green-500/30">
                            <div className="text-4xl font-bold text-green-500 mb-2">&lt;15%</div>
                            <div className="text-sm text-main/70 mb-3">Taxa de Erro</div>
                            <p className="text-xs text-main/50">Adequação de quantidades em gramas pela otimização genética</p>
                        </div>
                    </div>

                    <div className="bg-main rounded-2xl p-6 border border-green-500/30">
                        <h4 className="font-semibold mb-3">Caso de Teste: Juliana Ferreira</h4>
                        <p className="text-sm text-main/70 mb-2">
                            <strong>Perfil:</strong> Mulher, 49 anos, 92 kg, 1,60m (IMC 35.9 - Obesidade Grau II), sedentária
                        </p>
                        <p className="text-sm text-main/70 mb-2">
                            <strong>Hemograma:</strong> Glicose 185 mg/dL ⚠, Colesterol 265 mg/dL ⚠, Triglicerídeos 285 mg/dL ⚠
                        </p>
                        <p className="text-sm text-main/70">
                            <strong>Resultado:</strong> Dieta estruturalmente balanceada com alimentos de baixo índice glicêmico (arroz integral, aveia), fontes de ômega-3 (sardinha, salmão) e fibras (ervilha, feijão)
                        </p>
                    </div>
                </div>

                {/* Justificativa */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-8 text-center">Justificativa</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <FaCheckCircle className="text-2xl text-green-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Relevância Social</h4>
                                <p className="text-main/70">
                                    Com 56,9% dos óbitos por DCNTs e 96 milhões de brasileiros com excesso de peso, ferramentas digitais acessíveis são urgentes para preservação da saúde pública
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaCheckCircle className="text-2xl text-green-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Inovação Tecnológica</h4>
                                <p className="text-main/70">
                                    Primeira solução híbrida integrando FNN + LLM + BRKGA para nutrição personalizada baseada em dados clínicos reais (hemograma completo)
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaCheckCircle className="text-2xl text-green-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Fundamentação Científica</h4>
                                <p className="text-main/70">
                                    Base de dados TACO (UNICAMP), regras nutricionais correlacionadas com parâmetros sanguíneos (LDL, HDL, glicose, vitaminas) e fórmulas validadas (Mifflin-St Jeor)
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaCheckCircle className="text-2xl text-green-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Ferramenta de Apoio</h4>
                                <p className="text-main/70">
                                    Não substitui profissionais de nutrição, mas atua como recurso complementar para populações com barreiras de acesso a acompanhamento especializado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impacto Esperado */}
                <div className="text-center py-16 border-t border-b border-main/20">
                    <FaChartLine className="text-5xl text-main/60 mx-auto mb-8" />
                    <h3 className="text-3xl font-bold mb-6">Impacto Esperado</h3>
                    <p className="text-xl text-main/70 max-w-3xl mx-auto leading-relaxed font-light mb-6">
                        Contribuir para a democratização da saúde nutricional no Brasil, empoderando especialmente populações vulneráveis a adotarem práticas alimentares mais saudáveis com autonomia e consciência.
                    </p>
                    <p className="text-lg text-main/60 max-w-3xl mx-auto leading-relaxed">
                        Ao reduzir barreiras econômicas e logísticas através de uma solução tecnológica escalável, o Health Factory visa promover prevenção de DCNTs, melhoria da qualidade de vida e avanços concretos nos indicadores de saúde pública brasileira.
                    </p>
                </div>

                {/* Limitações e Trabalho Futuro */}
                <div className="mt-32 bg-main/5 rounded-3xl p-12 border border-main/10">
                    <h2 className="text-3xl font-bold mb-8 text-center">Considerações e Próximos Passos</h2>
                    <div className="space-y-6">
                        <div className="bg-main rounded-2xl p-6 border border-main/20">
                            <h4 className="font-semibold mb-3 text--500">⚠ Limitação Atual</h4>
                            <p className="text-main/70">
                                O dataset utiliza regras criadas por pessoas não graduadas em nutrição. Para melhores resultados, é necessário trabalho conjunto com nutricionistas profissionais na validação e refinamento das regras de compatibilidade alimentar.
                            </p>
                        </div>

                        <div className="bg-main rounded-2xl p-6 border border-main/20">
                            <h4 className="font-semibold mb-3 text--500">✓ Validação Obtida</h4>
                            <p className="text-main/70">
                                A abordagem híbrida provou-se capaz de superar limitações de modelos isolados, resultando em recomendações humanas, práticas e com maior potencial de adesão do que sistemas baseados apenas em regras ou apenas em ML.
                            </p>
                        </div>

                        <div className="bg-main rounded-2xl p-6 border border-main/20">
                            <h4 className="font-semibold mb-3 text--500">→ Próximas Etapas</h4>
                            <ul className="text-main/70 space-y-2">
                                <li>• Parceria com profissionais de nutrição para validação clínica</li>
                                <li>• Expansão do dataset com casos reais documentados</li>
                                <li>• Implementação de sistema de feedback para aprendizado contínuo</li>
                                <li>• Integração de lembretes via chatbot (WhatsApp/Instagram)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objective;