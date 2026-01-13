"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download } from "lucide-react";

export function GalleryCarousel() {
    const images: string[] = [
        "/carrossel/06ca43b0-74a3-41cf-a3da-5ce4b2f45274.jpg",
        "/carrossel/5cc153fb-7012-462b-8321-d8e08f2306dd.jpg",
        "/carrossel/75db34b5-43ca-45f8-8171-2b0397ed22b7.jpg",
        "/carrossel/7c8f7c47-3aaf-4a2e-9b91-75eda18d244e.jpg",
        "/carrossel/84422d7d-5874-430c-98df-234e627182d8.jpg",
        "/carrossel/8d202c80-29a2-4cdd-9618-214176f6e36c.jpg",
        "/carrossel/b67a6df3-d1f3-48af-a1ed-2d94487bef4e.jpg",
        "/carrossel/6a941714-56e4-4977-8081-6a843cf514a5.jpg",
        "/carrossel/d9757792-41c2-4482-8ce0-6f7a28427b5c.jpg",
        "/carrossel/f9e4b086-2194-46c7-ba6c-0611fb6c6468.jpg",
    ];

    return (
        <section className="relative py-0 bg-primary z-20">
            {/* Top Border - 50% width, Left aligned */}
            <div className="w-[50%] h-1 bg-tactical-gold" />

            {/* Infinite Scroll Carousel */}
            <div className="w-full overflow-hidden relative z-0">
                <div className="flex animate-scroll w-max">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="relative w-[400px] h-[400px] shrink-0 overflow-hidden">
                            <Image
                                src={src}
                                alt="Evento CompraSeg"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Border - 50% width, Right aligned */}
            <div className="w-[50%] h-1 bg-tactical-gold ml-auto" />

            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-4000px); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
