"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// --- DADOS (Integrados para facilitar a portabilidade) ---

const COORDINATORS = [
    {
        id: 'c1',
        name: 'Álvaro Capagio',
        shortRole: 'Regulador Federal',
        topic: 'Certificações de materiais bélicos',
        image: '/profok/alvaro.jpeg',
        fullBio: `Tema: Certificações de materiais bélicos\n\nDoutorando em Direito da Regulação pela Universidade de Brasília\nMestre em Direito Internacional pela Universidade Federal de Santa Catarina\nEspecialista em Direito Público pela Escola Paulista da Magistratura\nEspecialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\nDiplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\nProfessor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito\nAvaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia\nAtuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020)\nAutor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 'c2',
        name: 'Murilo Frigeri',
        shortRole: 'Chefe de Pesquisa do Centro de Material Bélico - PMESP',
        topic: 'Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos',
        image: '/profok/murilo.jpeg',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\nChefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo\nCapitão de Polícia Militar\nGraduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco\nGraduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo\nAtuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo\nAtuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis`
    },
    {
        id: 'c3',
        name: 'Noel Baratieri',
        shortRole: 'Advogado',
        topic: 'Exigência de marcas e proibição de marcas em licitações da Segurança Pública',
        image: '/profok/noel.jpeg',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\nDoutor em Direito Administrativo pela Universidade Federal de Santa Catarina\nMestre em Direito do Estado pela Universidade Federal de Santa Catarina\nEx-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil\nMembro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina\nAtividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina\nAutor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum`
    }
];

const SPEAKERS = [
    {
        id: 's1',
        name: 'Álvaro Capagio',
        image: '/profok/alvaro.jpeg',
        shortRole: 'Regulador Federal',
        topic: 'Certificações de materiais bélicos',
        fullBio: `Tema: Certificações de materiais bélicos\n\nDoutorando em Direito da Regulação pela Universidade de Brasília\nMestre em Direito Internacional pela Universidade Federal de Santa Catarina\nEspecialista em Direito Público pela Escola Paulista da Magistratura\nEspecialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\nDiplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\nProfessor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito\nAvaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia\nAtuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020)\nAutor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 's2',
        name: 'Cláudio Cardoso',
        image: '/profok/claudio.jpeg',
        shortRole: 'Coronel Aviador R1 da FAB',
        topic: 'Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição',
        fullBio: `Tema: Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição.\n\nGraduado em Ciências Aeronáuticas com habilitação em Aviação Militar pela Academia da Força Aérea\nPós-graduado em Estado-Maior pela Escola de Comando e Estado-Maior da Aeronáutica\nEspecialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\nDiplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\nEx-gerente executivo do projeto do helicóptero H-60L Black Hawk e dos projetos estratégicos KC-X e KC-390\nEx-gerente adjunto do projeto estratégico F-X2\nAlgumas funções exercidas na Força Aérea Brasileira: Adjunto da Assessoria de Logística, Patrimônio e Finanças do Gabinete do Comandante da Aeronáutica; Coordenador-Geral das negociações de readequação da frota de aeronaves KC-390 Millennium; Chefe da Subdivisão de Planejamento e Controle; Chefe do Escritório Brasileiro de Ligação, na Base Aérea de Wright Patterson, em Dayton-OH, EUA; Chefe do Setor FMS (Foreign Military Sales).`
    },

    {
        id: 's4',
        name: 'Felipe Dalenogare',
        image: '/profok/felipe.jpeg',
        shortRole: 'Chefe de Divisão do Ministério da Defesa',
        topic: 'Obtenções por aquisições complexas de produtos de defesa e segurança',
        fullBio: `Tema: Obtenções por aquisições complexas de produtos de defesa e segurança\n\nChefe de Divisão na Coordenação-Geral Jurídica de Licitações, Contratos, Convênios e Parcerias da Consultoria Jurídica do Ministério da Defesa\nPós-doutor em Direito pela Università di Bologna\nDoutor e Mestre em Direito pela Universidade de Santa Cruz do Sul\nEspecialista em Direito Público pela Universidade Cândido Mendes\nEspecialista em Direito Administrativo pela Faculdade Dom Alberto\nEspecialista em Direito Militar pela Faculdade Futura\nCoordenador do Curso de Pós-Graduação em Direito Militar e da Pós-Graduação em Direito Constitucional e Administrativo da Universidade de Santa Cruz do Sul\nCoordenador do Curso de Pós-Graduação em Licitações e Contratos e da Pós-Graduação em Gestão Pública e Direito Administrativo da Escola Mineira de Direito\nAutor de livros jurídicos, dentre eles: Manual de Licitações e Contratos Administrativos, editora Saraiva; Manual de Direito Administrativo, editora Saraiva.`
    },
    {
        id: 's5',
        name: 'Gisele Novo',
        image: '/profok/gabriela.jpeg',
        shortRole: 'Policial Rodoviária Federal',
        topic: 'Inovações na aquisição de armamentos e equipamentos de proteção de uso policial',
        fullBio: `Tema: Inovações na aquisição de armamentos e equipamentos de proteção de uso policial\n\nChefe da Seção de Administração da Superintendência da Polícia Rodoviária Federal em Santa Catarina\nEspecialista em Educação Transformadora pela Pontifícia Universidade Católica do Rio Grande do Sul\nGraduada em Química pela Universidade de Brasília\nFormada pelo Curso de Formação de Perito Criminal Federal do Departamento de Polícia Federal\nCoordenadora-Geral Substituta da Universidade Corporativa da Polícia Rodoviária Federal\nInstrutora das seguintes disciplinas no Departamento de Polícia Rodoviária Federal: licitações e contratos; armamento e tiro; uso diferenciado da força\nPresidente da Comissão Permanente de Estudo de Equipamentos Operacionais e da Comissão Especial de Prospecção de Coletes Balísticos`
    },
    {
        id: 's6',
        name: 'Jonas Lima',
        image: '/profok/jomas.jpeg',
        shortRole: 'Advogado',
        topic: 'Licitações internacionais de equipamentos de segurança pública',
        fullBio: `Tema: Licitações internacionais de equipamentos de segurança pública\n\nEspecialista em Direito Público pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa\nEspecialista em Compliance Regulatório pela University of Pennsylvania`
    },
    {
        id: 's7',
        name: 'Juliana Mendonça',
        image: '/profok/juliana.jpeg',
        shortRole: 'Coronel Intendente da FAB',
        topic: 'Ciclo de vida de materiais bélicos',
        fullBio: `Tema: Ciclo de vida de materiais bélicos\n\nChefe da Divisão de Convênios e Instrumentos de Parceria da Diretoria de Economia e Finanças da Força Aérea Brasileira\nBacharel em Ciências da Logística pela Academia da Força Aérea\nEspecialista em Gestão Pública pela Universidade da Força Aérea\nEspecialista em Auditoria Interna em Organizações do Setor Público pela UniLeya\nCurso de Comando e Estado Maior da United States Air Force: Air Command and Staff College\nCargos anteriores: Chefe da Seção de Estruturação de Operações de Crédito; Consultora de Normas Legais; Diretora de Licitações da Base Aérea de Florianópolis; Diretora de Licitações da Base Aérea de Boa Vista; Auditora Interna; Pregoeira.`
    },
    {
        id: 's8',
        name: 'Júlio Tavares',
        image: '/profok/julio.jpeg',
        shortRole: 'Coronel Aviador R1 da FAB',
        topic: 'Inovação e transferência de tecnologia em contratos de fornecimento de materiais bélicos',
        fullBio: `Tema: Inovação e transferência de tecnologia em contratos de fornecimento de materiais bélicos\n\nGraduado em Ciências Aeronáuticas pela Academia da Força Aérea\nEspecialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\nDiplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\nEspecialista em Engenharia de Produção pela Universidade Federal de Pernambuco\nMBA em Gerenciamento de Projetos e Gestão Executiva pela Fundação Getúlio Vargas\nCertificação como Fleks Hybrid Manager e Profissional em Gerenciamento de Projetos (Project Management Professional) PMP®\nPrincipais funções estratégicas exercidas: Gerente do projeto estratégico FX-2 (Gripen NG); Secretário de Pesquisa e Desenvolvimento da Secretária Especial de Modernização do Estado, da Secretaria-Geral da Presidência da República`
    },
    {
        id: 's9',
        name: 'Lara Brainer',
        image: '/profok/lara.jpeg',
        scale: 1.05,
        shortRole: 'Coordenadora Geral - AGU',
        topic: 'Pressupostos necessários para a centralização de compras da segurança pública',
        fullBio: `Tema: Pressupostos necessários para a centralização de compras da segurança pública\n\nPós-graduada em Direito Administrativo, com ênfase em terceirização no serviço público e em Relações entre Empresas e Poder Público pela Faculdade Única\nDiplomada pelo Curso de Altos Estudos em Defesa da Escola Superior de Defesa\nConsultora do Banco Mundial\nEx-Diretora da Central de Compras do Ministério da Gestão e da Inovação em Serviços Públicos`
    },
    {
        id: 's10',
        name: 'Lucian Fidelis',
        image: '/profok/lucian.jpeg',
        shortRole: 'Perito Criminal Federal',
        topic: 'Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal',
        fullBio: `Tema: Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal\n\nCoordenador de Planejamento e Controle da Logística Policial do Departamento de Polícia Federal\nEspecialista em Gestão Pública pela Faculdade Fortium\nEngenheiro Agrônomo pela Universidade de Brasília\nCargos exercidos no Departamento de Polícia Federal: Chefe da Divisão de Gestão Estratégica, Chefe da Divisão de Material; Chefe do Serviço de Controle da Logística Policial; Chefe do Setor de Administração e Logística da Superintendência Regional do Maranhão\nAtuação na gestão de projetos estratégicos e aquisições internacionais: pistolas, fuzis, metralhadoras, coletes, placas balísticas, plate carriers, veículos blindados nível IIIA, munições, uniformes, armas de incapacitação neuromuscular, granadas e espargidores.\nAtuação em grupos de trabalho e normatização: controle e gestão de armas e munições; padronização de pistolas; definição do quadro de dotação de produto controlado na Polícia Federal; planejamento estratégico institucional de produto controlado.`
    },
    {
        id: 's11',
        name: 'Michelle Silveira',
        image: '/profok/michelle.jpeg',
        shortRole: 'Coordenadora-Geral - SENASP',
        topic: 'Prestação de contas de transferência fundo a fundo',
        fullBio: `Tema: Prestação de contas de transferência fundo a fundo\n\nBacharela em Direito pela Universidade Federal do Pará\nEspecialista em Direito Público pelo Instituto Processus\nEspecialista em Direito Penal pelo Instituto Processus\nCargos anteriores: Coordenadora-Geral de Gestão de Instrumentos de Repasse do Fundo Penitenciário Nacional; Coordenadora de Elaboração e Consolidação de Atos Normativos do Departamento Penitenciário Nacional; Coordenadora de Análise e Acompanhamento de Convênios do Departamento Penitenciário Nacional.`
    },
    {
        id: 's12',
        name: 'Murilo Frigeri',
        image: '/profok/murilo.jpeg',
        shortRole: 'Chefe de Pesquisa CMB - PMESP',
        topic: 'Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\nChefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo\nCapitão de Polícia Militar\nGraduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco\nGraduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo\nAtuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo\nAtuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis`
    },
    {
        id: 's13',
        name: 'Noel Baratieri',
        image: '/profok/noel.jpeg',
        shortRole: 'Advogado',
        topic: 'Exigência de marcas e proibição de marcas em licitações da Segurança Pública',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\nDoutor em Direito Administrativo pela Universidade Federal de Santa Catarina\nMestre em Direito do Estado pela Universidade Federal de Santa Catarina\nEx-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil\nMembro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina\nAtividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina\nAutor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum`
    },
    {
        id: 's14',
        name: 'Renata Monteiro',
        image: '/prof/Renata Monteiro_edited.png',
        shortRole: 'Coordenadora - SENAI CETIQT',
        topic: 'Normas técnicas de fardamento: qualidade, segurança e efetividade',
        fullBio: `Tema: Normas técnicas de fardamento: qualidade, segurança e efetividade.\n\nCuradora da Rede de Institutos de Tecnologia Têxtil e Vestuário do Serviço Nacional de Aprendizagem Industrial – SENAI\nGraduada em Engenharia Industrial Têxtil pelo Centro de Tecnologia da Indústria Química e Têxtil - SENAI CETIQT\nMBA em Gestão Empresarial e de Finanças pela Universidade Tiradentes\nMBA em Gestão de Projetos pelo Centro Universitário IBMR\nPós-graduanda em Política, Estratégia, Defesa Nacional e Segurança Pública pelo Instituto Venturo\nAtuação profissional: desenvolvimento de produtos; programação e planejamento de produção; melhoria de processos.`
    },
    {
        id: 's15',
        name: 'Thiago Carvalho',
        image: '/profok/thiago.jpeg',
        scale: 1.05,
        shortRole: 'Coordenador Técnico - SENAI',
        topic: 'Contratação de serviços de manutenção de aeronaves de asa rotativa das polícias e corpo de bombeiros militar',
        fullBio: `Tema: Contratação de serviços de manutenção de aeronaves de asa rotativa das polícias e corpo de bombeiros militar\n\nMestre em Matemática pela Universidade Federal de Santa Catarina\nLicenciado em Matemática pela Universidade do Sul de Santa Catarina\nCoordenador do Subgrupo Manutenção da Comissão Nacional de Treinamentos do Comitê Nacional de Prevenção de Acidentes Aeronáuticos\nMembro do Comitê Nacional de Prevenção de Acidentes Aeronáuticos do Centro de Investigação e Prevenção de Acidentes Aeronáuticos\nCoordenador do Curso Técnico em Manutenção Aeronáutica no Serviço Nacional de Aprendizagem Industrial\nResponsável Técnico de Produtos Estratégicos de Defesa pela Empresa Estratégica de Defesa SENAI/SC\nExpert da equipe brasileira no BRICS Competition na ocupação de Manutenção Aeronáutica\nConsultor do Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos\nPremiações: Medalha de Ouro na Olímpiada do Conhecimento, Brasil, 2021; Medalha de Excelência na World Skills Competition, Rússia, 2019; Medalha de Ouro no BRICS Challenge, África do Sul, 2017; Medalha de Excelência na World Skills Competition, Emirados Árabes Unidos, 2017.`
    },
    {
        id: 's16',
        name: 'Vitor Valle',
        image: '/profok/vitor.jpeg',
        shortRole: 'Coronel de Polícia Militar',
        topic: 'Aquisição de cães policiais',
        fullBio: `Tema: Aquisição de cães policiais\n\nChefe de Inspeções do Estado-Maior da Polícia Militar do Estado do Rio de Janeiro\nCoronel da Polícia Militar do Estado do Rio de Janeiro\nMestre em Ciências Criminais e Segurança Interna pela Université Jean Moulin Lyon 3, França\nMestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança Coronel PM Nelson Freire Terra\nEspecialização em Oficial de Polícia Estrangeiro/Comissário de Polícia pela École Nationale Supérieure de la Police, França\nBacharel em Direito pela Universidade Gama Filho\nGraduado pelo Curso de Formação de Oficiais da Academia de Polícia Militar D. João VI\nFunções de comando exercidas: Comandante da Academia de Polícia Militar D. João VI; Subcomandante do Batalhão de Polícia de Choque; Comandante da Escola Superior de Polícia Militar; Comandante do Batalhão de Policiamento em Áreas Turísticas; Chefe do Escritório de Gestão Estratégica da Coordenadoria de Assuntos Estratégicos; Chefe da Seção de Planejamento e Operações do Comando de Operações Especiais; Subcomandante do Batalhão de Ações com Cães da Polícia Militar do Estado do Rio de Janeiro.`
    }
];

// --- COMPONENTE PRINCIPAL ---

export default function Experts() {
    const [activeBio, setActiveBio] = useState<string | null>(null);

    return (
        <div className="bg-transparent text-white relative z-10">

            {/* SEÇÃO 1: COORDENAÇÃO TÉCNICA */}
            <section id="coordenacao" className="py-12 md:py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Coordenação Técnica
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
                        {COORDINATORS.map((coord) => (
                            <div key={coord.id} className="group relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all">
                                {/* Imagem Full Color */}
                                {/* Imagem Full Color */}
                                <div className="absolute inset-0 w-full h-full" style={{ transform: `scale(${(coord as any).scale || 1})` }}>
                                    <img
                                        src={coord.image}
                                        alt={coord.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-60 group-hover:opacity-95 group-hover:bg-black/70 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-1 transform transition-all duration-300">{coord.name}</h3>
                                    <p className="text-[#00C1FF] text-sm font-bold uppercase tracking-wider mb-2">{coord.shortRole}</p>
                                    <p className="text-white/80 text-sm font-medium leading-tight mb-4 line-clamp-3 relative z-10">
                                        <span className="text-tactical-gold font-bold">Tema:</span> {coord.topic}
                                    </p>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(coord.id)}
                                            className="text-white hover:text-white/80 text-sm font-bold flex items-center gap-2 uppercase tracking-widest mt-2"
                                        >
                                            <ArrowRight size={16} className="text-white" />
                                            VER CURRÍCULO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: PALESTRANTES */}
            <section id="palestrantes" className="py-12 md:py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Palestrantes Confirmados
                        </h2>

                        <p className="text-tactical-metal mt-6 max-w-2xl mx-auto">
                            Grandes autoridades e especialistas da segurança pública reunidos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {SPEAKERS.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all"
                            >
                                {/* Imagem Full Color */}
                                {/* Imagem Full Color */}
                                <div className="absolute inset-0 w-full h-full" style={{ transform: `scale(${(speaker as any).scale || 1})` }}>
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-60 group-hover:opacity-95 group-hover:bg-black/70 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-lg font-bold text-white mb-0.5 transform transition-all duration-300 leading-tight">{speaker.name}</h3>
                                    <p className="text-[#00C1FF] text-[10px] font-bold uppercase tracking-wider mb-2">{speaker.shortRole}</p>
                                    <p className="text-white/80 text-xs font-medium leading-tight mb-3 line-clamp-3">
                                        <span className="text-tactical-gold font-bold">Tema:</span> {speaker.topic}
                                    </p>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(speaker.id)}
                                            className="text-white hover:text-white/80 text-[10px] font-bold flex items-center gap-2 uppercase tracking-widest mt-1"
                                        >
                                            <ArrowRight size={14} className="text-white" />
                                            VER CURRÍCULO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL DE CURRÍCULO (Compartilhado) */}
            <AnimatePresence>
                {activeBio && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveBio(null)}
                            className="absolute inset-0 bg-tactical-black/90 backdrop-blur-sm"
                        />

                        {/* Janela Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-tactical-panel border border-tactical-cyan/50 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm relative z-10 p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <button
                                onClick={() => setActiveBio(null)}
                                aria-label="Fechar"
                                className="absolute top-4 right-4 text-tactical-metal hover:text-white transition-colors bg-tactical-black/20 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {[...COORDINATORS, ...SPEAKERS].filter(c => c.id === activeBio).map(c => (
                                <div key={c.id} className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-tactical-cyan mb-6">
                                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{c.name}</h3>
                                    <p className="text-white text-lg font-medium mb-6 border-b border-white/10 pb-4 inline-block">
                                        {c.shortRole}
                                    </p>
                                    <div className="prose prose-invert prose-p:text-white prose-p:leading-relaxed text-justify">
                                        {c.fullBio.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="mb-4 text-base font-light">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
