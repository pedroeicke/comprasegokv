import Image from "next/image";

const apoioLogos = [
    { src: "/logosapoio/1.png", alt: "APPS" },
    { src: "/logosapoio/2.png", alt: "AGEPPEN Brasil", className: "md:!h-36 lg:!h-44" },
    { src: "/logosapoio/3.png", alt: "Baratieri Advogados" },
    { src: "/logosapoio/4.png", alt: "Piloto Policial", className: "!h-6 md:!h-12 lg:!h-14" },
    { src: "/logosapoio/5.png", alt: "FENEME", className: "md:!h-36 lg:!h-44" },
    { src: "/logosapoio/COP - INTERNATIONAL COM LEGENDA - HORIZONTAL_SOMBREADA.png", alt: "COP International" },
];

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
                <div className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none">
                    <span className="text-[20vw] font-black text-white/5 leading-none">COMPRA</span>
                </div>
                <div className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none">
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
                <div className="mb-12 flex flex-col items-center gap-[37px]">
                    <p className="text-3xl md:text-5xl font-bold text-white tracking-wide font-display text-center">
                        12 A 14 DE MAIO DE 2026
                    </p>
                    <p className="text-[14px] md:text-[25px] font-bold text-white tracking-[0.35em] uppercase font-display text-center">
                        FLORIANÓPOLIS - SC
                    </p>
                </div>
            </div>

            {/* Apoio - Logos (bottom of hero) */}
            <div className="absolute bottom-4 md:bottom-4 left-0 right-0 z-10 flex flex-col items-center">
                <p className="text-xs md:text-base font-semibold text-white/60 tracking-[0.3em] uppercase mb-3 md:mb-1">
                    Apoio
                </p>
                {/* Desktop */}
                <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-10 px-4 w-full max-w-7xl mx-auto">
                    {apoioLogos.map((logo, i) => (
                        <div key={i} className="flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={`h-32 lg:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
                            />
                        </div>
                    ))}
                </div>
                {/* Mobile: row of 4 + row of 2 */}
                <div className="md:hidden flex flex-col items-center gap-2 w-full">
                    <div className="flex justify-center items-center gap-5">
                        {apoioLogos.slice(0, 4).map((logo, i) => (
                            <div key={i} className="flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`h-10 w-auto object-contain opacity-80 ${logo.className?.replace(/md:\S+/g, '').replace(/lg:\S+/g, '') || ""}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        {apoioLogos.slice(4).map((logo, i) => (
                            <div key={i} className="flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`h-10 w-auto object-contain opacity-80 ${logo.className?.replace(/md:\S+/g, '').replace(/lg:\S+/g, '') || ""}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
