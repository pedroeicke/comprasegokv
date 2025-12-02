"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// --- DADOS (Integrados para facilitar a portabilidade) ---

const COORDINATORS = [
    {
        id: 'c1',
        name: 'Álvaro Capagio',
        shortRole: 'Regulador Federal e Especialista em Regulação',
        image: 'https://picsum.photos/400/400',
        fullBio: `Regulador Federal, ocupante de cargo de Especialista em Regulação privativo de bacharel em Direito. Egresso da Força Aérea Brasileira, tendo exercido suas funções militares no aceite técnico e operações assistidas para implantação de sítios aeronáuticos do Sistema de Vigilância da Amazônia e do Quarto Centro Integrado de Defesa Aérea e Controle de Tráfego Aéreo - Cindacta IV.\n\nÉ Doutorando em Direito da Regulação pela Universidade de Brasília, Mestre em Direito Internacional e Sustentabilidade pela Universidade Federal de Santa Catarina e Especialista em Direito Público pela Escola Paulista da Magistratura. Diplomado pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra e pelo Curso Superior de Defesa.\n\nÉ professor dos cursos de pós-graduação em Licitações e Contratos do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito. Professor do Curso de Gestão de Riscos Contratuais do Instituto Internacional de Inovação em Políticas Públicas e Soluções.`
    },
    {
        id: 'c2',
        name: 'Murilo Frigeri',
        shortRole: 'Oficial de Polícia Militar - Especialista Bélico',
        image: 'https://picsum.photos/401/401',
        fullBio: `É Oficial de Polícia Militar. Chefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco. Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo.\n\nAtribuições profissionais de pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar.`
    },
    {
        id: 'c3',
        name: 'Noel Baratieri',
        shortRole: 'Advogado, Doutor e Mestre em Direito Administrativo',
        image: 'https://picsum.photos/402/402',
        fullBio: `Advogado. Doutor e Mestre em Direito Administrativo pela Universidade Federal de Santa Catarina. Membro Fundador do Instituto de Direito Administrativo de Santa Catarina.\n\nFoi consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil e Diretor-Executivo do Instituto de Direito Administrativo de Santa Catarina.`
    }
];

const SPEAKERS = [
    {
        id: 's1',
        name: 'Álvaro Capagio',
        image: 'https://picsum.photos/300/300?random=1',
        shortRole: 'Regulador Federal',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's2',
        name: 'Felipe Dalenogare',
        image: 'https://picsum.photos/300/300?random=2',
        shortRole: 'Especialista em Segurança',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's3',
        name: 'Jonas Lima',
        image: 'https://picsum.photos/300/300?random=3',
        shortRole: 'Consultor Técnico',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's4',
        name: 'Juliana Mendonça',
        image: 'https://picsum.photos/300/300?random=4',
        shortRole: 'Advogada Especialista',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's5',
        name: 'Lara Brainer',
        image: 'https://picsum.photos/300/300?random=5',
        shortRole: 'Gestora de Projetos',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's6',
        name: 'Murilo Frigeri',
        image: 'https://picsum.photos/300/300?random=6',
        shortRole: 'Oficial da PM',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's7',
        name: 'Noel Baratieri',
        image: 'https://picsum.photos/300/300?random=7',
        shortRole: 'Doutor em Direito',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's8',
        name: 'Thiago Carvalho',
        image: 'https://picsum.photos/300/300?random=8',
        shortRole: 'Consultor de Segurança',
        fullBio: 'Biografia completa em breve.'
    },
    {
        id: 's9',
        name: 'Vitor Valle',
        image: 'https://picsum.photos/300/300?random=9',
        shortRole: 'Especialista em Logística',
        fullBio: 'Biografia completa em breve.'
    },
];

// --- COMPONENTE PRINCIPAL ---

export default function Experts() {
    const [activeBio, setActiveBio] = useState<string | null>(null);

    return (
        <div className="bg-transparent text-white relative z-10">

            {/* SEÇÃO 1: COORDENAÇÃO TÉCNICA */}
            <section id="coordenacao" className="py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-tactical-gold font-bold uppercase tracking-widest text-sm block mb-2">
                            Liderança Técnica
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Coordenação Técnica
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {COORDINATORS.map((coord) => (
                            <div key={coord.id} className="group relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                                {/* Imagem Full Color */}
                                <img
                                    src={coord.image}
                                    alt={coord.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300">{coord.name}</h3>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(coord.id)}
                                            className="text-tactical-gold hover:text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest mt-4"
                                        >
                                            <ArrowRight size={16} className="text-tactical-gold" />
                                            VER CURRÍCULO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: PALESTRANTES */}
            <section id="palestrantes" className="py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Palestrantes Confirmados
                        </h2>
                        <div className="h-1 w-24 bg-tactical-gold mx-auto"></div>
                        <p className="text-tactical-metal mt-6 max-w-2xl mx-auto">
                            Grandes autoridades e especialistas da segurança pública reunidos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {SPEAKERS.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="group relative aspect-square rounded-lg overflow-hidden shadow-lg"
                            >
                                {/* Imagem Full Color */}
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white mb-1 transform transition-all duration-300">{speaker.name}</h3>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(speaker.id)}
                                            className="text-tactical-gold hover:text-white text-xs font-bold flex items-center gap-2 uppercase tracking-widest mt-3"
                                        >
                                            <ArrowRight size={14} className="text-tactical-gold" />
                                            VER CURRÍCULO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL DE CURRÍCULO (Compartilhado) */}
            <AnimatePresence>
                {activeBio && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveBio(null)}
                            className="absolute inset-0 bg-tactical-black/90 backdrop-blur-sm"
                        />

                        {/* Janela Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-tactical-panel border border-tactical-cyan/50 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm relative z-10 p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <button
                                onClick={() => setActiveBio(null)}
                                className="absolute top-4 right-4 text-tactical-metal hover:text-white transition-colors bg-tactical-black/20 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {[...COORDINATORS, ...SPEAKERS].filter(c => c.id === activeBio).map(c => (
                                <div key={c.id} className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-tactical-cyan mb-6">
                                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{c.name}</h3>
                                    <p className="text-tactical-cyan text-lg font-medium mb-6 border-b border-white/10 pb-4 inline-block">
                                        {c.shortRole}
                                    </p>
                                    <div className="prose prose-invert prose-p:text-tactical-metal prose-p:leading-relaxed text-justify">
                                        {c.fullBio.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="mb-4 text-base font-light">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
