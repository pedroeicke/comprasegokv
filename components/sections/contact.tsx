"use client";

import React, { useState } from 'react';
import { Mail, Instagram, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        instituicao: '',
        mensagem: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Erro ao enviar mensagem');

            setSubmitted(true);
        } catch (error) {
            console.error('Erro:', error);
            alert('Não foi possível enviar sua mensagem. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

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

                    <div id="contact-form" className="p-8 rounded-2xl border border-white/10 shadow-2xl bg-white/5 min-h-[500px] flex flex-col justify-center">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-[#f5dd29] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,221,41,0.3)]">
                                    <Check className="w-10 h-10 text-tactical-black" strokeWidth={3} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Mensagem Enviada!</h3>
                                <p className="text-tactical-metal text-lg">
                                    Obrigado pelo contato.<br />Responderemos sua mensagem em breve.
                                </p>
                                <Button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ nome: '', email: '', telefone: '', instituicao: '', mensagem: '' });
                                    }}
                                    className="mt-8 bg-transparent border border-white/20 text-white hover:bg-white/5"
                                >
                                    Enviar nova mensagem
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold text-white mb-6 uppercase">Envie sua mensagem</h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            value={formData.nome}
                                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                                            placeholder="Nome Completo"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                                                placeholder="E-mail"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.telefone}
                                                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                                                placeholder="Telefone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            value={formData.instituicao}
                                            onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                                            placeholder="Instituição"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            rows={4}
                                            required
                                            value={formData.mensagem}
                                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                                            placeholder="Mensagem"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-white text-tactical-black hover:bg-white/90 font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Enviando...' : 'Enviar'}
                                        {!loading && <Send className="w-4 h-4" />}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};
