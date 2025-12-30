import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RegistrationForm } from "@/components/forms/registration-form";
import { BackgroundElements } from "@/components/ui/background-elements";

export default function InscricaoPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <BackgroundElements />
            <Header />

            <section className="py-32 bg-transparent relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">
                            Inscrições COMPRASEG
                        </h1>
                        <p className="text-tactical-metal text-lg">
                            Preencha o formulário abaixo para garantir sua vaga
                        </p>
                    </div>

                    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-tactical-black to-tactical-black border border-[#00C1FF]/50 p-8 md:p-12 rounded-2xl">
                        <RegistrationForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
