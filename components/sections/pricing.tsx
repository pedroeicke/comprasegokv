import React from 'react';
import { Check, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Pricing: React.FC = () => {
    return (
        <section id="inscricao" className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">
                        Inscrição
                    </h2>
                    <p className="text-tactical-metal text-lg max-w-2xl mx-auto">
                        Garanta sua vaga no maior evento do setor de segurança pública.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-8">

                        {/* Pricing Card */}
                        <div className="md:col-span-7 bg-tactical-card border border-tactical-gold/30 shadow-[0_0_40px_rgba(245,221,41,0.3)] relative p-8 md:p-12 flex flex-col rounded-sm">


                            <h3 className="text-2xl font-bold text-white mb-2">Participação Completa</h3>


                            <div className="mb-8 pb-8 border-b border-white/10">
                                <span className="text-sm text-tactical-metal block mb-1">Valor por inscrição</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg text-tactical-metal font-medium">R$</span>
                                    <span className="text-5xl font-bold text-white tracking-tight">5.400</span>
                                    <span className="text-lg text-tactical-metal font-bold">,00</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {[
                                    "Coffee break (3 dias)",
                                    "Kit Participante Completo",
                                    "Acesso a todas as palestras",
                                    "Certificado"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-tactical-gold mt-0.5 shrink-0" />
                                        <span className="text-tactical-metal text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="w-full bg-tactical-gold text-tactical-black hover:bg-tactical-gold/90 font-bold tracking-wide">Inscrever-se Agora</Button>
                        </div>

                        {/* Conditions Card */}
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <div className="bg-tactical-black border border-white/10 p-8 flex-1 rounded-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="text-tactical-highlight w-6 h-6" />
                                    <h4 className="text-lg font-bold text-white">Desconto para Grupos</h4>
                                </div>
                                <p className="text-tactical-metal text-sm leading-relaxed mb-4">
                                    Condições especiais para grupos com <strong>mais de 4 servidores</strong> do mesmo órgão.
                                </p>
                                <Button variant="outline" size="sm" className="w-full bg-transparent border border-white text-white hover:bg-tactical-gold hover:text-tactical-black hover:border-tactical-gold font-bold">Consultar Condições</Button>
                            </div>
                            <div className="bg-tactical-black border border-white/10 p-8 flex-1 rounded-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="text-white w-6 h-6" />
                                    <h4 className="text-lg font-bold text-white">Nota de Empenho</h4>
                                </div>
                                <p className="text-tactical-metal text-sm leading-relaxed mb-4">
                                    Aceitamos pagamento via nota de empenho. Entre em contato para solicitar a documentação.
                                </p>
                                <Button size="sm" className="w-full bg-transparent border border-white text-white hover:bg-tactical-gold hover:text-tactical-black hover:border-tactical-gold font-bold">Solicite sua Nota de Empenho</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
