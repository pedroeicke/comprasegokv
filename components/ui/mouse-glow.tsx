"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
    // Inicializa fora da tela para evitar a bola parada no canto superior esquerdo ao carregar
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Mouse Spotlight */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-[#020440] blur-[120px] mix-blend-screen"
                style={{
                    left: mouseX,
                    top: mouseY,
                    x: "-50%", // Centraliza o brilho exatamente na ponta do cursor
                    y: "-50%",
                }}
            />
        </div>
    );
}
