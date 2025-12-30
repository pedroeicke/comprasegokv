import Image from "next/image";
import { cn } from '@/lib/utils';

interface BrandLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, size = 'md' }) => {
    // Map sizes to height relative to text sizes
    const sizeClasses = {
        sm: 'h-6',
        md: 'h-8',
        lg: 'h-12',
        xl: 'h-16',
    };

    return (
        <div className={cn("relative", sizeClasses[size], className)}>
            <Image
                src="/herocompras.png"
                alt="COMPRASEG"
                width={300} // Aspect ratio base
                height={100}
                className="w-auto h-full object-contain"
                priority
            />
        </div>
    );
};
