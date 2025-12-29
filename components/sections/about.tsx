"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="sobre" className="py-12 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Coluna de Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Sobre o COMPRASEG
                            </h2>
                            <div className="w-20 h-1 bg-[#00C1FF] mt-6"></div>
                        </div>

                        <div className="space-y-6 text-gray-200 text-lg leading-relaxed text-justify">
                            <p>
                                Contratações do setor de Segurança Pública caracterizam-se por alta complexidade técnica e aspectos sensíveis de tecnologia, qualidade e segurança.
                            </p>

                            <p>
                                A qualidade insuficiente ou falhas de funcionamento em produtos como armas, munições, viaturas e equipamentos de proteção podem resultar em fracassos de atividades de patrulhamento, atendimento a ocorrências, controle de distúrbios, operações policiais especiais e operações de salvamento e resgate.
                            </p>

                            <p>
                                Por isso, o aperfeiçoamento do planejamento e execução dos processos de compras da segurança pública requer dos profissionais dedicados às atividades de capacitação não apenas habilidade em matéria de licitações e contratos, mas também o conhecimento sobre as rotinas, realidades diversas, condições de emprego e riscos enfrentados pelos profissionais da segurança pública.
                            </p>

                            <div className="glass-panel p-6 rounded-xl border-l border-t border-white/10 mt-4">
                                <p className="text-white font-medium text-base">
                                    Com base nas características específicas da Segurança Pública, o COMPRASEG tem por finalidade oferecer aos profissionais responsáveis pelas contratações, desde a fase de planejamento até a execução e fiscalização dos contratos, os conhecimentos, habilidades e experiências necessárias para a aquisição das melhores soluções existentes no mercado, com segurança jurídica e qualidade técnica
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coluna Visual (Imagens) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full"
                    >
                        {/* Imagem de Fundo (Operacional) */}
                        <div className="absolute top-0 right-0 w-4/5 h-3/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                            <img
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop"
                                alt="Operação Policial Tática"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                        </div>

                        {/* Imagem da Frente (Gestão/Reunião) */}
                        <div className="absolute bottom-0 left-0 w-4/5 h-3/5 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 bg-tactical-midnight">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="Gestão de Contratos"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tactical-midnight via-transparent to-transparent"></div>
                        </div>

                        {/* Elemento Decorativo (Conector) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-tactical-gold/30 rounded-full z-30 flex items-center justify-center backdrop-blur-sm">
                            <div className="w-24 h-24 bg-tactical-midnight/80 rounded-full flex items-center justify-center border border-white/10">
                                <span className="font-display font-bold text-tactical-gold text-xl text-center leading-none">
                                    Foco<br />Total
                                </span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};
