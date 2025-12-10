import { Target, Gavel, Eye, Shield } from "lucide-react";

export const SECURITY_ORGANS = [
    { name: "Polícia Federal" },
    { name: "Polícia Rodoviária Federal" },
    { name: "Polícia Civil" },
    { name: "Polícia Militar" },
    { name: "Polícia Penal" },
    { name: "Corpo de Bombeiros" }
];

export const ARMED_FORCES = [
    { name: "Marinha do Brasil" },
    { name: "Exército Brasileiro" },
    { name: "Força Aérea Brasileira" }
];

export const POLICE_NATURE_ORGANS = [
    { name: "Polícia Legislativa" },
    { name: "Guarda Municipal" },
    { name: "Segurança Institucional (MP/Judiciário)" }
];

export const AUDIENCE_ROLES = [
    "Agentes de Contratação",
    "Gestores e Fiscais de Contratos",
    "Equipes de Planejamento",
    "Assessores Jurídicos",
    "Ordenadores de Despesas",
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
        description: "Os gestores da Segurança Pública, evitando-se a responsabilização por falhas evitáveis."
    }
];
