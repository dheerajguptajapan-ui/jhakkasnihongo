import React from 'react';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-sm`}
    >
      {/* Dark Red Outer Circle/Border */}
      <circle cx="50" cy="50" r="48" fill="#8B0000" />
      
      {/* Sky Blue Inner Circle */}
      <circle cx="50" cy="50" r="40" fill="#87CEEB" />
      
      {/* Three Stars in Triangle Formation */}
      <path 
        d="M50 20 L53 26 H47 Z" 
        fill="white" 
        transform="translate(0, 0)" 
      />
      <path 
        d="M44 26 L47 32 H41 Z" 
        fill="white" 
      />
      <path 
        d="M56 26 L59 32 H53 Z" 
        fill="white" 
      />
      
      {/* Text: JHAKKAS */}
      <text 
        x="50" 
        y="53" 
        textAnchor="middle" 
        fill="black" 
        style={{ 
          fontSize: '12px', 
          fontWeight: '900', 
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.05em'
        }}
      >
        JHAKKAS
      </text>
      
      {/* Text: 日本語 */}
      <text 
        x="50" 
        y="68" 
        textAnchor="middle" 
        fill="black" 
        style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          fontFamily: '"MS Mincho", "Hiragino Mincho Pro", serif' 
        }}
      >
        日本語
      </text>
    </svg>
  );
};
