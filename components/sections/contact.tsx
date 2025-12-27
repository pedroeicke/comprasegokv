import React from 'react';
import { Mail, Instagram, Send } from 'lucide-react';

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
                            Precisa de ajuda com a inscrição, nota de empenho ou dúvidas?<br />Nossa equipe está pronta para lhe atender.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:11977363640" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-tactical-gold"
                                >
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                <span className="text-white font-medium">(11) 97736-3640</span>
                            </a>

                            <a href="mailto:congresso@compraseg.com.br" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Mail className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">congresso@compraseg.com.br</span>
                            </a>

                            <a href="https://instagram.com/congressocompraseg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Instagram className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">@congressocompraseg</span>
                            </a>
                        </div>
                    </div>

                    <div id="contact-form" className="p-8 rounded-2xl border border-white/10 shadow-2xl bg-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase">Envie sua mensagem</h3>
                        <form className="space-y-5">
                            <div>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="Nome Completo" />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="E-mail" />
                                </div>
                                <div>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="Telefone" />
                                </div>
                            </div>

                            <div>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="Órgão / Instituição" />
                            </div>


                            <div>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="Mensagem"></textarea>
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
