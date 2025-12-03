import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-tactical-midnight/90 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-center gap-12">
                <Link href="/">
                    <BrandLogo size="md" />
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#sobre" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Sobre COMPRASEG 2026
                    </Link>
                    <Link href="#coordenacao" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Coordenação Técnica
                    </Link>
                    <Link href="#palestrantes" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Palestrantes
                    </Link>
                    <Link href="#programacao" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Programação
                    </Link>
                    <Link href="#local" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Data local
                    </Link>
                    <Link href="#contato" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Contato
                    </Link>
                    <Button className="rounded-full bg-tactical-gold text-tactical-midnight hover:bg-tactical-gold/90 font-bold border-0" size="sm" asChild>
                        <Link href="#inscricao">Inscrever-se</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
