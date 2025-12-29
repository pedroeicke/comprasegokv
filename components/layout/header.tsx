"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fechar menu ao clicar em um link
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "bg-tactical-midnight/95 backdrop-blur-sm border-b border-white/10"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between md:justify-center">

                {/* Logo - Aligned left on mobile, center on desktop (via grid/flex ticks if needed, but flex gap works) */}
                <Link href="/" className="z-50 relative">
                    <BrandLogo size="md" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#sobre" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Sobre o COMPRASEG
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
                        Data e local
                    </Link>
                    <Link href="#contato" className="text-sm font-medium text-white/80 hover:text-tactical-gold transition-colors">
                        Contato
                    </Link>
                    <Button className="rounded-full bg-[#f8f27c] text-tactical-midnight hover:bg-[#f8f27c]/90 font-bold border-0" size="sm" asChild>
                        <Link href="/inscricao">Inscrever-se</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Overlay */}
                <div className={`fixed inset-0 bg-tactical-midnight z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col items-center gap-6 text-lg">
                        <Link href="#sobre" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Sobre o COMPRASEG
                        </Link>
                        <Link href="#coordenacao" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Coordenação Técnica
                        </Link>
                        <Link href="#palestrantes" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Palestrantes
                        </Link>
                        <Link href="#programacao" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Programação
                        </Link>
                        <Link href="#local" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Data e local
                        </Link>
                        <Link href="#contato" onClick={closeMenu} className="font-medium text-white hover:text-tactical-gold">
                            Contato
                        </Link>
                        <Button className="rounded-full bg-[#f8f27c] text-tactical-midnight hover:bg-[#f8f27c]/90 font-bold border-0 mt-4 px-8 py-6 text-lg" asChild onClick={closeMenu}>
                            <Link href="/inscricao">Inscrever-se</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
