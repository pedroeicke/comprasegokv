"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';
import { SECURITY_ORGANS, ARMED_FORCES, POLICE_NATURE_ORGANS, DEFENSE_COMPANIES, AUDIENCE_ROLES } from '../constants';

export const TargetAudience: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = window.matchMedia('(pointer: coarse)').matches;
            const isSmall = window.innerWidth < 1024;
            setIsMobile(isTouch || isSmall);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mobileGlowVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        glow: {
            opacity: 1,
            y: 0,
            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 30px rgba(0, 193, 255, 0.6)", "0px 0px 0px rgba(0,0,0,0)"],
            transition: {
                opacity: { duration: 0.5 },
                y: { duration: 0.5 },
                boxShadow: {
                    duration: 1.5,
                    times: [0, 0.5, 1]
                }
            }
        }
    };

    const getAnimationProps = (delay: number = 0) => {
        if (isMobile) {
            return {
                initial: "hidden",
                whileInView: "glow",
                viewport: { once: true, margin: "-20%" } as any,
                variants: mobileGlowVariant
            };
        }
        return {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            whileHover: {
                scale: 1.02,
                boxShadow: "0px 0px 30px rgba(0, 193, 255, 0.4)",
                borderColor: "#00C1FF",
                transition: { duration: 0.3 }
            },
            viewport: { once: true },
            transition: { delay }
        };
    };

    return (
        // Removido border-t para evitar linha duplicada visual
        // Mantido bg-transparent para o MouseGlow funcionar
        <section id="publico" className="w-full relative bg-transparent pt-24 pb-24 overflow-hidden">

            {/* Background Subtle Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue/5 blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-tactical-gold font-bold tracking-widest uppercase text-[18px] mb-2 block">Público Alvo</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
                        Para quem é o COMPRASEG?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#62c1ef] to-[#1771da] mx-auto"></div>
                </div>

                {/* --- GRID PRINCIPAL (3 COLUNAS) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">

                    {/* CARD 1: SEGURANÇA PÚBLICA (AZUL) */}
                    <motion.div
                        {...getAnimationProps(0)}
                        className="flex flex-col h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-tactical-dark to-tactical-dark border border-[#00C1FF] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,193,255,0.4)] transition-all shadow-lg group"
                    >
                        <div className="p-8 border-b border-white/5 bg-brand-gold/5 min-h-[160px] flex items-center">
                            {/* Ícone removido conforme solicitado */}
                            <h3 className="text-2xl font-display font-bold text-white uppercase w-full">Segurança Pública</h3>

                        </div>
                        <div className="p-6 flex-1 bg-black/20">
                            <ul className="space-y-3">
                                {SECURITY_ORGANS.map((org, i) => (
                                    <li key={i} className="flex items-center gap-3 text-tactical-metal group-hover:text-white transition-colors">

                                        <span className="text-[17px] font-medium tracking-wide">{org.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* CARD 2: FORÇAS ARMADAS (DOURADO) */}
                    <motion.div
                        {...getAnimationProps(0.2)}
                        className="flex flex-col h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-tactical-dark to-tactical-dark border border-[#00C1FF] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,193,255,0.4)] transition-all shadow-lg group"
                    >
                        <div className="p-8 border-b border-white/5 bg-brand-gold/5 min-h-[160px] flex items-center">
                            {/* Ícone removido conforme solicitado */}
                            <h3 className="text-2xl font-display font-bold text-white uppercase w-full">Forças Armadas</h3>

                        </div>
                        <div className="p-6 flex-1 bg-black/20">
                            <ul className="space-y-3">
                                {ARMED_FORCES.map((org, i) => (
                                    <li key={i} className="flex items-center gap-3 text-tactical-metal group-hover:text-white transition-colors">

                                        <span className="text-[17px] font-medium tracking-wide">{org.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* CARD 3: NATUREZA POLICIAL (PRATA/CINZA) */}
                    <motion.div
                        {...getAnimationProps(0.4)}
                        className="flex flex-col h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-tactical-dark to-tactical-dark border border-[#00C1FF] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,193,255,0.4)] transition-all shadow-lg group"
                    >
                        <div className="p-8 border-b border-[#00C1FF]/20 bg-[#00C1FF]/5 min-h-[160px] flex items-center">
                            {/* Ícone removido conforme solicitado */}
                            <h3 className="text-2xl font-display font-bold text-white uppercase w-full">Órgãos de natureza Policial</h3>

                        </div>
                        <div className="p-6 flex-1 bg-black/20">
                            <ul className="space-y-3">
                                {POLICE_NATURE_ORGANS.map((org, i) => (
                                    <li key={i} className="flex items-center gap-3 text-tactical-metal group-hover:text-white transition-colors">

                                        <span className="text-[17px] font-medium tracking-wide">{org.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* CARD 4: EMPRESAS DE DEFESA (VERDE/MILITAR) */}
                    <motion.div
                        {...getAnimationProps(0.6)}
                        className="flex flex-col h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-tactical-dark to-tactical-dark border border-[#00C1FF] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,193,255,0.4)] transition-all shadow-lg group"
                    >
                        <div className="p-8 border-b border-white/5 bg-brand-gold/5 min-h-[160px] flex items-center">
                            <h3 className="text-2xl font-display font-bold text-white uppercase w-full">Empresas De Defesa E Segurança</h3>
                        </div>
                        <div className="p-6 flex-1 bg-black/20">
                            <ul className="space-y-3">
                                {DEFENSE_COMPANIES.map((company, i) => (
                                    <li key={i} className="flex items-center gap-3 text-tactical-metal group-hover:text-white transition-colors">
                                        <span className="text-[17px] font-medium tracking-wide">{company.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* --- FAIXA DE CARGOS --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-gradient-to-r from-tactical-dark to-tactical-midnight border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-t from-[#62c1ef] to-[#1771da]"></div>

                    <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                        <div className="lg:w-1/4">

                            <h3 className="text-3xl font-display font-bold text-white uppercase leading-none">
                                Cargos E<br />Funções
                            </h3>
                        </div>

                        <div className="lg:w-3/4 grid md:grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-x-8 gap-y-3 w-full">
                            {AUDIENCE_ROLES.map((role, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <Check className="w-4 h-4 text-tactical-gold mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-tactical-metal text-[17px] group-hover:text-white transition-colors">{role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
