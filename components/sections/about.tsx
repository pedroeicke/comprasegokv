import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="sobre" className="min-h-[711px] relative overflow-hidden flex items-center bg-primary bg-[url('/about-bg.png')] bg-cover bg-center bg-no-repeat">
            {/* Dark overlay to ensure text readability if needed, matching the 'bgImage' class likely having some tint */}
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
            <div className="container mx-auto px-4 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full relative">
                    {/* Text Content - Left Side */}
                    <div className="order-1 lg:w-[500px] px-[30px] relative z-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Tudo começou com um desafio: <span className="text-secondary">modernizar as compras públicas.</span>
                        </h2>

                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                            Contratações na Segurança Pública exigem alta complexidade técnica. Falhas em equipamentos podem comprometer operações críticas e vidas.
                        </p>

                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            O COMPRASEG nasce para capacitar gestores com conhecimento prático, garantindo aquisições eficientes, seguras e com respaldo jurídico. É mais que um evento: é um movimento de transformação.
                        </p>

                        <Button className="rounded-full bg-gradient-to-l from-[#00e4f8] to-[#002ccc] text-white hover:shadow-[0_0_30px_rgba(0,228,248,0.5)] font-bold py-6 px-8 text-lg border-0 transition-all duration-300 transform hover:-translate-y-1">
                            FAÇA PARTE
                        </Button>
                    </div>

                    {/* Video Placeholder - Right Side */}
                    <div className="order-2 relative z-10 mt-10 lg:mt-0">
                        <div className="w-full lg:w-[766px] h-[435px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group cursor-pointer shadow-2xl">
                            {/* Video Thumbnail Placeholder */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-medium text-sm">Assista ao vídeo manifesto</p>
                            </div>
                        </div>

                        {/* Background Glow Effects */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
