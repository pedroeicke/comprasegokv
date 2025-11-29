import { Shield, Users, Scale, Anchor } from "lucide-react";

export function TargetAudience() {
    const cards = [
        {
            icon: Shield,
            title: "Órgãos de Segurança Pública",
            description: "Direcionado às instituições do Art. 144 da Constituição: Polícia Federal, PRF, Polícias Civil, Militar e Penal, e Corpos de Bombeiros.",
            tags: ["PF", "PRF", "PM", "PC", "Bombeiros"]
        },
        {
            icon: Anchor,
            title: "Forças Armadas & Defesa",
            description: "Essencial para Marinha, Exército e Aeronáutica, que compartilham demandas complexas de armamentos, viaturas e equipamentos de proteção.",
            tags: ["Marinha", "Exército", "Aeronáutica"]
        },
        {
            icon: Scale,
            title: "Legislativo, Judiciário & Guardas",
            description: "Para Polícias Legislativas, Guardas Municipais e órgãos de segurança do MP e Judiciário que realizam contratações de natureza policial.",
            tags: ["Guardas", "Polícia Legislativa", "MP", "Tribunais"]
        },
        {
            icon: Users,
            title: "Quem Faz Acontecer",
            description: "O evento definitivo para Agentes de Contratação, Gestores, Fiscais, Assessores Jurídicos e Advogados que atuam na ponta da lança.",
            tags: ["Gestores", "Fiscais", "Jurídico", "Agentes"]
        }
    ];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Para quem é o <span className="text-secondary">COMPRASEG?</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Um encontro estratégico para todos os atores que movem as contratações de segurança pública no Brasil.
                    </p>
                </div>

                <div className="grid gap-6 max-w-5xl mx-auto">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,228,248,0.15)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative bg-white h-full rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                                {/* Icon/Image Area */}
                                <div className="shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-[#031647] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <card.icon className="w-10 h-10 text-secondary" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-primary/70 text-lg leading-relaxed mb-6">
                                        {card.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {card.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-bold uppercase tracking-wider border border-primary/10 group-hover:border-secondary/50 group-hover:text-primary transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow Indicator */}
                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/10 text-primary/30 group-hover:border-secondary group-hover:text-secondary transition-all duration-300 group-hover:rotate-45">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
