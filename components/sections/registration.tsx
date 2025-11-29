import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Registration() {
    return (
        <section id="inscricao" className="py-24 bg-primary/95 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Inscrição
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Garanta sua participação no maior evento de compras da segurança pública.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-secondary/50 transition-colors">
                    <div className="p-8 text-center border-b border-white/10">
                        <h3 className="text-xl font-medium text-white mb-2">Passe Completo</h3>
                        <div className="text-4xl font-bold text-white mb-2">
                            R$ 5.400,00
                        </div>
                        <p className="text-secondary text-sm font-medium">
                            Desconto para grupos com mais de 4 servidores
                        </p>
                    </div>

                    <div className="p-8">
                        <ul className="space-y-4 mb-8">
                            {[
                                "Acesso aos 3 dias do evento",
                                "Coffee break (manhã e tarde)",
                                "Caderno de anotações e Caneta",
                                "Garrafa térmica e Mochila",
                                "Livro: Temas de Contratações da Segurança Pública",
                                "Certificado de participação"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80">
                                    <Check className="w-5 h-5 text-secondary shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="w-full rounded-full bg-gradient-to-l from-[#00e4f8] to-[#002ccc] text-white hover:shadow-[0_0_30px_rgba(0,228,248,0.5)] font-bold py-6 text-lg border-0 transition-all duration-300 transform hover:-translate-y-1">
                            Inscreva-se Agora
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
