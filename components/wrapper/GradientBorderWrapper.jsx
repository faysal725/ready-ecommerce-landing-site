import React from 'react';

const GradientBorderWrapper = ({
  children,
  colors = ['#ff00ff', '#00ffff'], // default: magenta to cyan
  thickness = 4,                    // border thickness in px
  borderRadius = '12px',            // any valid CSS radius
  className = '',
  padding = '12px',                 // inner content padding
  angle = '135deg'
}) => {
  const gradientStyle = {
    background: `linear-gradient(${angle}, ${colors.join(', ')})`,
    padding: `${thickness}px`,      // creates space for the "border"
    borderRadius,
    display: 'inline-block',        // respects child's size if needed
  };

  const innerStyle = {
    background: 'inherit', // or use 'white', '#1a1a1a', etc. for dark mode
    borderRadius: `calc(${borderRadius} - ${thickness}px)`,
    padding,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <div className={`gradient-border-wrapper ${className}`} style={gradientStyle}>
      <div style={innerStyle}>{children}</div>
    </div>
  );
};

export default GradientBorderWrapper;