import React from 'react';
import { Lock } from 'lucide-react';

export const Schedule: React.FC = () => {
    return (
        <section id="programacao" className="py-24 bg-transparent relative z-10">

            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h2 className="text-4xl font-display font-bold text-white uppercase mb-8">
                    Programação
                </h2>

                <div className="glass-panel rounded-xl p-12 border border-dashed border-white/10 flex flex-col items-center justify-center bg-black/40">
                    <div className="p-6 bg-tactical-midnight/80 rounded-full mb-6 border-2 border-tactical-gold shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                        <Lock className="w-10 h-10 text-tactical-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-tactical-gold mb-2 uppercase tracking-wide">Em breve</h3>

                </div>
            </div>
        </section>
    );
};
