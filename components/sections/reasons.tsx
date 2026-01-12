"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';

export const Reasons: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = window.matchMedia('(pointer: coarse)').matches;
            const isSmall = window.innerWidth < 1024;
            setIsMobile(isTouch || isSmall);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll Observer for Single-Card Focus (Mobile Only)
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const center = window.innerHeight / 2;
            let closestIndex = 0;
            let closestDist = Infinity;

            const cards = document.querySelectorAll('.reason-card');
            cards.forEach((card, idx) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const dist = Math.abs(center - cardCenter);

                if (dist < closestDist) {
                    closestDist = dist;
                    closestIndex = idx;
                }
            });

            // Only update if within reasonable range (e.g. card is actually on screen)
            if (closestDist < window.innerHeight / 3) {
                setActiveIndex(closestIndex);
            } else {
                setActiveIndex(null);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const mobileCardVariant = {
        normal: {
            opacity: 1,
            scale: 1,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            borderColor: "rgba(0, 193, 255, 0.2)",
            transition: { duration: 0.5 }
        },
        glow: {
            opacity: 1,
            scale: 1,
            boxShadow: "0px 0px 30px rgba(0, 193, 255, 0.6)",
            borderColor: "rgba(0, 193, 255, 1)",
            transition: { duration: 0.5 }
        }
    };

    const mobileIconVariant = {
        normal: {
            scale: 1,
            opacity: 0.5,
            transition: { duration: 0.5 }
        },
        glow: {
            scale: 1.2,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const mobileGradientVariant = {
        normal: { scaleX: 0, opacity: 1, transition: { duration: 0.5 } },
        glow: { scaleX: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    const getAnimationProps = (idx: number) => {
        if (isMobile) {
            const isActive = activeIndex === idx;
            return {
                initial: "normal",
                animate: isActive ? "glow" : "normal",
                variants: mobileCardVariant
            };
        }
        return {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: idx * 0.1 }
        };
    };

    return (
        <section id="motivos" className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">
                        Por que <span className="text-white">Participar?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REASONS.map((reason, idx) => (
                        <motion.div
                            key={reason.title}
                            {...getAnimationProps(idx)}
                            className="reason-card group relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black/80 to-black/90 p-8 rounded-2xl border border-[#00C1FF]/50 hover:border-[#00C1FF] hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-sm"
                        >
                            <motion.div
                                variants={isMobile ? mobileIconVariant : undefined}
                                animate={isMobile ? (activeIndex === idx ? "glow" : "normal") : undefined}
                                className={`absolute top-0 right-0 p-4 opacity-10 transition-opacity transform duration-500 ${isMobile ? '' : 'group-hover:opacity-20 group-hover:scale-110'}`}
                            >
                                <reason.icon className="w-24 h-24 text-white" />
                            </motion.div>

                            <div className="relative z-10 flex-1">
                                <div className="w-12 h-12 mb-6"></div> {/* Spacer to maintain original height/layout */}

                                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">{reason.title}</h3>
                                <p className="text-white text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>

                            <motion.div
                                variants={isMobile ? mobileGradientVariant : undefined}
                                animate={isMobile ? (activeIndex === idx ? "glow" : "normal") : undefined}
                                style={{ transformOrigin: "left" }}
                                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tactical-gold to-transparent ${isMobile ? '' : 'transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'}`}
                            ></motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
