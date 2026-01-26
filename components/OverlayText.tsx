import React from 'react';

interface OverlayTextProps {
  title?: string;
  subtitle?: string;
  text: string[];
  footer?: string;
  align?: 'left' | 'right' | 'center';
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function OverlayText({ 
  title, 
  subtitle,
  text, 
  footer,
  align = 'left',
  color = 'white',
  style,
  className = ''
}: OverlayTextProps) {
  return (
    <div 
      className={`max-w-4xl mx-auto px-6 ${className}`}
      style={{
        color: color,
        textAlign: align,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        ...style
      }}
    >
      <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl">
        {title && (
          <h1 
            className="text-4xl md:text-6xl mb-8 uppercase pb-6"
            style={{
              fontFamily: "'ARBONNIE', 'Americana', 'Bellerose', cursive, sans-serif",
              letterSpacing: '0.15em',
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            <span className="relative inline-block">
              {title}
              <span 
                className="absolute bottom-0 left-0 h-1"
                style={{ 
                  width: '45%',
                  backgroundColor: '#003153',
                  marginTop: '0.2em'
                }}
              />
            </span>
          </h1>
        )}
        {subtitle && (
          <h2 className="text-xl md:text-3xl font-light mb-6" style={{ color: '#FFFFFF' }}>
            {subtitle}
          </h2>
        )}
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#FFFFFF' }}>
          {text.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} style={{ color: '#FFFFFF' }} />
          ))}
        </div>
        {footer && (
          <p className="mt-10 text-sm md:text-base font-mono text-right" style={{ color: '#FFFFFF' }}>
            {footer}
          </p>
        )}
      </div>
    </div>
  );
}
