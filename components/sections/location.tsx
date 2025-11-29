import { MapPin } from "lucide-react";

export function Location() {
    return (
        <section id="local" className="py-24 bg-primary relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                            <MapPin className="w-4 h-4" />
                            LOCALIZAÇÃO PRIVILEGIADA
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Florianópolis - SC
                        </h2>
                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                            O evento será realizado em um dos melhores centros de eventos da região.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">Auditório do Centro de Eventos Square SC</h3>
                                <p className="text-white/60">
                                    Rod. José Carlos Daux, 5500<br />
                                    Florianópolis - SC, 88032-005
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20">
                            Mapa Interativo
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
