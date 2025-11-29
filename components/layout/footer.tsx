import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[linear-gradient(144deg,rgba(18,75,163,0.92)_0%,#031439_37%,#031647_68%,#124ba3_98%)] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">COMPRASEG</h3>
                        <p className="text-white/60 text-sm">
                            Congresso Nacional de Compras da Segurança Pública.
                        </p>
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
                            <li>contato@licitainteligente.com.br</li>
                            <li>@compraseg_segurancapublica</li>
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
