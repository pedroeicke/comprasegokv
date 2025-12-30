import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="bg-[#00010a] text-white py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <BrandLogo size="xl" />
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
