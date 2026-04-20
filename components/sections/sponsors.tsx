"use client";

import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { src: "/patrocinadores/WhatsApp Image 2026-04-09 at 18.57.38.jpeg", alt: "Protecop" },
    { src: "/patrocinadores/WhatsApp Image 2026-04-09 at 18.57.28.jpeg", alt: "Militar Defense", className: "!h-32 md:!h-30 lg:!h-36" },
    { src: "/patrocinadores/Logo Nobel com fabricas - 3.png", alt: "Nobel Precision" },
    { src: "/patrocinadores/funcionalatt.png", alt: "Funcional Tech & Tactical" },
    { src: "/patrocinadores/4de02490-4a10-4532-9d3a-8342a783c4a5.jpg", alt: "ABVO - Associação Barriga Verde dos Oficiais Militares Estaduais" },
    { src: "/patrocinadores/onecine.png", alt: "One Cine", className: "!h-52 md:!h-52 lg:!h-60" },
];

export const Sponsors: React.FC = () => {
    return (
        <section id="patrocinadores" className="py-20 bg-white relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 mb-3">
                        Parceiros que investiram no COMPRASEG
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
                        Patrocinadores
                    </h2>
                    <div className="w-20 h-1 bg-[#00C1FF] mx-auto mt-6"></div>
                </motion.div>

                {/* Logos Grid - 3 em cima, 3 embaixo */}
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-8 md:gap-12">
                    {sponsors.map((sponsor, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center p-6"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={sponsor.src}
                                alt={sponsor.alt}
                                className={`h-36 md:h-36 lg:h-44 w-auto max-w-[280px] md:max-w-[350px] object-contain ${sponsor.className || ""}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
