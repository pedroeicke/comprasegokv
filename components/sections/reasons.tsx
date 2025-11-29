import { Search, Gavel, Radar, ShieldCheck } from "lucide-react";

export function Reasons() {
    const reasons = [
        {
            icon: Search,
            title: "ESPECIFICAR",
            description: "Os melhores produtos e serviços disponíveis no mercado e as soluções tecnológicas mais adequadas para as demandas da Segurança Pública."
        },
        {
            icon: Gavel,
            title: "RESOLVER",
            description: "Questões técnicas e jurídicas e casos práticos sobre contratações da Segurança Pública."
        },
        {
            icon: Radar,
            title: "ANTECIPAR",
            description: "A identificação de riscos às contratações da Segurança Pública e desenhar previamente as medidas eficazes para a solução."
        },
        {
            icon: ShieldCheck,
            title: "PROTEGER",
            description: "Os gestores da Segurança Pública, evitando-se a responsabilização por falhas evitáveis."
        }
    ];

    return (
        <section className="py-24 bg-[#031439] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        Motivos para <span className="text-[#00e4f8]">Participar</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon Container */}
                            <div className="w-24 h-24 mb-6 rounded-2xl bg-[#00215E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[#00e4f8]/30">
                                <item.icon className="w-10 h-10 text-[#00e4f8]" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00e4f8] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
