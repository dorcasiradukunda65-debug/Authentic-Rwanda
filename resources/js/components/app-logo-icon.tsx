import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun concentric rings */}
            <circle cx="50" cy="40" r="16" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="40" r="9" stroke="currentColor" strokeWidth="4" />
            
            {/* Sun Rays */}
            <line x1="50" y1="12" x2="50" y2="17" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="22" y1="40" x2="27" y2="40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="73" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="30" y1="20" x2="34" y2="24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="66" y1="24" x2="70" y2="20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Mountains/Hills Curves */}
            <path
                d="M15 82 C 30 50, 40 50, 55 82"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M45 82 C 60 40, 70 40, 85 82"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M30 82 C 45 45, 55 45, 70 82"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}
