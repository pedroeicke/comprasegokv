import React from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
    return (
        <section id="local" className="relative py-24 w-full overflow-hidden bg-transparent">

            {/* --- FULL WIDTH BACKGROUND LAYER REMOVED FOR SOLID COLOR --- */}
            {/* <div className="absolute inset-0 z-0">
                <img ... />
            </div> */}

            {/* --- CONTENT CONTAINER (Centralizado) --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LADO ESQUERDO: Informações e Botões */}
                    <div className="flex flex-col h-full justify-center">
                        <div className="mb-10">

                            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight leading-none">
                                Data e <br />
                                <span className="text-white">Local</span>
                            </h2>
                        </div>

                        {/* FOTO MOBILE - Entre Título e Cards */}
                        <div className="block lg:hidden w-full h-64 md:h-80 mb-10 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            {/* Imagem de Mapa Estilizado */}
                            <img
                                src="/fotolocal.jpg"
                                alt="Mapa de Localização"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                            />
                            {/* Etiqueta Flutuante */}
                            <div className="absolute bottom-3 left-6 bg-tactical-midnight/90 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10">
                                <p className="text-white font-bold text-xs uppercase">Complexo Square SC</p>
                                <p className="text-[10px] text-tactical-metal mt-0.5">Florianópolis - Santa Catarina</p>
                            </div>
                        </div>

                        {/* Lista de Informações (Cards Transparentes) */}
                        <div className="space-y-4 mb-10">

                            {/* Data */}
                            <div className="flex items-center gap-6 p-5 rounded-xl bg-brand-blue border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-brand-blue/20 rounded-lg shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                                    <Calendar className="w-6 h-6 text-tactical-gold" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-display font-bold text-white uppercase">12 a 14 de Maio</h4>
                                    <p className="text-sm text-tactical-metal">Três dias de imersão total</p>
                                </div>
                            </div>

                            {/* Horário */}
                            <div className="flex items-center gap-6 p-5 rounded-xl bg-brand-blue border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-brand-blue/20 rounded-lg shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                                    <Clock className="w-6 h-6 text-tactical-gold" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-display font-bold text-white">8h às 18h</h4>
                                    <p className="text-sm text-tactical-metal">Intervalo de almoço: 12h às 14h</p>
                                </div>
                            </div>

                            {/* Local */}
                            <div className="flex items-center gap-6 p-5 rounded-xl bg-brand-blue border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                                <div className="p-3 bg-brand-blue/20 rounded-lg shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                                    <MapPin className="w-6 h-6 text-tactical-gold" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-white uppercase">Auditório do Centro de Eventos Square SC</h4>
                                    <p className="text-sm text-tactical-metal">Rod. José Carlos Daux, 5500 - Florianópolis, SC, 88032-005</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-4">
                            <a href="https://waze.com/ul?ll=-27.5458052,-48.4988775&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#ffe83e] hover:bg-[#ffe83e]/90 text-tactical-midnight rounded-lg text-center font-bold uppercase text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2">
                                <Navigation className="w-4 h-4" /> Waze
                            </a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Square+SC+-+Rod.+José+Carlos+Daux,+5500+-+Saco+Grande,+Florianópolis+-+SC,+88032-005" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white text-tactical-midnight hover:bg-gray-200 rounded-lg text-center font-bold uppercase text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2">
                                <MapPin className="w-4 h-4" /> Maps
                            </a>
                        </div>
                    </div>

                    {/* LADO DIREITO: Mapa Visual (Estático - Apenas Desktop) */}
                    <div className="hidden lg:block h-full min-h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Imagem de Mapa Estilizado */}
                        <img
                            src="/fotolocal.jpg"
                            alt="Mapa de Localização"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                        />

                        {/* Pin Centralizado no Mapa */}


                        {/* Etiqueta Flutuante */}
                        <div className="absolute bottom-3 left-6 bg-tactical-midnight/90 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10">
                            <p className="text-white font-bold text-xs uppercase">Complexo Square SC</p>
                            <p className="text-[10px] text-tactical-metal mt-0.5">Florianópolis - Santa Catarina</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
