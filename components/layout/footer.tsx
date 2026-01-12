import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="bg-[#00010a] text-white py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-bold text-white/80 whitespace-nowrap">
                                    Organizador:
                                </h3>
                                <Image
                                    src="/logolicita.png"
                                    alt="Licitações Inteligentes"
                                    width={250}
                                    height={60}
                                    className="h-auto"
                                />
                            </div>
                            <div className="text-sm text-white/70 space-y-1">
                                <p>Gestão e Negócios Inteligentes Ltda.</p>
                                <p>CNPJ n. 49.780.850/0001-49</p>
                                <p>
                                    <a
                                        href="https://www.licitainteligente.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        www.licitainteligente.com.br
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><Link href="#sobre" className="hover:text-white">A Ideia do COMPRASEG</Link></li>
                            <li><Link href="#palestrantes" className="hover:text-white">Palestrantes</Link></li>
                            <li><Link href="#local" className="hover:text-white">Localização</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>(11) 97736-3640</li>
                            <li>congresso@compraseg.com.br</li>
                            <li>@congressocompraseg</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
                    © 2026 COMPRASEG. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
