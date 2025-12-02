import React from 'react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, size = 'md' }) => {
    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-4xl',
        xl: 'text-6xl md:text-8xl lg:text-9xl',
    };

    return (
        <span className={cn("font-black tracking-tight text-white uppercase font-display", sizeClasses[size], className)}>
            COMPRASEG
        </span>
    );
};
