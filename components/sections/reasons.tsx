"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';

export const Reasons: React.FC = () => {
    return (
        <section id="motivos" className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">
                        Por que <span className="text-brand-gold">Participar?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REASONS.map((reason, idx) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black/80 to-black/90 p-8 rounded-2xl border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-sm"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <reason.icon className="w-24 h-24 text-white" />
                            </div>

                            <div className="relative z-10 flex-1">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tactical-gold group-hover:text-tactical-black transition-all text-tactical-gold">
                                    <reason.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">{reason.title}</h3>
                                <p className="text-tactical-metal text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tactical-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
