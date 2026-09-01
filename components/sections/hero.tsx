import Image from "next/image";

const apoioLogos = [
    { src: "/logosapoio/solvy.png", alt: "Solvy", className: "!h-8 md:!h-16 lg:!h-20" },
    { src: "/logosapoio/1.png", alt: "APPS" },
    { src: "/logosapoio/2.png", alt: "AGEPPEN Brasil", className: "!h-16 md:!h-36 lg:!h-44" },
    { src: "/logosapoio/4.png", alt: "Piloto Policial", className: "!h-6 md:!h-12 lg:!h-14" },
    { src: "/logosapoio/COP - INTERNATIONAL COM LEGENDA - HORIZONTAL_SOMBREADA.png", alt: "COP International" },
    { src: "/logosapoio/5.png", alt: "FENEME", className: "!h-16 md:!h-36 lg:!h-44" },
    { src: "/logosapoio/senai.png", alt: "SENAI CETIQT", className: "!h-6 md:!h-10 lg:!h-12" },
    { src: "/logosapoio/acors.png", alt: "ACORS", className: "!h-12 md:!h-28 lg:!h-32" },
    { src: "/logosapoio/habitus.png", alt: "Habitus", className: "!h-8 md:!h-16 lg:!h-20" },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden pt-32 md:pt-44">
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

            </div>

            {/* Main content */}
            <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">

                    {/* Em breve */}
                    <div className="mb-10 md:mb-14 flex items-center gap-4">
                        <span className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-tactical-cyan/70" />
                        <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.5em] text-tactical-cyan">
                            Em breve
                        </span>
                        <span className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-tactical-cyan/70" />
                    </div>

                    {/* Logo COMPRASEG 2027 */}
                    <h1 className="w-full max-w-5xl">
                        <Image
                            src="/compraseg2027.png"
                            alt="COMPRASEG 2027 — Congresso Nacional de Compras da Segurança Pública"
                            width={2062}
                            height={298}
                            className="w-full h-auto"
                            priority
                        />
                    </h1>

                    {/* Separador */}
                    <div className="mt-7 md:mt-9 h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    {/* Retrospectiva 2026 */}
                    <a
                        href="#sobre"
                        className="group mt-6 md:mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 md:px-8 md:py-4 backdrop-blur-sm transition-all duration-300 hover:border-tactical-cyan/70 hover:bg-tactical-cyan/10"
                    >
                        <span className="text-sm md:text-lg font-semibold text-white/90 transition-colors group-hover:text-white">
                            Confira como foi o evento de 2026
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 md:h-5 md:w-5 text-tactical-cyan transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Apoio - Infinite Scrolling Logos */}
            <div className="relative z-10 pb-4 pt-4 md:pt-8 flex flex-col items-center">
                <p className="text-xs md:text-base font-semibold text-white/60 tracking-[0.3em] uppercase mb-3 md:mb-4">
                    Apoio
                </p>
                <div className="w-full max-w-7xl mx-auto overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div className="animate-scroll-logos flex items-center gap-6 md:gap-16 w-max">
                        {/* First set */}
                        {apoioLogos.map((logo, i) => (
                            <div key={`a-${i}`} className="flex items-center justify-center shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`h-16 md:h-32 lg:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {apoioLogos.map((logo, i) => (
                            <div key={`b-${i}`} className="flex items-center justify-center shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`h-16 md:h-32 lg:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
