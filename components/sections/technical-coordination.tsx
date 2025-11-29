"use client";

import { useState } from "react";
import { User, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Coordinator {
    name: string;
    role: string;
    bio: string[];
}

export function TechnicalCoordination() {
    const [selectedCoordinator, setSelectedCoordinator] = useState<Coordinator | null>(null);

    const coordinators: Coordinator[] = [
        {
            name: "Álvaro Capagio",
            role: "Regulador Federal & Doutorando em Direito",
            bio: [
                "Regulador Federal, ocupante de cargo de Especialista em Regulação privativo de bacharel em Direito. Egresso da Força Aérea Brasileira, tendo exercido suas funções militares no aceite técnico e operações assistidas para implantação de sítios aeronáuticos do Sistema de Vigilância da Amazônia e do Quarto Centro Integrado de Defesa Aérea e Controle de Tráfego Aéreo - Cindacta IV.",
                "É Doutorando em Direito da Regulação pela Universidade de Brasília, Mestre em Direito Internacional e Sustentabilidade pela Universidade Federal de Santa Catarina e Especialista em Direito Público pela Escola Paulista da Magistratura. Diplomado pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra e pelo Curso Superior de Defesa.",
                "É professor dos cursos de pós-graduação em Licitações e Contratos do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito. Professor do Curso de Gestão de Riscos Contratuais do Instituto Internacional de Inovação em Políticas Públicas e Soluções.",
                "Autor de diversos livros jurídicos, dentre eles: “Nova Lei de Licitações e Contratos Administrativos” e “Curso de Direito Administrativo”, publicados pela editora Saraiva Jur.",
                "É avaliador líder ISSO 17020 certificado pela Sociedade Brasileira de Metrologia. Foi membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade."
            ]
        },
        {
            name: "Murilo Frigeri",
            role: "Oficial de Polícia Militar & Pesquisador",
            bio: [
                "É Oficial de Polícia Militar. Chefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco. Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo.",
                "Atribuições profissionais de pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar.",
                "Atuação nos grupos de trabalho para atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos e; inovação de fuzis."
            ]
        },
        {
            name: "Noel Baratieri",
            role: "Advogado & Doutor em Direito Administrativo",
            bio: [
                "Advogado. Doutor e Mestre em Direito Administrativo pela Universidade Federal de Santa Catarina. Membro Fundador do Instituto de Direito Administrativo de Santa Catarina.",
                "Foi consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil e Diretor-Executivo do Instituto de Direito Administrativo de Santa Catarina.",
                "Foi professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina.",
                "É autor de diversos livros jurídicos, dentre eles: “Serviço Público na Constituição Federal de 1988” e “Métodos de Negociação de Harvard na Administração Pública Consensual”, publicados pela editora Livraria do Advogado, e “Aspectos polêmicos da nova lei de licitações e contratos”, publicado pela editora Forum."
            ]
        }
    ];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        COORDENAÇÃO <span className="text-secondary">TÉCNICA</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Conheça os especialistas responsáveis pela curadoria técnica do evento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCoordinator(person)}
                            className="relative bg-gradient-to-r from-[#001845] to-[#00215E] border-2 border-[#00e4f8] rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-[0_0_20px_rgba(0,228,248,0.3)] transition-all duration-300 group overflow-hidden"
                        >
                            {/* Avatar */}
                            <div className="shrink-0 w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                                <User className="w-10 h-10 text-white/80" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 z-10">
                                <h3 className="text-white font-extrabold text-lg leading-tight mb-1">
                                    {person.name}
                                </h3>
                                <p className="text-white font-medium italic text-sm truncate">
                                    {person.role}
                                </p>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#00e4f8]/10 rounded-full blur-2xl pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCoordinator && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="bg-[#031439] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCoordinator(null)}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8">
                            <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <User className="w-10 h-10 text-white/40" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {selectedCoordinator.name}
                                    </h3>
                                    <p className="text-secondary font-medium text-lg">
                                        {selectedCoordinator.role}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 text-white/80 leading-relaxed">
                                {selectedCoordinator.bio.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
