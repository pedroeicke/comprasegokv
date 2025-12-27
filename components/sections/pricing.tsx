import React from 'react';
import Link from 'next/link';
import { Check, Users, FileText, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Pricing: React.FC = () => {
    return (
        <section id="inscricao" className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">
                        Inscrição
                    </h2>
                    <p className="text-tactical-metal text-lg max-w-4xl mx-auto">
                        Garanta sua vaga no maior evento especializado em contratações da segurança pública.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-8">

                        {/* Pricing Card */}
                        <div className="md:col-span-7 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-tactical-card to-tactical-card border border-[#00C1FF] shadow-[0_0_40px_rgba(0,193,255,0.2)] relative p-8 md:p-12 flex flex-col rounded-2xl">


                            <h3 className="text-2xl font-bold text-white mb-2">Participação</h3>


                            <div className="mb-8 pb-8 border-b border-white/10">
                                <span className="text-sm text-tactical-metal block mb-1">Valor por inscrição</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg text-tactical-metal font-medium">R$</span>
                                    <span className="text-5xl font-bold text-white tracking-tight">5.400</span>
                                    <span className="text-lg text-white font-bold">,00</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {[
                                    "Livro sobre Contratações da Segurança Pública",
                                    "Kit com caderno de anotações, caneta, moleskine, garrafa térmica e mochila.",
                                    "Coffee break (3 dias)",
                                    "Certificado"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-tactical-gold mt-0.5 shrink-0" />
                                        <span className="text-tactical-metal text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" asChild className="w-full bg-[#e3db39] text-tactical-black hover:bg-[#e3db39]/90 font-bold tracking-wide">
                                <Link href="/inscricao">Inscrever-se Agora</Link>
                            </Button>
                        </div>

                        {/* Conditions Card */}
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-tactical-black to-tactical-black border border-[#00C1FF]/50 p-8 flex-1 rounded-2xl hover:border-[#00C1FF] transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <FileText className="text-white w-6 h-6" />
                                    <h4 className="text-lg font-bold text-white">Nota de Empenho</h4>
                                </div>
                                <Button size="sm" asChild className="w-full bg-transparent border border-white text-white hover:bg-[#e3db39] hover:text-tactical-black hover:border-[#e3db39] font-bold">
                                    <a href="mailto:congresso@compraseg.com.br">Envie sua Nota de Empenho</a>
                                </Button>
                            </div>

                            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-tactical-black to-tactical-black border border-[#00C1FF]/50 p-8 flex-1 rounded-2xl hover:border-[#00C1FF] transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <CreditCard className="text-white w-6 h-6" />
                                    <h4 className="text-lg font-bold text-white">Formas de Pagamento</h4>
                                </div>
                                <div className="space-y-3">
                                    {["PIX", "Transferência", "Boleto"].map((method, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                            <Check className="w-4 h-4 text-tactical-gold shrink-0" />
                                            <span className="text-white text-sm font-medium">{method}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
