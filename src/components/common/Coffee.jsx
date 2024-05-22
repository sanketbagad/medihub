import React from 'react';

const BuyMeACoffeeButton = () => {
  const containerStyle = {
    position: 'fixed',
    bottom: '2rem', // 6 * 0.25rem
    right: '1.5rem', // 6 * 0.25rem
    zIndex: '1000', // z-50
  };

  const linkStyle = {
    backgroundColor: '#F59E0B', // yellow-500
    color: '#FFFFFF', // white
    fontWeight: '500', // medium
    borderRadius: '0.375rem', // md
    padding: '0.5rem 1rem', // px-4 py-2
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
  };

  const iconStyle = {
    fontSize: '3rem', // text-lg
    fontWeight: '700', // bold
    marginRight: '0.5rem', // mr-2
    color: "black"
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#D97706'; // yellow-600
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#F59E0B'; // yellow-500
  };

  return (
    <div style={containerStyle}>
      <a
        href="https://www.buymeacoffee.com/sanketbagad"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={iconStyle}>☕</span>
        Buy me a coffee🔥
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
