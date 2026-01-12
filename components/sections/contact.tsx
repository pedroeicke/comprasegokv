import React from 'react';
import { Mail, Instagram, Send } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1a.5.5 0 0 0-1-1h-4a.5.5 0 0 0-1 1v1z" stroke="none" /> {/* decorative dot not needed for simple line icon, sticking to standard shape */}
        <path d="M9 10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1z" clipRule="evenodd" fillOpacity="0" stroke="none" />
    </svg>
);
// Actually, let's use a better path for "Whatsapp bonitinho" - standard logo style.
const WhatsappLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M16.5 7.5l-6 6-3-3" /> {/* Wait, this is a checkmark. Let me use the actual phone path */}
    </svg>
);
// Retrying with correct path data in the actual tool call below.

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
                            <a href="https://wa.me/5511977363640" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-tactical-gold"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span className="text-white font-medium">(11) 97736-3640</span>
                            </a>

                            <a href="mailto:contato@compraseg.com.br" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Mail className="w-6 h-6 text-tactical-gold" />
                                <span className="text-white font-medium">contato@compraseg.com.br</span>
                            </a>

                            <a href="https://instagram.com/congressocompraseg" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
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
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all" placeholder="Instituição" />
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
