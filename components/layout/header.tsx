"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "bg-tactical-midnight/90 backdrop-blur-sm border-b border-white/10 py-0"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between md:justify-center md:gap-12 relative">
                <Link href="/" className="z-50">
                    <BrandLogo size="md" />
                </Link>

                {/* Desktop Nav - MANTIDO INALTERADO */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#sobre" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Sobre o COMPRASEG
                    </Link>
                    <Link href="#coordenacao" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Coordenação Técnica
                    </Link>
                    <Link href="#palestrantes" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Palestrantes
                    </Link>
                    <Link href="#programacao" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Programação
                    </Link>
                    <Link href="#local" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Data e Local
                    </Link>
                    <Link href="#contato" className="text-sm font-medium text-white hover:text-tactical-cyan transition-colors">
                        Contato
                    </Link>
                    <Button className="rounded-full bg-[#ffe83e] text-tactical-midnight hover:bg-[#ffe83e]/90 font-bold border-0" size="sm" asChild>
                        <Link href="/inscricao">Inscrever-se</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button - VISÍVEL APENAS NO MOBILE */}
                <button
                    className="md:hidden text-white p-2 z-50 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-tactical-midnight/95 backdrop-blur-md pt-24 px-6 md:hidden flex flex-col items-center gap-8 h-screen z-40"
                        >
                            <nav className="flex flex-col items-center gap-8 w-full">
                                <Link
                                    href="#sobre"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sobre o COMPRASEG
                                </Link>
                                <Link
                                    href="#coordenacao"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Coordenação Técnica
                                </Link>
                                <Link
                                    href="#palestrantes"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Palestrantes
                                </Link>
                                <Link
                                    href="#programacao"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Programação
                                </Link>
                                <Link
                                    href="#local"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Data e Local
                                </Link>
                                <Link
                                    href="#contato"
                                    className="text-xl font-medium text-white hover:text-tactical-cyan transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contato
                                </Link>
                                <Button className="w-full max-w-xs rounded-full bg-[#ffe83e] text-tactical-midnight hover:bg-[#ffe83e]/90 font-bold border-0 text-lg py-6" asChild>
                                    <Link href="/inscricao" onClick={() => setIsMobileMenuOpen(false)}>
                                        Inscrever-se
                                    </Link>
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
