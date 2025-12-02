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
        <section className="relative py-0 bg-primary z-20">
            {/* Top Border - 50% width, Left aligned */}
            <div className="w-[50%] h-1 bg-tactical-gold" />

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

            {/* Bottom Border - 50% width, Right aligned */}
            <div className="w-[50%] h-1 bg-tactical-gold ml-auto" />

            {/* Button Overlay - Centered on the bottom edge */}


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
