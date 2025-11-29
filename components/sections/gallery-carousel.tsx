"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download } from "lucide-react";

export function GalleryCarousel() {
    const images = [
        "/event-auditorium.png",
        "/event-awards.png",
        "/event-networking.png",
        "/event-auditorium.png", // Repeat for seamless loop
        "/event-awards.png",
    ];

    return (
        <section className="relative py-0 bg-primary z-10">
            {/* Infinite Scroll Carousel */}
            <div className="w-full overflow-hidden relative z-0">
                <div className="flex animate-scroll min-w-full">
                    {[...images, ...images].map((src, i) => (
                        <div key={i} className="relative w-[400px] h-[300px] shrink-0 overflow-hidden">
                            <Image
                                src={src}
                                alt="Evento CompraSeg"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Button Overlay - Centered on the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center translate-y-1/2 pointer-events-none">
                <div className="container mx-auto px-4 text-center pointer-events-auto">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#001845] via-[#0044cc] to-[#001845] hover:from-[#00215E] hover:via-[#0055dd] hover:to-[#00215E] text-white font-extrabold text-lg md:text-xl py-8 px-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 border border-white/10"
                    >
                        Baixe o Folder com a programação completa
                    </Button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
