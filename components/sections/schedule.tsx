import React from 'react';
import { Lock } from 'lucide-react';

export const Schedule: React.FC = () => {
    return (
        <section id="programacao" className="py-12 md:py-24 bg-transparent relative z-10">

            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-8">
                    Programação
                </h2>

                <div className="glass-panel rounded-xl p-12 border border-dashed border-white/10 flex flex-col items-center justify-center bg-black/40">
                    <h3 className="text-2xl font-bold text-tactical-gold uppercase tracking-wide">Em breve</h3>
                </div>
            </div>
        </section>
    );
};
