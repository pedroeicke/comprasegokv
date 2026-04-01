"use client";

import React, { useState } from 'react';
import { Coffee, MessageSquare, Utensils, Clock, Plane, Wine } from 'lucide-react';

type EventType = 'palestra' | 'coffee' | 'debate' | 'almoco' | 'abertura' | 'encerramento' | 'aviacao' | 'coquetel';

interface ScheduleEvent {
    time: string;
    title: string;
    speaker?: string;
    speakerRole?: string;
    speakerImage?: string;
    type: EventType;
    subEvents?: { title: string; speaker: string; speakerRole?: string; speakerImage?: string }[];
}

interface DaySchedule {
    dateShort: string;
    period: string;
    events: ScheduleEvent[];
}

const SCHEDULE_DATA: DaySchedule[] = [
    {
        dateShort: "12/05",
        period: "Manhã",
        events: [
            { time: "8h", title: "Credenciamento", type: "abertura" },
            { time: "8h30", title: "Abertura", type: "abertura" },
            { time: "9h", title: "Palestra inaugural", speaker: "A definir", type: "palestra" },
            { time: "9h30", title: "Coffee break", type: "coffee" },
            { time: "10h", title: "Realidade operacional e novos desafios para a segurança pública", speaker: "Victor dos Santos", speakerRole: "Secretário de Segurança Pública do Estado do Rio de Janeiro", speakerImage: "/profok/vitor2.png", type: "palestra" },
            { time: "10h30", title: "A visão do Tribunal de Contas sobre as especificidades das contratações da Segurança Pública", speaker: "Adircélio Júnior", speakerRole: "Conselheiro do Tribunal de Contas do Estado de Santa Catarina", speakerImage: "/profok/Adircelio.png", type: "palestra" },
            { time: "11h", title: "Tema a definir", speaker: "A definir", type: "palestra" },
            { time: "11h30", title: "Debates", type: "debate" },
            { time: "12h", title: "Intervalo para o almoço", type: "almoco" },
        ]
    },
    {
        dateShort: "12/05",
        period: "Tarde",
        events: [
            { time: "14h", title: "Panorama da aviação de segurança pública", speaker: "Alex Mena Barreto", speakerRole: "Coronel de Polícia Militar", speakerImage: "/profok/alexok.png", type: "palestra" },
            { time: "14h35", title: "Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição", speaker: "Claudio Cardoso", speakerRole: "Coronel Aviador R1 da Força Aérea Brasileira", speakerImage: "/profok/claudio.jpeg", type: "palestra" },
            { time: "15h10", title: "Debates", type: "debate" },
            { time: "15h50", title: "Coffee break", type: "coffee" },
            { time: "16h20", title: "Soluções de TI para a segurança pública. Contratar ou desenvolver? Como fiscalizar?", speaker: "Joselaine Branchini", speakerRole: "Coordenadora de Dívidas e Cálculos da AGU", speakerImage: "/profok/Joselaine.png", type: "palestra" },
            { time: "16h55", title: "Pressupostos necessários para a centralização de compras da segurança pública", speaker: "Lara Brainer", speakerRole: "Coordenadora Geral de Governança Estratégica da AGU", speakerImage: "/profok/lara.png", type: "palestra" },
            { time: "17h30", title: "Debates", type: "debate" },
            { time: "18h", title: "Encerramento", type: "encerramento" },
        ]
    },
    {
        dateShort: "13/05",
        period: "Manhã",
        events: [
            { time: "8h", title: "Licitações internacionais de equipamentos de segurança pública", speaker: "Jonas Lima", speakerRole: "Advogado", speakerImage: "/profok/jomas.jpeg", type: "palestra" },
            { time: "8h35", title: "Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal", speaker: "Lucian Fidelis", speakerRole: "Perito Criminal Federal", speakerImage: "/profok/lucian.jpeg", type: "palestra" },
            { time: "9h10", title: "Debates", type: "debate" },
            { time: "9h50", title: "Coffee break", type: "coffee" },
            { time: "10h20", title: "Normas técnicas de fardamento: qualidade, segurança e efetividade", speaker: "Renata Monteiro", speakerRole: "Coordenadora de Projetos de Defesa e Segurança do SENAI CETIQT", speakerImage: "/profok/renata.jpg", type: "palestra" },
            { time: "10h55", title: "Inovações na aquisição de armamentos e equipamentos de proteção de uso policial", speaker: "Gisele Novo", speakerRole: "Policial Rodoviária Federal", speakerImage: "/profok/gisele.jpeg", type: "palestra" },
            { time: "11h30", title: "Debates", type: "debate" },
            { time: "12h", title: "Intervalo para o almoço", type: "almoco" },
        ]
    },
    {
        dateShort: "13/05",
        period: "Tarde",
        events: [
            { time: "14h", title: "Obtenções por aquisições complexas de produtos de defesa e segurança", speaker: "Felipe Dalenogare", speakerRole: "Chefe de Divisão da Coordenação-Geral Jurídica de Licitações do Ministério da Defesa", speakerImage: "/profok/felipe.jpeg", type: "palestra" },
            { time: "14h35", title: "Aquisições de produtos controlados pelo Exército", speaker: "Roberto Menezes", speakerRole: "Coronel R1 do Exército Brasileiro", speakerImage: "/profok/roberto.png", type: "palestra" },
            { time: "15h10", title: "Debates", type: "debate" },
            { time: "15h50", title: "Coffee break", type: "coffee" },
            { time: "16h20", title: "Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos", speaker: "Murilo Frigeri", speakerRole: "Graduado em Ciências Policiais", speakerImage: "/profok/murilo.jpeg", type: "palestra" },
            { time: "16h55", title: "Estudos para aquisições de veículos blindados de uso policial", speaker: "Mario Sergio", speakerRole: "Delegado de Polícia Civil", speakerImage: "/profok/mario.png", type: "palestra" },
            { time: "17h30", title: "Debates", type: "debate" },
            { time: "18h", title: "Encerramento", type: "encerramento" },
        ]
    },
    {
        dateShort: "14/05",
        period: "Manhã",
        events: [
            { time: "8h", title: "Prestação de contas de transferência fundo a fundo", speaker: "Michelle Silveira", speakerRole: "Coordenadora-Geral de Transferências Fundo a Fundo da SENASP", speakerImage: "/profok/michelle.jpeg", type: "palestra" },
            { time: "8h35", title: "Responsabilização perante os tribunais de contas", speaker: "Ana Luiza Jacoby", speakerRole: "Advogada", speakerImage: "/profok/analuiza.png", type: "palestra" },
            { time: "9h10", title: "Debates", type: "debate" },
            { time: "9h50", title: "Coffee break", type: "coffee" },
            { time: "10h20", title: "Exigência de marcas e proibição de marcas em licitações da Segurança Pública", speaker: "Noel Baratieri", speakerRole: "Advogado", speakerImage: "/profok/noel.jpeg", type: "palestra" },
            { time: "10h55", title: "Certificações de materiais bélicos", speaker: "Álvaro Capagio", speakerRole: "Regulador Federal", speakerImage: "/profok/alvaro.jpeg", type: "palestra" },
            { time: "11h30", title: "Debates", type: "debate" },
            { time: "12h", title: "Intervalo para o almoço", type: "almoco" },
        ]
    },
    {
        dateShort: "14/05",
        period: "Tarde",
        events: [
            { time: "14h", title: "Ciclo de vida de materiais bélicos", speaker: "Juliana Ferreira", speakerRole: "Coronel Intendente da Força Aérea Brasileira", speakerImage: "/profok/juliana.png", type: "palestra" },
            { time: "14h35", title: "Credenciamento de estandes de tiro", speaker: "Juliana Lopes", speakerRole: "Major de Polícia Militar", speakerImage: "/profok/julianalopes.png", type: "palestra" },
            { time: "15h10", title: "Debates", type: "debate" },
            { time: "15h50", title: "Coffee break", type: "coffee" },
            { time: "16h20", title: "Estudos para aquisição de equinos para a polícia montada", speaker: "Syllas Jadach", speakerRole: "Tenente-Coronel de Polícia Militar", speakerImage: "/profok/SYLLAS.png", type: "palestra" },
            { time: "16h55", title: "Aquisição de cães policiais", speaker: "Vitor Valle", speakerRole: "Coronel de Polícia Militar", speakerImage: "/profok/vitor.jpeg", type: "palestra" },
            { time: "17h30", title: "Debates", type: "debate" },
            { time: "18h", title: "Encerramento", type: "encerramento" },
            { time: "18h15", title: "Coquetel de confraternização", type: "coquetel" },
        ]
    },
];

