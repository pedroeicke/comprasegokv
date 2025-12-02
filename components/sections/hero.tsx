import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                >
                    <source src="/videobg.mp4" type="video/mp4" />
                </video>

                {/* Spotlight Effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tactical-gold/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />

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
                        <BrandLogo size="xl" />
                        <span className="text-tactical-gold">
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
                        FLORIANÓPOLIS - SC
                    </p>
                </div>
            </div>
        </section>
    );
}
