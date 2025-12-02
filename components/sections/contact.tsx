import React from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contato" className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-display font-bold text-white uppercase mb-6">
                            Fale Conosco
                        </h2>
                        <p className="text-tactical-metal mb-10 text-lg">
                            Precisa de ajuda com a inscrição, empenho ou dúvidas técnicas? Nossa equipe está pronta para atender.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:11977363640" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Phone className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">(11) 97736-3640</span>
                            </a>

                            <a href="mailto:contato@licitainteligente.com.br" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Mail className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">contato@licitainteligente.com.br</span>
                            </a>

                            <a href="https://instagram.com/compraseg_segurancapublica" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Instagram className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">@compraseg_segurancapublica</span>
                            </a>
                        </div>
                    </div>

                    <div id="contact-form" className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl bg-tactical-dark/50">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase">Envie sua mensagem</h3>
                        <form className="space-y-5">
                            <div>
                                <input type="text" className="w-full bg-tactical-midnight border border-tactical-highlight rounded-lg p-4 text-white placeholder-tactical-metal focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Nome Completo" />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <input type="email" className="w-full bg-tactical-midnight border border-tactical-highlight rounded-lg p-4 text-white placeholder-tactical-metal focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="E-mail" />
                                </div>
                                <div>
                                    <input type="tel" className="w-full bg-tactical-midnight border border-tactical-highlight rounded-lg p-4 text-white placeholder-tactical-metal focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Telefone" />
                                </div>
                            </div>

                            <div>
                                <input type="text" className="w-full bg-tactical-midnight border border-tactical-highlight rounded-lg p-4 text-white placeholder-tactical-metal focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Órgão / Instituição" />
                            </div>

                            <div className="flex items-center gap-3 px-1">
                                <input type="checkbox" id="empenho" className="w-5 h-5 rounded border-tactical-highlight bg-tactical-midnight text-brand-blue focus:ring-brand-blue focus:ring-offset-0 accent-brand-blue" />
                                <label htmlFor="empenho" className="text-tactical-metal text-sm cursor-pointer select-none">
                                    Solicitar Nota de Empenho
                                </label>
                            </div>

                            <div>
                                <textarea rows={4} className="w-full bg-tactical-midnight border border-tactical-highlight rounded-lg p-4 text-white placeholder-tactical-metal focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Mensagem"></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-white text-tactical-black hover:bg-white/90 font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2">
                                Enviar <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
