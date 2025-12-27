"use client";

import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BRAZILIAN_STATES = [
    "Acre (AC)", "Alagoas (AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)",
    "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)",
    "Maranhão (MA)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)", "Minas Gerais (MG)",
    "Pará (PA)", "Paraíba (PB)", "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)",
    "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)", "Rio Grande do Sul (RS)",
    "Rondônia (RO)", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)",
    "Sergipe (SE)", "Tocantins (TO)"
];

const ORGAO_OPTIONS = [
    "Prefeitura Municipal",
    "Câmara Municipal",
    "Assembleia Legislativa",
    "Órgão Estadual",
    "Empresa Estatal",
    "Outros",
    "Não sou de nenhum Órgão Público"
];

export const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        orgao: '',
        estado: '',
        municipio: '',
        quantidade: '',
        nomeInscritos: '',
        cnpj: '',
        endereco: '',
        pagamento: 'pix',
        empenho: null as File | null
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission
        console.log('Form submitted:', formData);
        alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, empenho: e.target.files[0] });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome Completo */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Nome Completo <span className="text-[#e3db39]">*</span>
                </label>
                <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="Digite seu nome completo"
                />
            </div>

            {/* E-mail */}
            <div>
                <label className="block text-white font-medium mb-2">
                    E-mail do Responsável da Inscrição <span className="text-[#e3db39]">*</span>
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="seu@email.com"
                />
            </div>

            {/* Telefone/Whatsapp */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Telefone/Whatsapp <span className="text-[#e3db39]">*</span>
                </label>
                <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="(11) 96123-4567"
                />
            </div>

            {/* Órgão Público */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Qual seu órgão público? <span className="text-[#e3db39]">*</span>
                </label>
                <select
                    required
                    value={formData.orgao}
                    onChange={(e) => setFormData({ ...formData, orgao: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                >
                    <option value="">- Select -</option>
                    {ORGAO_OPTIONS.map((orgao) => (
                        <option key={orgao} value={orgao}>{orgao}</option>
                    ))}
                </select>
            </div>

            {/* Estado */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Qual seu estado? <span className="text-[#e3db39]">*</span>
                </label>
                <select
                    required
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                >
                    <option value="">- Select -</option>
                    {BRAZILIAN_STATES.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {/* Município */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Qual o seu município? <span className="text-[#e3db39]">*</span>
                </label>
                <input
                    type="text"
                    required
                    value={formData.municipio}
                    onChange={(e) => setFormData({ ...formData, municipio: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="Digite seu município"
                />
            </div>

            {/* Quantidade de Inscritos */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Quantidade de Inscritos <span className="text-[#f5dd29]">*</span>
                </label>
                <select
                    required
                    value={formData.quantidade}
                    onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                >
                    <option value="">- Select -</option>
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                    <option value="10+">10+</option>
                </select>
            </div>

            {/* Nome dos Inscritos */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Escreva o nome dos inscritos <span className="text-[#f5dd29]">*</span>
                </label>
                <textarea
                    required
                    rows={4}
                    value={formData.nomeInscritos}
                    onChange={(e) => setFormData({ ...formData, nomeInscritos: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="Liste os nomes dos participantes"
                />
            </div>

            {/* CNPJ */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Qual o CNPJ para emissão de Nota Fiscal? <span className="text-[#f5dd29]">*</span>
                </label>
                <input
                    type="text"
                    required
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="00.000.000/0000-00"
                />
            </div>

            {/* Endereço */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Endereço <span className="text-[#f5dd29]">*</span>
                </label>
                <input
                    type="text"
                    required
                    value={formData.endereco}
                    onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-tactical-metal focus:border-[#00C1FF] focus:ring-1 focus:ring-[#00C1FF] outline-none transition-all"
                    placeholder="Rua, número, bairro, cidade"
                />
            </div>

            {/* Forma de Pagamento */}
            <div>
                <label className="block text-white font-medium mb-4">
                    Forma de Pagamento
                </label>
                <div className="space-y-3">
                    {['boleto', 'transferencia', 'pix'].map((method) => (
                        <label key={method} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                            <input
                                type="radio"
                                name="pagamento"
                                value={method}
                                checked={formData.pagamento === method}
                                onChange={(e) => setFormData({ ...formData, pagamento: e.target.value })}
                                className="w-5 h-5 text-[#00C1FF] focus:ring-[#00C1FF]"
                            />
                            <span className="text-white capitalize">{method === 'transferencia' ? 'Transferência' : method.charAt(0).toUpperCase() + method.slice(1)}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Envio do Empenho */}
            <div>
                <label className="block text-white font-medium mb-2">
                    Envio do Empenho
                </label>
                <div className="relative">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="empenho-upload"
                        accept=".pdf,.doc,.docx"
                    />
                    <label
                        htmlFor="empenho-upload"
                        className="flex items-center justify-center gap-3 w-full p-4 border-2 border-dashed border-tactical-highlight rounded-lg cursor-pointer hover:border-[#00C1FF] transition-colors"
                    >
                        <Upload className="w-5 h-5 text-tactical-metal" />
                        <span className="text-tactical-metal">
                            {formData.empenho ? formData.empenho.name : 'Envie sua Nota de Empenho'}
                        </span>
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                className="w-full bg-[#f5dd29] text-tactical-black hover:bg-[#f5dd29]/90 font-bold tracking-wide"
            >
                Enviar
            </Button>
        </form>
    );
};
