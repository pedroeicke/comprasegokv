"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// --- DADOS (Integrados para facilitar a portabilidade) ---

const COORDINATORS = [
    {
        id: 'c1',
        name: 'Álvaro Capagio',
        shortRole: 'Regulador Federal',
        image: '/profok/alvaro.jpeg',
        fullBio: `Tema: Certificações de materiais bélicos\n\n• Doutorando em Direito da Regulação pela Universidade de Brasília\n\n• Mestre em Direito Internacional pela Universidade Federal de Santa Catarina\n\n• Especialista em Direito Público pela Escola Paulista da Magistratura\n\n• Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\n\n• Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\n\n• Professor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito\n\n• Avaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia\n\n• Atuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020)\n\n• Autor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 'c2',
        name: 'Murilo Frigeri',
        shortRole: 'Graduado em Ciências Policiais',
        image: '/profok/murilo.jpeg',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\n• Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco\n\n• Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo\n\n• Atuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo\n\n• Atuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis.`
    },
    {
        id: 'c3',
        name: 'Noel Baratieri',
        shortRole: 'Advogado',
        image: '/images/palestrantes/noel.jpeg',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\n• Doutor em Direito Administrativo pela Universidade Federal de Santa Catarina\n\n• Mestre em Direito do Estado pela Universidade Federal de Santa Catarina\n\n• Ex-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil\n\n• Membro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina\n\n• Atividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina\n\n• Autor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum.`
    }
];

const SPEAKERS = [
    {
        id: 's21',
        name: 'Alex Mena Barreto',
        shortRole: 'Coronel de Polícia Militar',
        image: '/profok/alex.png',
        fullBio: `• Doutor e Mestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança da Polícia Militar do Estado de São Paulo\n\n• Especialista em Gestão Organizacional em Segurança Pública e Justiça Criminal pelo Núcleo de Estudos da Violência da Universidade de São Paulo.\n\n• Especialista em Gestão de Segurança Pública, Gestão de Projetos e Policiamento Aéreo com aeronaves tripuladas e não tripuladas.\n\n• Habilitado como Piloto Policial de helicópteros (AS350 e AW109S), comandante de aeronave, instrutor de voo e examinador Credenciado.\n\n• Consultor técnico, editor do site Piloto Policial e organizador do Encontro Nacional de Aviação de Segurança Pública - ENAVSEG.`
    },
    {
        id: 's1',
        name: 'Álvaro Capagio',
        shortRole: 'Regulador Federal',
        image: '/profok/alvaro.jpeg',
        fullBio: `Tema: Certificações de materiais bélicos\n\n• Doutorando em Direito da Regulação pela Universidade de Brasília\n\n• Mestre em Direito Internacional pela Universidade Federal de Santa Catarina\n\n• Especialista em Direito Público pela Escola Paulista da Magistratura\n\n• Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\n\n• Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\n\n• Professor de Direito do Instituto Internacional de Inovação em Políticas Públicas e Soluções, do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito\n\n• Avaliador líder ISO/IEC 17020 certificado pela Sociedade Brasileira de Metrologia\n\n• Atuação em colegiados oficiais de infraestrutura da qualidade: Membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade (2015-2020)\n\n• Autor de livros jurídicos, dentre eles: Nova Lei de Licitações e Contratos, editora Saraiva; Curso de Direito Administrativo, editora Saraiva; Aspectos polêmicos da nova lei de licitações e contratos, editora Fórum.`
    },
    {
        id: 's20',
        name: 'Ana Luiza Jacoby',
        shortRole: 'Advogada',
        image: '/profok/analuiza.png',
        fullBio: `Tema: Responsabilização perante os tribunais de contas\n\n▪ Doutoranda em Direito Administrativo pela Pontifícia Universidade Católica de São Paulo\n\n▪ Mestre em Direito Administrativo pela Pontifícia Universidade Católica de São Paulo\n\n▪ Especialista em Direito Administartivo pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa\n\n▪ Especialista em Gestão de Empresas pela Fundação Getúlio Vargas\n\n▪ Diretora do Instituto de Direito Administrativo Sancionador Brasileiro\n\n▪ Diretora do Instituto Nacional da Contratação Pública\n\n▪ Diretora Executiva do Instituto Protege\n\n▪ Autora de livros jurídicos, dentre eles: Tribunais de Contas da União e a nova Lei de Licitações e Contratos, 1ª edição, 2024; Tratado de Licitações e Contratos Administrativos, 1ª edição, 2024; Contratação Direta sem Licitação, 11ª edição, 2021, todos publicados pela editora Fórum; As Implicações da Covid-19 no Direito Administrativo, editora Revista dos Tribunais; Contratação de Treinamento: Doutrina e Prática, 2ª edição, 2015, editora Negócios Públicos.`
    },
    {
        id: 's2',
        name: 'Cláudio Cardoso',
        shortRole: 'Coronel Aviador R1 da Força Aérea Brasileira',
        image: '/images/palestrantes/claudio.jpeg',
        fullBio: `Tema: Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição.\n\n• Graduado em Ciências Aeronáuticas com habilitação em Aviação Militar pela Academia da Força Aérea\n\n• Pós-graduado em Estado-Maior pela Escola de Comando e Estado-Maior da Aeronáutica\n\n• Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\n\n• Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\n\n• Ex-gerente executivo do projeto do helicóptero H-60L Black Hawk e dos projetos estratégicos KC-X e KC-390\n\n• Ex-gerente adjunto do projeto estratégico F-X2\n\n• Algumas funções exercidas na Força Aérea Brasileira: Adjunto da Assessoria de Logística, Patrimônio e Finanças do Gabinete do Comandante da Aeronáutica; Coordenador-Geral das negociações de readequação da frota de aeronaves KC-390 Millennium; Chefe da Subdivisão de Planejamento e Controle; Chefe do Escritório Brasileiro de Ligação, na Base Aérea de Wright Patterson, em Dayton-OH, EUA; Chefe do Setor FMS (Foreign Military Sales).`
    },
    {
        id: 's18',
        name: 'Fabiano Renê',
        shortRole: 'Tenente-Coronel de Polícia Militar',
        image: '/profok/Fabiano.png',
        fullBio: `Tema: Credenciamento de estandes de tiro\n\n▪ Tenente-Coronel da Polícia Militar do Estado de Santa Catarina\n\n▪ Pregoeiro\n\n▪ Especialista em Gestão em Logística pela Pontifícia Universidade Católica de Minas Gerais\n\n▪ Especialista em Segurança, Planejamento e Resposta de Emergência em Eventos de Grande Porte pela UniLeya\n\n▪ Especialista em Gestão da Ordem Pública pela Polícia Militar do Estado de Santa Catarina\n\n▪ Graduado em Segurança Pública pela Universidade do Vale do Itajaí\n\n▪ Atuação em mobilizações nacionais de segurança pública: Subcomandante da Operação Belo Monte da Força Nacional em Altamira/PA; Subcomandante da Operação Cerrado da Força Nacional em Luziânia/GO; Subcomandante da Operação Jamari da Força Nacional em Ariquemes/RO; Membro do Grupo de Trabalho Rio 2016 do Departamento da Força Nacional de Segurança Pública no Rio de Janeiro/RJ; Observador de Segurança nos Primeiros Jogos Mundiais dos Povos Indígenas em Palmas/TO; Representante da Força Nacional no "Venue Integration Security Operation" - Jogos Olímpicos e Paralímpicos Rio 2016; Representante Institucional da Força Nacional no Centro Integrado de Comando e Controle Setorial - Jogos Olímpicos e Paralímpicos Rio 2016.`
    },
    {
        id: 's4',
        name: 'Felipe Dalenogare',
        shortRole: 'Chefe de Divisão da Coordenação-Geral Jurídica de Licitações do Ministério da Defesa',
        image: '/images/palestrantes/felipe.jpeg',
        fullBio: `Tema: Obtenções por aquisições complexas de produtos de defesa e segurança\n\n• Chefe de Divisão na Coordenação-Geral Jurídica de Licitações, Contratos, Convênios e Parcerias da Consultoria Jurídica do Ministério da Defesa\n\n• Pós-doutor em Direito pela Università di Bologna\n\n• Doutor e Mestre em Direito pela Universidade de Santa Cruz do Sul\n\n• Especialista em Direito Público pela Universidade Cândido Mendes\n\n• Especialista em Direito Administrativo pela Faculdade Dom Alberto\n\n• Especialista em Direito Militar pela Faculdade Futura\n\n• Coordenador do Curso de Pós-Graduação em Direito Militar e da Pós-Graduação em Direito Constitucional e Administrativo da Universidade de Santa Cruz do Sul\n\n• Coordenador do Curso de Pós-Graduação em Licitações e Contratos e da Pós-Graduação em Gestão Pública e Direito Administrativo da Escola Mineira de Direito\n\n• Autor de livros jurídicos, dentre eles: Manual de Licitações e Contratos Administrativos, editora Saraiva; Manual de Direito Administrativo, editora Saraiva.`
    },
    {
        id: 's5',
        name: 'Gisele Novo',
        shortRole: 'Policial Rodoviária Federal',
        image: '/profok/gisele.jpeg',
        fullBio: `Tema: Inovações na aquisição de armamentos e equipamentos de proteção de uso policial\n\n• Chefe da Seção de Administração da Superintendência da Polícia Rodoviária Federal em Santa Catarina\n\n• Especialista em Educação Transformadora pela Pontifícia Universidade Católica do Rio Grande do Sul\n\n• Graduada em Química pela Universidade de Brasília\n\n• Formada pelo Curso de Formação de Perito Criminal Federal do Departamento de Polícia Federal\n\n• Coordenadora-Geral Substituta da Universidade Corporativa da Polícia Rodoviária Federal\n\n• Instrutora das seguintes disciplinas no Departamento de Polícia Rodoviária Federal: licitações e contratos; armamento e tiro; uso diferenciado da força\n\n• Presidente da Comissão Permanente de Estudo de Equipamentos Operacionais e da Comissão Especial de Prospecção de Coletes Balísticos.`
    },
    {
        id: 's6',
        name: 'Jonas Lima',
        shortRole: 'Advogado',
        image: '/images/palestrantes/jonas.jpeg',
        fullBio: `Tema: Licitações internacionais de equipamentos de segurança pública\n\n• Especialista em Direito Público pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa\n\n• Especialista em Compliance Regulatório pela University of Pennsylvania\n\n• Ex-Assessor da Presidência da República, integrante da equipe inicial da Controladoria Geral da União\n\n• Ex-Assessor da Procuradoria Geral da República, lotado em gabinete de Subprocuradora-Geral da República com atuação em processos da Corte Especial do Superior Tribunal de Justiça\n\n• Atividade docente anterior: Professor de Direito Administrativo do Centro Universitário do Distrito Federal – UDF\n\n• Autor de livros jurídicos, dentre eles: Licitação Pública Internacional no Brasil, editora Negócios Públicos, 2010; O Planejamento das Contratações (em coautoria), editora Fórum, 2025.`
    },
    {
        id: 's7',
        name: 'Juliana Mendonça',
        shortRole: 'Coronel Intendente da Força Aérea Brasileira',
        image: '/images/palestrantes/juliana.png',
        fullBio: `Tema: Ciclo de vida de materiais bélicos\n\n• Chefe da Divisão de Convênios e Instrumentos de Parceria da Diretoria de Economia e Finanças da Força Aérea Brasileira\n\n• Bacharel em Ciências da Logística pela Academia da Força Aérea\n\n• Especialista em Gestão Pública pela Universidade da Força Aérea\n\n• Especialista em Auditoria Interna em Organizações do Setor Público pela UniLeya\n\n• Curso de Comando e Estado Maior da United States Air Force: Air Command and Staff College\n\n• Cargos anteriores: Chefe da Seção de Estruturação de Operações de Crédito; Consultora de Normas Legais; Diretora de Licitações da Base Aérea de Florianópolis; Diretora de Licitações da Base Aérea de Boa Vista; Auditora Interna; Pregoeira.`
    },
    {
        id: 's8',
        name: 'Júlio Tavares',
        shortRole: 'Coronel Aviador R1 da Força Aérea Brasileira',
        image: '/images/palestrantes/julio.jpeg',
        fullBio: `Tema: Inovação e transferência de tecnologia em contratos de fornecimento de materiais bélicos\n\n• Graduado em Ciências Aeronáuticas pela Academia da Força Aérea\n\n• Especialista em Política e Estratégia de Defesa pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra\n\n• Diplomado pelo Curso Superior de Defesa da Escola Superior de Guerra\n\n• Especialista em Engenharia de Produção pela Universidade Federal de Pernambuco\n\n• MBA em Gerenciamento de Projetos e Gestão Executiva pela Fundação Getúlio Vargas\n\n• Certificação como Fleks Hybrid Manager e Profissional em Gerenciamento de Projetos (Project Management Professional) PMP®\n\n• Principais funções estratégicas exercidas: Gerente do projeto estratégico FX-2 (Gripen NG); Secretário de Pesquisa e Desenvolvimento da Secretária Especial de Modernização do Estado, da Secretaria-Geral da Presidência da República.`
    },
    {
        id: 's9',
        name: 'Lara Brainer',
        shortRole: 'Coordenadora Geral de Governança Estratégica da Advocacia-Geral da União',
        image: '/profok/lara.png',
        fullBio: `Tema: Pressupostos necessários para a centralização de compras da segurança pública\n\n• Pós-graduada em Direito Administrativo, com ênfase em terceirização no serviço público e em Relações entre Empresas e Poder Público pela Faculdade Única​\n\n• Diplomada pelo Curso de Altos Estudos em Defesa da Escola Superior de Defesa\n\n• Consultora do Banco Mundial\n\n• Ex-Diretora da Central de Compras do Ministério da Gestão e da Inovação em Serviços Públicos.`
    },
    {
        id: 's10',
        name: 'Lucian Fidelis',
        shortRole: 'Perito Criminal Federal',
        image: '/images/palestrantes/lucian.jpeg',
        fullBio: `Tema: Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal\n\n• Coordenador de Planejamento e Controle da Logística Policial do Departamento de Polícia Federal\n\n• Especialista em Gestão Pública pela Faculdade Fortium\n\n• Engenheiro Agrônomo pela Universidade de Brasília\n\n• Cargos exercidos no Departamento de Polícia Federal: Chefe da Divisão de Gestão Estratégica, Chefe da Divisão de Material; Chefe do Serviço de Controle da Logística Policial; Chefe do Setor de Administração e Logística da Superintendência Regional do Maranhão\n\n• Atuação na gestão de projetos estratégicos e aquisições internacionais: pistolas, fuzis, metralhadoras, coletes, placas balísticas, plate carriers, veículos blindados nível IIIA, munições, uniformes, armas de incapacitação neuromuscular, granadas e espargidores\n\n• Atuação em grupos de trabalho e normatização: controle e gestão de armas e munições; padronização de pistolas; definição do quadro de dotação de produto controlado na Polícia Federal; planejamento estratégico institucional de produto controlado.`
    },
    {
        id: 's17',
        name: 'Mario Sergio',
        shortRole: 'Delegado de Polícia Civil',
        image: '/profok/mario.png',
        fullBio: `Tema: Estudos para aquisições de veículos blindados de uso policial.\n\n• Responsável pelo setor de material bélico da Polícia Civil do Estado de São Paulo\n\n• Mestre em Segurança Pública pela University of Virginia, Estados Unidos da América\n\n• Diplomado em Justiça Criminal pela FBI Nacional Academy, Estados Unidos da América\n\n• Especialista em Polícia Judiciária e Sistema de Justiça Criminal pela Academia de Polícia Dr. Coriolano Nogueira Cobra\n\n• Docente concursado de Armamento e Tiro da Academia de Polícia Dr. Coriolano Nogueira Cobra\n\n• Bacharel em Direito pela Pontifícia Universidade Católica de São Paulo`
    },
    {
        id: 's11',
        name: 'Michelle Silveira',
        shortRole: 'Coordenadora-Geral de Transferências Fundo a Fundo da Secretaria Nacional de Segurança Pública',
        image: '/images/palestrantes/michelle.jpeg',
        fullBio: `Tema: Prestação de contas de transferência fundo a fundo\n\n• Bacharela em Direito pela Universidade Federal do Pará\n\n• Especialista em Direito Público pelo Instituto Processus\n\n• Especialista em Direito Penal pelo Instituto Processus\n\n• Cargos anteriores: Coordenadora-Geral de Gestão de Instrumentos de Repasse do Fundo Penitenciário Nacional; Coordenadora de Elaboração e Consolidação de Atos Normativos do Departamento Penitenciário Nacional; Coordenadora de Análise e Acompanhamento de Convênios do Departamento Penitenciário Nacional.`
    },
    {
        id: 's12',
        name: 'Murilo Frigeri',
        shortRole: 'Graduado em Ciências Policiais',
        image: '/profok/murilo.jpeg',
        fullBio: `Tema: Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos\n\n• Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco\n\n• Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo\n\n• Atuação profissional: Pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar do Estado de São Paulo\n\n• Atuação em grupos de trabalho: atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos; inovação de fuzis.`
    },
    {
        id: 's13',
        name: 'Noel Baratieri',
        shortRole: 'Advogado',
        image: '/images/palestrantes/noel.jpeg',
        fullBio: `Tema: Exigência de marcas e proibição de marcas em licitações da Segurança Pública\n\n• Doutor em Direito Administrativo pela Universidade Federal de Santa Catarina\n\n• Mestre em Direito do Estado pela Universidade Federal de Santa Catarina\n\n• Ex-Consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil\n\n• Membro Fundador e ex-Diretor Executivo do Instituto de Direito Administrativo de Santa Catarina\n\n• Atividades docentes anteriores: Professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina\n\n• Autor de livros jurídicos, dentre eles: O método de negociação de Harvard na Administração Pública consensual, editora Livraria do Advogado; Serviço Público na Constituição Federal, editora Livraria do Advogado; Aspectos polêmicos sobre a nova lei de licitações e contratos administrativos, editora Fórum.`
    },
    {
        id: 's22',
        name: 'Rafael Pacheco',
        shortRole: 'Secretário de Estado da Justiça',
        image: '/profok/rafael.png',
        fullBio: `Tema: Cooperação internacional em segurança pública\n\n• Secretário de Justiça do Estado do Espírito Santo\n\n• Presidente do Conselho Nacional dos Secretários de Estado da Justiça, Cidadania, Direitos Humanos e Administração Penitenciária (CONSEJ)\n\n• Mestre em Políticas Públicas e Processo pela Faculdade de Campos\n\n• Especialista em Direito Penal Econômico Europeu pela Universidade de Coimbra\n\n• Especialista em Inteligência de Segurança Pública pela Universidade de Vila Velha\n\n• Funções anteriores: Subsecretário de Estado de Inteligência Prisional; Oficial de Ligação da Polícia Federal.`
    },
    {
        id: 's14',
        name: 'Renata Monteiro',
        shortRole: 'Coordenadora de Projetos de Defesa e Segurança do SENAI CETIQT',
        image: '/images/palestrantes/renata.jpg',
        fullBio: `Tema: Normas técnicas de fardamento: qualidade, segurança e efetividade.\n\n• Curadora da Rede de Institutos de Tecnologia Têxtil e Vestuário do Serviço Nacional de Aprendizagem Industrial – SENAI\n\n• Graduada em Engenharia Industrial Têxtil pelo Centro de Tecnologia da Indústria Química e Têxtil - SENAI CETIQT\n\n• MBA em Gestão Empresarial e de Finanças pela Universidade Tiradentes\n\n• MBA em Gestão de Projetos pelo Centro Universitário IBMR\n\n• Pós-graduanda em Política, Estratégia, Defesa Nacional e Segurança Pública pelo Instituto Venturo\n\n• Atuação profissional: desenvolvimento de produtos; programação e planejamento de produção; melhoria de processos.`
    },
    {
        id: 's23',
        name: 'Roberto Menezes',
        shortRole: 'Coronel R1 do Exército Brasileiro',
        image: '/profok/roberto.png',
        fullBio: `Tema: Aquisições de produtos controlados pelo Exército\n\n• Mestre em Ciências Militares pela Escola de Aperfeiçoamento de Oficiais do Exército\n\n• MBA em Comércio Exterior pela Abracomex\n\n• Graduado em Ciências Militares pela Academia Militar das Agulhas Negras\n\n• Ex-Chefe da Divisão de Autorização da Diretoria de Fiscalização de Produtos Controlados\n\n• Atuação profissional: Chefe do Serviço de Fiscalização de Produtos Controlados da Regional do Triângulo Mineiro; Chefe do Serviço de Fiscalização de Produtos Controlados dos Estados de Rondônia, Acre e Sul do Amazonas; Comandante do Grupo de Operações de Inteligência para Fiscalização de Produtos Controlados dos Estados da Bahia e Sergipe.`
    },
    {
        id: 's19',
        name: 'Syllas Jadach',
        shortRole: 'Tenente-Coronel de Polícia Militar',
        image: '/profok/SYLLAS.png',
        fullBio: `Tema: Estudos para aquisição de equinos para a polícia montada\n\n▪ Comandante do 2º Batalhão de Policiamento de Choque da Polícia Militar do Estado de São Paulo\n\n▪ Doutor em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança da Academia de Polícia Militar do Barro Branco\n\n▪ Mestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança da Academia de Polícia Militar do Barro Branco\n\n▪ Função de comando anterior: Chefe da Divisão de Finanças e Logística, responsável pelas licitações nacionais e internacionais, aquisição de cães, trajes antibomba, robôs, acessórios para snipers, embarcações, fardamentos e equipamentos de proteção individual para o Batalhão de Operações Especiais\n\n▪ Atuação em comissão técnica: Comissão Permanente de Remonta, responsável pela aprovação dos cavalos adquiridos pela Polícia Militar do Estado de São Paulo`
    },
    {
        id: 's15',
        name: 'Thiago Carvalho',
        shortRole: 'Coordenador do Curso Técnico de Manutenção Aeronáutica do SENAI',
        image: '/images/palestrantes/thiago.jpeg',
        fullBio: `Tema: Contratação de serviços de manutenção de aeronaves de asa rotativa das polícias e corpo de bombeiros militar\n\n• Mestre em Matemática pela Universidade Federal de Santa Catarina\n\n• Licenciado em Matemática pela Universidade do Sul de Santa Catarina\n\n• Coordenador do Subgrupo Manutenção da Comissão Nacional de Treinamentos do Comitê Nacional de Prevenção de Acidentes Aeronáuticos\n\n• Membro do Comitê Nacional de Prevenção de Acidentes Aeronáuticos do Centro de Investigação e Prevenção de Acidentes Aeronáuticos\n\n• Coordenador do Curso Técnico em Manutenção Aeronáutica no Serviço Nacional de Aprendizagem Industrial\n\n• Responsável Técnico de Produtos Estratégicos de Defesa pela Empresa Estratégica de Defesa SENAI/SC\n\n• Expert da equipe brasileira no BRICS Competition na ocupação de Manutenção Aeronáutica\n\n• Consultor do Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos\n\n• Premiações: Medalha de Ouro na Olímpiada do Conhecimento, Brasil, 2021; Medalha de Excelência na World Skills Competition, Rússia, 2019; Medalha de Ouro no BRICS Challenge, África do Sul, 2017; Medalha de Excelência na World Skills Competition, Emirados Árabes Unidos, 2017.`
    },
    {
        id: 's16',
        name: 'Vitor Valle',
        shortRole: 'Coronel de Polícia Militar',
        image: '/images/palestrantes/vitor.jpeg',
        fullBio: `Tema: Aquisição de cães policiais\n\n• Chefe de Inspeções do Estado-Maior da Polícia Militar do Estado do Rio de Janeiro\n\n• Coronel da Polícia Militar do Estado do Rio de Janeiro\n\n• Mestre em Ciências Criminais e Segurança Interna pela Université Jean Moulin Lyon 3, França\n\n• Mestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança Coronel PM Nelson Freire Terra\n\n• Especialização em Oficial de Polícia Estrangeiro/Comissário de Polícia pela École Nationale Supérieure de la Police, França\n\n• Bacharel em Direito pela Universidade Gama Filho\n\n• Graduado pelo Curso de Formação de Oficiais da Academia de Polícia Militar D. João VI\n\n• Funções de comando exercidas: Comandante da Academia de Polícia Militar D. João VI; Subcomandante do Batalhão de Polícia de Choque; Comandante da Escola Superior de Polícia Militar; Comandante do Batalhão de Policiamento em Áreas Turísticas; Chefe do Escritório de Gestão Estratégica da Coordenadoria de Assuntos Estratégicos; Chefe da Seção de Planejamento e Operações do Comando de Operações Especiais; Subcomandante do Batalhão de Ações com Cães da Polícia Militar do Estado do Rio de Janeiro.`
    }
];

// --- COMPONENTE PRINCIPAL ---

export default function Experts() {
    const [activeBio, setActiveBio] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = window.matchMedia('(pointer: coarse)').matches;
            const isSmall = window.innerWidth < 1024;
            setIsMobile(isTouch || isSmall);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                        {COORDINATORS.map((coord) => (
                            <div key={coord.id} className="group relative aspect-[3/5] md:aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all">
                                {/* Imagem Full Color */}
                                <img
                                    src={coord.image}
                                    alt={coord.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                                    style={{
                                        objectPosition:
                                            coord.name === 'Murilo Frigeri' ? '50% 40%' :
                                                coord.name === 'Noel Baratieri' ? '50% 22%' : '50% 0%',
                                        transform:
                                            coord.name === 'Álvaro Capagio' ? 'none' :
                                                coord.name === 'Murilo Frigeri' ? 'scale(1.08)' : 'none'
                                    }}
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className={`absolute inset-0 flex flex-col justify-end ${isMobile ? 'p-4 translate-y-0' : 'p-6 translate-y-4 group-hover:translate-y-0'} transition-transform duration-500`}>
                                    <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-1 transform transition-all duration-300`}>{coord.name}</h3>
                                    <p className="text-white text-xs font-bold mb-2">{coord.shortRole}</p>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobile ? 'max-h-20 opacity-100' : 'max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100'}`}>
                                        <button
                                            onClick={() => setActiveBio(coord.id)}
                                            className="text-white hover:text-white/80 text-xs font-bold flex items-center gap-2 uppercase tracking-widest mt-2"
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
                                className="group relative aspect-[3/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all"
                            >
                                {/* Imagem Full Color */}
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                                />

                                {/* Overlay Darkening on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:bg-black/60 transition-all duration-500"></div>

                                {/* Conteúdo Overlay */}
                                <div className={`absolute inset-0 flex flex-col justify-end ${isMobile ? 'p-4 translate-y-0' : 'p-6 translate-y-4 group-hover:translate-y-0'} transition-transform duration-500`}>
                                    <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-1 transform transition-all duration-300`}>{speaker.name}</h3>
                                    <p className="text-white text-xs font-bold mb-1">{speaker.shortRole}</p>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobile ? 'max-h-20 opacity-100' : 'max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100'}`}>
                                        <button
                                            onClick={() => setActiveBio(speaker.id)}
                                            className="text-white hover:text-white/80 text-xs font-bold flex items-center gap-2 uppercase tracking-widest mt-2"
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

            {/* MODAL DE CURRÍCULO (Compartilhado) - Renderizado via Portal para evitar conflitos de z-index */}
            {typeof window !== 'undefined' && createPortal(
                <AnimatePresence>
                    {activeBio && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
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
                                className="bg-tactical-panel border border-tactical-cyan/50 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm relative z-10 p-4 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                            >
                                <button
                                    onClick={() => setActiveBio(null)}
                                    className="absolute top-3 right-3 md:top-4 md:right-4 text-tactical-metal hover:text-white transition-colors bg-tactical-black/20 p-2 rounded-full"
                                >
                                    <X size={20} />
                                </button>

                                {[...COORDINATORS, ...SPEAKERS].filter(c => c.id === activeBio).map(c => (
                                    <div key={c.id} className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-tactical-cyan mb-4 md:mb-6">
                                            <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{c.name}</h3>
                                        <p className="text-white text-base md:text-lg font-medium mb-4 md:mb-6 border-b border-white/10 pb-4 inline-block">
                                            {c.shortRole}
                                        </p>
                                        <div className="prose prose-invert prose-p:text-white prose-p:leading-relaxed text-justify text-sm md:text-base">
                                            {c.fullBio.split('\n\n').map((paragraph, idx) => (
                                                <p
                                                    key={idx}
                                                    className={`mb-4 ${paragraph.startsWith('Tema:') ? 'font-bold text-white' : 'font-light'}`}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}

        </div>
    );
}
