import { Target, Gavel, Eye, Shield } from "lucide-react";

export const SECURITY_ORGANS = [
    { name: "Polícia Federal" },
    { name: "Polícia Rodoviária Federal" },
    { name: "Polícia Ferroviária Federal" },
    { name: "Polícia Civil" },
    { name: "Polícia Científica" },
    { name: "Polícia Militar" },
    { name: "Polícia Penal" },
    { name: "Corpo de Bombeiros Militar" }
];

export const ARMED_FORCES = [
    { name: "Marinha do Brasil" },
    { name: "Exército Brasileiro" },
    { name: "Força Aérea Brasileira" }
];

export const POLICE_NATURE_ORGANS = [
    { name: "Polícia da Câmara dos Deputados" },
    { name: "Polícia do Senado Federal" },
    { name: "Polícias Legislativas Estaduais" },
    { name: "Órgãos de segurança institucional do Poder Judiciário" },
    { name: "Órgãos de segurança institucional do Ministério Público" },
    { name: "Guardas Municipais" }
];

export const DEFENSE_COMPANIES = [
    { name: "Fabricantes de materiais bélicos" },
    { name: "Representantes comerciais na área de defesa e segurança" },
    { name: "Associações da indústria de defesa e segurança" },
    { name: "Empresas de comercialização de produtos controlados de defesa e segurança" },
    { name: "Advogados de empresas do setor de defesa e segurança" }
];

export const AUDIENCE_ROLES = [
    "Agentes de Contratação",
    "Gestores e Fiscais de Contratos",
    "Equipes de apoio",
    "Ordenadores de Despesas",
    "Requisitantes",
    "Assessores Jurídicos",
    "Equipes de planejamento",
    "Auditores de Controle Interno/Externo"
];

export const REASONS = [
    {
        icon: Target,
        title: "ESPECIFICAR",
        description: "Os melhores produtos e serviços disponíveis no mercado e as soluções tecnológicas mais adequadas para as demandas da Segurança Pública."
    },
    {
        icon: Gavel,
        title: "RESOLVER",
        description: "Questões técnicas e jurídicas e casos práticos sobre contratações da Segurança Pública."
    },
    {
        icon: Eye,
        title: "ANTECIPAR",
        description: "A identificação de riscos às contratações da Segurança Pública e desenhar previamente as medidas eficazes para a solução."
    },
    {
        icon: Shield,
        title: "PROTEGER",
        description: "Os gestores da Segurança Pública, evitando-se a responsabilização por falhas de planejamento, execução e fiscalização."
    }
];
