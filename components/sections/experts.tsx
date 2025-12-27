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
        image: '/prof/Álvaro Capagio.jpg',
        fullBio: `Tema: Certificações de materiais bélicos\n\nDoutorando em Direito da Regulação pela Universidade de Brasília. Mestre em Direito Internacional pela Universidade Federal de Santa Catarina. Especialista em Direito Público pela Escola Paulista da Magistratura. Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra. Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra. Professor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito. Avaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia. Atuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020). Autor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 'c2',
        name: 'Murilo Frigeri',
        shortRole: 'Chefe de Pesquisa do Centro de Material Bélico - PMESP',
        image: '/prof/Murilo Frigeri.jpeg',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\nChefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Capitão de Polícia Militar. Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco. Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo. Atuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo. Atuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis.`
    },
    {
        id: 'c3',
        name: 'Noel Baratieri',
        shortRole: 'Advogado',
        image: '/prof/Noel Baratieri.jpeg',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\nDoutor em Direito Administrativo pela Universidade Federal de Santa Catarina. Mestre em Direito do Estado pela Universidade Federal de Santa Catarina. Ex-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil. Membro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina. Atividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina. Autor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum.`
    }
];

const SPEAKERS = [
    {
        id: 's1',
        name: 'Álvaro Capagio',
        image: '/prof/Álvaro Capagio.jpg',
        shortRole: 'Regulador Federal',
        fullBio: `Tema: Certificações de materiais bélicos\n\nDoutorando em Direito da Regulação pela Universidade de Brasília. Mestre em Direito Internacional pela Universidade Federal de Santa Catarina. Especialista em Direito Público pela Escola Paulista da Magistratura. Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra. Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra. Professor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito. Avaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia. Atuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020). Autor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 's2',
        name: 'Cláudio Cardoso',
        image: '/prof/Claudio Cardoso.jpg',
        shortRole: 'Coronel Aviador R1 da FAB',
        fullBio: `Tema: Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição.\n\nCoronel Aviador R1 da Força Aérea Brasileira. Graduado em Ciências Aeronáuticas com habilitação em Aviação Militar pela Academia da Força Aérea. Pós-graduado em Estado-Maior pela Escola de Comando e Estado-Maior da Aeronáutica. Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra. Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra. Ex-gerente executivo do projeto do helicóptero H-60L Black Hawk e dos projetos estratégicos KC-X e KC-390. Ex-gerente adjunto do projeto estratégico F-X2. Algumas funções exercidas na Força Aérea Brasileira: Adjunto da Assessoria de Logística, Patrimônio e Finanças do Gabinete do Comandante da Aeronáutica; Coordenador-Geral das negociações de readequação da frota de aeronaves KC-390 Millennium; Chefe da Subdivisão de Planejamento e Controle; Chefe do Escritório Brasileiro de Ligação, na Base Aérea de Wright Patterson, em Dayton-OH, EUA; Chefe do Setor FMS (Foreign Military Sales).`
    },

    {
        id: 's4',
        name: 'Felipe Dalenogare',
        image: '/prof/Felipe Dalenogare.jpeg',
        shortRole: 'Chefe de Divisão - Ministério da Defesa',
        fullBio: `Tema: Obtenções por aquisições complexas de produtos de defesa e segurança\n\nChefe de Divisão da Coordenação-Geral Jurídica de Licitações do Ministério da Defesa. Chefe de Divisão na Coordenação-Geral Jurídica de Licitações, Contratos, Convênios e Parcerias da Consultoria Jurídica do Ministério da Defesa. Pós-doutor em Direito pela Università di Bologna. Doutor e Mestre em Direito pela Universidade de Santa Cruz do Sul. Especialista em Direito Público pela Universidade Cândido Mendes. Especialista em Direito Administrativo pela Faculdade Dom Alberto. Especialista em Direito Militar pela Faculdade Futura. Coordenador do Curso de Pós-Graduação em Direito Militar e da Pós-Graduação em Direito Constitucional e Administrativo da Universidade de Santa Cruz do Sul. Coordenador do Curso de Pós-Graduação em Licitações e Contratos e da Pós-Graduação em Gestão Pública e Direito Administrativo da Escola Mineira de Direito. Autor de livros jurídicos, dentre eles: Manual de Licitações e Contratos Administrativos, editora Saraiva; Manual de Direito Administrativo, editora Saraiva.`
    },
    {
        id: 's5',
        name: 'Gisele Novo',
        image: '/prof/Gisele Novo.jpeg',
        shortRole: 'Policial Rodoviária Federal',
        fullBio: `Tema: Inovações na aquisição de armamentos e equipamentos de proteção de uso policial\n\nPolicial Rodoviária Federal. Chefe da Seção de Administração da Superintendência da Polícia Rodoviária Federal em Santa Catarina. Especialista em Educação Transformadora pela Pontifícia Universidade Católica do Rio Grande do Sul. Graduada em Química pela Universidade de Brasília. Formada pelo Curso de Formação de Perito Criminal Federal do Departamento de Polícia Federal. Coordenadora-Geral Substituta da Universidade Corporativa da Polícia Rodoviária Federal. Instrutora das seguintes disciplinas no Departamento de Polícia Rodoviária Federal: licitações e contratos; armamento e tiro; uso diferenciado da força. Presidente da Comissão Permanente de Estudo de Equipamentos Operacionais e da Comissão Especial de Prospecção de Coletes Balísticos`
    },
    {
        id: 's6',
        name: 'Jonas Lima',
        image: '/prof/Jonas Lima.jpg',
        shortRole: 'Advogado',
        fullBio: `Tema: Licitações internacionais de equipamentos de segurança pública\n\nAdvogado. Especialista em Direito Público pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa. Especialista em Compliance Regulatório pela University of Pennsylvania.`
    },
    {
        id: 's7',
        name: 'Juliana Mendonça',
        image: '/prof/Juliana Mendonça.jpeg',
        shortRole: 'Coronel Intendente da FAB',
        fullBio: `Tema: Ciclo de vida de materiais bélicos\n\nCoronel Intendente da Força Aérea Brasileira. Chefe da Divisão de Convênios e Instrumentos de Parceria da Diretoria de Economia e Finanças da Força Aérea Brasileira. Bacharel em Ciências da Logística pela Academia da Força Aérea. Especialista em Gestão Pública pela Universidade da Força Aérea. Especialista em Auditoria Interna em Organizações do Setor Público pela UniLeya. Curso de Comando e Estado Maior da United States Air Force: Air Command and Staff College. Cargos anteriores: Chefe da Seção de Estruturação de Operações de Crédito; Consultora de Normas Legais; Diretora de Licitações da Base Aérea de Florianópolis; Diretora de Licitações da Base Aérea de Boa Vista; Auditora Interna; Pregoeira.`
    },
    {
        id: 's8',
        name: 'Júlio Tavares',
        image: '/prof/Júlio Tavares.jpg',
        shortRole: 'Coronel Aviador R1 da FAB',
        fullBio: `Tema: Inovação e transferência de tecnologia em contratos de fornecimento de materiais bélicos\n\nCoronel Aviador R1 da Força Aérea Brasileira. Graduado em Ciências Aeronáuticas pela Academia da Força Aérea. Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra. Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra. Especialista em Engenharia de Produção pela Universidade Federal de Pernambuco. MBA em Gerenciamento de Projetos e Gestão Executiva pela Fundação Getúlio Vargas. Certificação como Fleks Hybrid Manager e Profissional em Gerenciamento de Projetos (Project Management Professional) PMP®. Principais funções estratégicas exercidas: Gerente do projeto estratégico FX-2 (Gripen NG); Secretário de Pesquisa e Desenvolvimento da Secretária Especial de Modernização do Estado, da Secretaria-Geral da Presidência da República`
    },
    {
        id: 's9',
        name: 'Lara Brainer',
        image: '/prof/Lara Brainer.jpg',
        shortRole: 'Coordenadora Geral - AGU',
        fullBio: `Tema: Pressupostos necessários para a centralização de compras da segurança pública\n\nCoordenadora Geral de Governança Estratégica da Advocacia-Geral da União. Pós-graduada em Direito Administrativo, com ênfase em terceirização no serviço público e em Relações entre Empresas e Poder Público pela Faculdade Única. Diplomada pelo Curso de Altos Estudos em Defesa da Escola Superior de Defesa. Consultora do Banco Mundial. Ex-Diretora da Central de Compras do Ministério da Gestão e da Inovação em Serviços Públicos`
    },
    {
        id: 's10',
        name: 'Lucian Fidelis',
        image: '/prof/Lucian Fidelis.jpeg',
        shortRole: 'Perito Criminal Federal',
        fullBio: `Tema: Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal\n\nPerito Criminal Federal. Coordenador de Planejamento e Controle da Logística Policial do Departamento de Polícia Federal. Especialista em Gestão Pública pela Faculdade Fortium. Engenheiro Agrônomo pela Universidade de Brasília. Cargos exercidos no Departamento de Polícia Federal: Chefe da Divisão de Gestão Estratégica, Chefe da Divisão de Material; Chefe do Serviço de Controle da Logística Policial; Chefe do Setor de Administração e Logística da Superintendência Regional do Maranhão. Atuação na gestão de projetos estratégicos e aquisições internacionais: pistolas, fuzis, metralhadoras, coletes, placas balísticas, plate carriers, veículos blindados nível IIIA, munições, uniformes, armas de incapacitação neuromuscular, granadas e espargidores. Atuação em grupos de trabalho e normatização: controle e gestão de armas e munições; padronização de pistolas; definição do quadro de dotação de produto controlado na Polícia Federal; planejamento estratégico institucional de produto controlado.`
    },
    {
        id: 's11',
        name: 'Michelle Silveira',
        image: '/prof/Michelle Silveira.jpeg',
        shortRole: 'Coordenadora-Geral - SENASP',
        fullBio: `Tema: Prestação de contas de transferência fundo a fundo\n\nCoordenadora-Geral de Transferências Fundo a Fundo da Secretaria Nacional de Segurança Pública. Bacharela em Direito pela Universidade Federal do Pará. Especialista em Direito Público pelo Instituto Processus. Especialista em Direito Penal pelo Instituto Processus. Cargos anteriores: Coordenadora-Geral de Gestão de Instrumentos de Repasse do Fundo Penitenciário Nacional; Coordenadora de Elaboração e Consolidação de Atos Normativos do Departamento Penitenciário Nacional; Coordenadora de Análise e Acompanhamento de Convênios do Departamento Penitenciário Nacional.`
    },
    {
        id: 's12',
        name: 'Murilo Frigeri',
        image: '/prof/Murilo Frigeri.jpeg',
        shortRole: 'Chefe de Pesquisa CMB - PMESP',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\nChefe de Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Chefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Capitão de Polícia Militar. Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco. Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo. Atuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo. Atuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis`
    },
    {
        id: 's13',
        name: 'Noel Baratieri',
        image: '/prof/Noel Baratieri.jpeg',
        shortRole: 'Advogado',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\nAdvogado. Doutor em Direito Administrativo pela Universidade Federal de Santa Catarina. Mestre em Direito do Estado pela Universidade Federal de Santa Catarina. Ex-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil. Membro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina. Atividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina. Autor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum`
    },
    {
        id: 's14',
        name: 'Renata Monteiro',
        image: '/prof/Renata Monteiro.jpeg',
        shortRole: 'Coordenadora - SENAI CETIQT',
        fullBio: `Tema: Normas técnicas de fardamento: qualidade, segurança e efetividade.\n\nCoordenadora de Projetos de Defesa e Segurança do SENAI CETIQT. Curadora da Rede de Institutos de Tecnologia Têxtil e Vestuário do Serviço Nacional de Aprendizagem Industrial – SENAI. Graduada em Engenharia Industrial Têxtil pelo Centro de Tecnologia da Indústria Química e Têxtil - SENAI CETIQT. MBA em Gestão Empresarial e de Finanças pela Universidade Tiradentes. MBA em Gestão de Projetos pelo Centro Universitário IBMR. Pós-graduanda em Política, Estratégia, Defesa Nacional e Segurança Pública pelo Instituto Venturo. Atuação profissional: desenvolvimento de produtos; programação e planejamento de produção; melhoria de processos.`
    },
    {
        id: 's15',
        name: 'Thiago Carvalho',
        image: '/prof/Thiago Carvalho.jpg',
        shortRole: 'Coordenador Técnico - SENAI',
        fullBio: `Tema: Contratação de serviços de manutenção de aeronaves de asa rotativa das polícias e corpo de bombeiros militar\n\nCoordenador do Curso Técnico de Manutenção Aeronáutica do SENAI. Mestre em Matemática pela Universidade Federal de Santa Catarina. Licenciado em Matemática pela Universidade do Sul de Santa Catarina. Coordenador do Subgrupo Manutenção da Comissão Nacional de Treinamentos do Comitê Nacional de Prevenção de Acidentes Aeronáuticos. Membro do Comitê Nacional de Prevenção de Acidentes Aeronáuticos do Centro de Investigação e Prevenção de Acidentes Aeronáuticos. Coordenador do Curso Técnico em Manutenção Aeronáutica no Serviço Nacional de Aprendizagem Industrial. Responsável Técnico de Produtos Estratégicos de Defesa pela Empresa Estratégica de Defesa SENAI/SC. Expert da equipe brasileira no BRICS Competition na ocupação de Manutenção Aeronáutica. Consultor do Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos. Premiações: Medalha de Ouro na Olímpiada do Conhecimento, Brasil, 2021; Medalha de Excelência na World Skills Competition, Rússia, 2019; Medalha de Ouro no BRICS Challenge, África do Sul, 2017; Medalha de Excelência na World Skills Competition, Emirados Árabes Unidos, 2017.`
    },
    {
        id: 's16',
        name: 'Vitor Valle',
        image: '/prof/Vitor Valle.jpeg',
        shortRole: 'Coronel de Polícia Militar',
        fullBio: `Tema: Aquisição de cães policiais\n\nCoronel de Polícia Militar. Chefe de Inspeções do Estado-Maior da Polícia Militar do Estado do Rio de Janeiro. Coronel da Polícia Militar do Estado do Rio de Janeiro. Mestre em Ciências Criminais e Segurança Interna pela Université Jean Moulin Lyon 3, França. Mestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança Coronel PM Nelson Freire Terra. Especialização em Oficial de Polícia Estrangeiro/Comissário de Polícia pela École Nationale Supérieure de la Police, França. Bacharel em Direito pela Universidade Gama Filho. Graduado pelo Curso de Formação de Oficiais da Academia de Polícia Militar D. João VI. Funções de comando exercidas: Comandante da Academia de Polícia Militar D. João VI; Subcomandante do Batalhão de Polícia de Choque; Comandante da Escola Superior de Polícia Militar; Comandante do Batalhão de Policiamento em Áreas Turísticas; Chefe do Escritório de Gestão Estratégica da Coordenadoria de Assuntos Estratégicos; Chefe da Seção de Planejamento e Operações do Comando de Operações Especiais; Subcomandante do Batalhão de Ações com Cães da Polícia Militar do Estado do Rio de Janeiro.`
    },
];

