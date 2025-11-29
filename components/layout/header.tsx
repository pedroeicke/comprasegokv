import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(144deg,rgba(18,75,163,0.92)_0%,#031439_37%,#031647_68%,#124ba3_98%)] backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white">
                    COMPRASEG
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#sobre" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        O Evento
                    </Link>
                    <Link href="#palestrantes" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Palestrantes
                    </Link>
                    <Link href="#local" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Local
                    </Link>
                    <Button className="rounded-full bg-gradient-to-l from-[#00e4f8] to-[#002ccc] text-white hover:shadow-[0_0_15px_rgba(0,228,248,0.5)] border-0" size="sm" asChild>
                        <Link href="#inscricao">Inscreva-se</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
