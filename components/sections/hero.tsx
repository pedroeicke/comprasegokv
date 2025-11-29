import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_#000000_100%)] opacity-90" />

                {/* Watermark Text Effect */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none">
                    <span className="text-[20vw] font-black text-white/5 leading-none">COMPRA</span>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none">
                    <span className="text-[20vw] font-black text-white/5 leading-none">SEG</span>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center h-full">

                {/* Title Section */}
                <div className="mb-8 flex flex-col items-center">
                    {/* Logo Placeholder - replicating the 'wing' shape if possible or just using text for now */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none flex flex-col md:flex-row items-center gap-4">
                        <span className="tracking-tight">COMPRASEG</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e4f8] to-[#0057E1]">
                            2026
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-medium mt-4 tracking-wide uppercase">
                        Congresso Nacional de Compras da Segurança Pública
                    </p>
                </div>

                {/* Date and Location */}
                <div className="mb-12 space-y-2">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        12 A 14 DE MAIO DE 2026
                    </p>
                    <p className="text-sm md:text-base font-bold text-white/80 tracking-widest uppercase">
                        FLORIANÓPOLIS - SC • CENTRO DE EVENTOS SQUARE SC
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
                    <button className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-[#0057E1] to-[#00e4f8] text-white font-black text-sm md:text-base uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,228,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                        GARANTA SUA INSCRIÇÃO!
                    </button>
                    <button className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-[#0057E1] to-[#00e4f8] text-white font-black text-sm md:text-base uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,228,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                        BAIXE A PROGRAMAÇÃO!
                    </button>
                </div>
            </div>
        </section>
    );
}
