"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="sobre" className="py-24 bg-transparent relative">
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
                                A IDEIA DO COMPRASEG
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
                                <p className="text-white text-lg">
                                    Com base nas características específicas da Segurança Pública, o COMPRASEG tem por finalidade oferecer aos profissionais responsáveis pelas contratações, desde a fase de planejamento até a execução e fiscalização dos contratos, os conhecimentos, habilidades e experiências necessárias para a aquisição das melhores soluções existentes no mercado, com segurança jurídica e qualidade técnica.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coluna Visual (Vídeo) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative w-full flex items-center justify-center p-4 lg:p-0"
                    >
                        <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-black/50 backdrop-blur-sm">
                            <video
                                src="/V6COMPRASSEG.mp4"
                                className="w-full h-auto object-contain"
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
