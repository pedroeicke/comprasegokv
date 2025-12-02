"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AmbientLight: React.FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">

            {/* --- LUZES DE VIATURA (SISTEMA DE CERCO / MULTI-FOCO) --- */}
            {/* Ajuste: Opacidade média (Peak 0.4 - 0.5) para equilíbrio visual */}

            {/* LADO ESQUERDO */}

            {/* Topo Esquerda - AZUL 1 (#020440) */}
            <motion.div
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className="absolute top-[5%] left-[-150px] w-[600px] h-[600px] bg-[#020440]/30 blur-[100px] rounded-full mix-blend-screen"
            />

            {/* Meio Esquerda - AZUL 2 (#01032e) */}
            <motion.div
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
                className="absolute top-[40%] left-[-200px] w-[700px] h-[700px] bg-[#01032e]/20 blur-[120px] rounded-full mix-blend-screen"
            />

            {/* Base Esquerda - AZUL 3 (#01021c) */}
            <motion.div
                animate={{ opacity: [0.1, 0.45, 0.1] }}
                transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[-10%] left-[-150px] w-[600px] h-[600px] bg-[#01021c]/30 blur-[100px] rounded-full mix-blend-screen"
            />


            {/* LADO DIREITO */}

            {/* Topo Direita - AZUL 1 (#020440) */}
            <motion.div
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[10%] right-[-150px] w-[600px] h-[600px] bg-[#020440]/20 blur-[100px] rounded-full mix-blend-screen"
            />

            {/* Meio Direita - AZUL 2 (#01032e) */}
            <motion.div
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[50%] right-[-200px] w-[700px] h-[700px] bg-[#01032e]/30 blur-[120px] rounded-full mix-blend-screen"
            />

            {/* Base Direita - AZUL 3 (#01021c) */}
            <motion.div
                animate={{ opacity: [0.1, 0.35, 0.1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
                className="absolute bottom-[5%] right-[-150px] w-[600px] h-[600px] bg-[#01021c]/30 blur-[100px] rounded-full mix-blend-screen"
            />

            {/* Vignette Escura para focar no centro */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,1,10,0.8)_100%)] z-10"></div>

        </div>
    );
};