function getEventIcon(type: EventType) {
    switch (type) {
        case 'coffee': return <Coffee className="w-4 h-4" />;
        case 'debate': return <MessageSquare className="w-4 h-4" />;
        case 'almoco': return <Utensils className="w-4 h-4" />;
        case 'abertura': return <Clock className="w-4 h-4" />;
        case 'encerramento': return <Clock className="w-4 h-4" />;
        case 'aviacao': return <Plane className="w-4 h-4" />;
        case 'coquetel': return <Wine className="w-4 h-4" />;
        default: return null;
    }
}

function getAccentColor(type: EventType) {
    switch (type) {
        case 'palestra': return 'border-l-[#00C1FF]';
        case 'coffee': return 'border-l-amber-500';
        case 'debate': return 'border-l-purple-500';
        case 'almoco': return 'border-l-green-500';
        case 'aviacao': return 'border-l-[#00C1FF]';
        case 'coquetel': return 'border-l-amber-400';
        default: return 'border-l-white/30';
    }
}

function SpeakerCard({ image, name, role }: { image: string; name: string; role: string }) {
    return (
        <div className="flex items-center gap-3 mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={image}
                alt={name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover object-top border-2 border-gray-200 shrink-0"
            />
            <div>
                <p className="text-gray-800 text-sm font-medium">{name}</p>
                <p className="text-gray-500 text-xs">{role}</p>
            </div>
        </div>
    );
}

export const Schedule: React.FC = () => {
    const [activeDay, setActiveDay] = useState(0);

    const days = [
        { label: "12 de Maio", dateShort: "DIA 12", periods: SCHEDULE_DATA.filter(d => d.dateShort === "12/05") },
        { label: "13 de Maio", dateShort: "DIA 13", periods: SCHEDULE_DATA.filter(d => d.dateShort === "13/05") },
        { label: "14 de Maio", dateShort: "DIA 14", periods: SCHEDULE_DATA.filter(d => d.dateShort === "14/05") },
    ];

    return (
        <section id="programacao" className="py-24 bg-transparent relative z-10">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase">
                        Programação
                    </h2>
                </div>

                {/* Day Tabs */}
                <div className="flex justify-center gap-2 md:gap-4 mb-10">
                    {days.map((day, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveDay(i)}
                            className={`px-4 md:px-8 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 border ${
                                activeDay === i
                                    ? 'bg-[#00C1FF]/20 border-[#00C1FF] text-white shadow-[0_0_15px_rgba(0,193,255,0.3)]'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white/80'
                            }`}
                        >
                            <span className="block md:hidden">{day.dateShort}</span>
                            <span className="hidden md:block">{day.label}</span>
                        </button>
                    ))}
                </div>

                {/* Schedule Content */}
                <div className="space-y-10">
                    {days[activeDay].periods.map((period, pIdx) => (
                        <div key={pIdx}>
                            <h3 className="text-lg font-bold text-[#00C1FF] uppercase tracking-widest mb-6 flex items-center gap-3">
                                <span className="h-px flex-1 bg-[#00C1FF]/20"></span>
                                <span>{period.period}</span>
                                <span className="h-px flex-1 bg-[#00C1FF]/20"></span>
                            </h3>

                            <div className="space-y-3">
                                {period.events.map((event, eIdx) => (
                                    <div
                                        key={eIdx}
                                        className={`rounded-lg border-l-4 border-l-[#0066CC] bg-white shadow-md p-4 md:p-6`}
                                    >
                                        {/* Mobile: stacked layout / Desktop: side by side */}
                                        <div className="flex flex-col md:flex-row md:items-start md:gap-5">
                                            {/* Time */}
                                            <div className="font-bold text-xs md:text-base text-[#0066CC] mb-2 md:mb-0 md:min-w-[65px] md:pt-0.5 shrink-0">
                                                {event.time}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                {event.type === 'palestra' ? (
                                                    <>
                                                        <p className="text-gray-900 font-bold text-sm md:text-base leading-snug">
                                                            {event.title}
                                                        </p>
                                                        {event.speakerImage ? (
                                                            <div className="flex items-center gap-3 mt-3">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img
                                                                    src={event.speakerImage}
                                                                    alt={event.speaker || ''}
                                                                    className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover object-top border-2 border-gray-200 shrink-0"
                                                                />
                                                                <div>
                                                                    <p className="text-gray-700 text-sm font-medium">{event.speaker}</p>
                                                                    {event.speakerRole && <p className="text-gray-400 text-xs">{event.speakerRole}</p>}
                                                                </div>
                                                            </div>
                                                        ) : event.speaker ? (
                                                            <p className="text-gray-500 text-sm mt-1">{event.speaker}</p>
                                                        ) : null}
                                                    </>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-gray-400">{getEventIcon(event.type)}</span>
                                                        <p className="text-gray-600 font-medium text-sm">
                                                            {event.title}
                                                        </p>
                                                    </div>
                                                )}

                                                {event.subEvents && (
                                                    <div className="mt-4 space-y-4">
                                                        {event.subEvents.map((sub, sIdx) => (
                                                            <div key={sIdx} className="flex items-start gap-4 pl-4 border-l-2 border-[#0066CC]/30">
                                                                {sub.speakerImage && (
                                                                    // eslint-disable-next-line @next/next/no-img-element
                                                                    <img
                                                                        src={sub.speakerImage}
                                                                        alt={sub.speaker}
                                                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-top border-2 border-gray-200 shrink-0"
                                                                    />
                                                                )}
                                                                <div>
                                                                <p className="text-gray-900 font-bold text-sm leading-snug">
                                                                    {sub.title}
                                                                </p>
                                                                <p className="text-gray-500 text-sm mt-1">
                                                                    {sub.speaker}{sub.speakerRole ? ` – ${sub.speakerRole}` : ''}
                                                                </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <p className="text-white/30 text-xs text-center mt-10 max-w-3xl mx-auto leading-relaxed">
                    Programação sujeita a alterações, ante a superveniência de fatos imprevisíveis que impossibilitem a participação de palestrante, promovendo-se a adequação orientada pela manutenção do nível de qualidade técnica do evento.
                </p>
            </div>
        </section>
    );
};
