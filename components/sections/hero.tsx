import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center h-full -mt-16">

                {/* Title Section */}
                <div className="mb-12 flex flex-col items-center">
                    <Image
                        src="/herocompras.png"
                        alt="COMPRASEG 2026 CONGRESSO NACIONAL DE COMPRAS DA SEGURANÇA PÚBLICA"
                        width={900}
                        height={300}
                        className="w-full max-w-5xl h-auto"
                        priority
                    />
                </div>

                {/* Date and Location */}
                {/* Date and Location */}
                <div className="mb-12 flex flex-col items-center gap-[37px]">
                    <p className="text-3xl md:text-5xl font-bold text-white tracking-wide font-display text-center">
                        12 A 14 DE MAIO DE 2026
                    </p>
                    <p className="text-[14px] md:text-[25px] font-bold text-white tracking-[0.35em] uppercase font-display text-center">
                        FLORIANÓPOLIS - SC
                    </p>
                </div>
            </div>
        </section>
    );
}