// --- COMPONENTE PRINCIPAL ---

export default function Experts() {
    const [activeBio, setActiveBio] = useState<string | null>(null);

    return (
        <div className="bg-transparent text-white relative z-10">

            {/* SEÇÃO 1: COORDENAÇÃO TÉCNICA */}
            <section id="coordenacao" className="py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Coordenação Técnica
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {COORDINATORS.map((coord) => (
                            <div key={coord.id} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all">
                                {/* Imagem Full Color */}
                                <img
                                    src={coord.image}
                                    alt={coord.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-1 transform transition-all duration-300">{coord.name}</h3>
                                    <p className="text-white text-sm font-medium mb-2 opacity-90">{coord.shortRole}</p>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(coord.id)}
                                            className="text-white hover:text-white/80 text-sm font-bold flex items-center gap-2 uppercase tracking-widest mt-4"
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
            <section id="palestrantes" className="py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Palestrantes Confirmados
                        </h2>

                        <p className="text-tactical-metal mt-6 max-w-2xl mx-auto">
                            Grandes autoridades e especialistas da segurança pública reunidos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {SPEAKERS.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all"
                            >
                                {/* Imagem Full Color */}
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white mb-0.5 transform transition-all duration-300">{speaker.name}</h3>
                                    <p className="text-white text-xs font-medium mb-1 opacity-90">{speaker.shortRole}</p>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setActiveBio(speaker.id)}
                                            className="text-white hover:text-white/80 text-xs font-bold flex items-center gap-2 uppercase tracking-widest mt-3"
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
