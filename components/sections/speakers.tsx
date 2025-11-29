"use client";

import { User } from "lucide-react";

const speakers = [
    "Álvaro Capagio",
    "Felipe Dalenogare",
    "Jonas Lima",
    "Juliana Mendonça",
    "Lara Brainer",
    "Murilo Frigeri",
    "Noel Baratieri",
    "Thiago Carvalho",
    "Vitor Valle"
];

export function Speakers() {
    return (
        <section id="palestrantes" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Title Watermark */}
            <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h2 className="text-[200px] font-black text-white whitespace-nowrap leading-none">
                    PALESTRANTES
                </h2>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-none">
                        Palestrantes <br />
                        <span className="text-white">Confirmados</span>
                    </h2>
                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-2">
                        COMPRASEG
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {speakers.map((name, i) => (
                        <div key={i} className="group relative aspect-square rounded-[32px] overflow-hidden bg-gradient-to-br from-[#001845] to-[#00215E] border border-white/10 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,228,248,0.2)] transition-all duration-300">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors" />

                            {/* Name Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1">
                                <div className="bg-[#00C1FF] text-white font-bold text-sm md:text-[18px] leading-[1.2em] py-1 px-3 rounded-md inline-block shadow-lg transform group-hover:scale-105 transition-transform">
                                    {name.split(' ')[0]}
                                </div>
                                <div className="bg-[#00C1FF] text-white font-bold text-sm md:text-[18px] leading-[1.2em] py-1 px-3 rounded-md inline-block shadow-lg transform group-hover:scale-105 transition-transform delay-75">
                                    {name.split(' ').slice(1).join(' ')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
