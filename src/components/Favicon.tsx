
import React from 'react';

const Favicon = () => {
  const setFavicon = () => {
    // Create a canvas element to draw our favicon
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 64);
    gradient.addColorStop(0, '#0b0f19');
    gradient.addColorStop(1, '#161b2c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    
    // Draw the "V" shape with glowing effect
    ctx.strokeStyle = '#0affff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = '#0affff';
    ctx.shadowBlur = 8;
    
    // Draw the "V"
    ctx.beginPath();
    ctx.moveTo(18, 16);
    ctx.lineTo(32, 48);
    ctx.lineTo(46, 16);
    ctx.stroke();
    
    // Convert to data URL and set as favicon
    const dataUrl = canvas.toDataURL('image/png');
    
    // Find existing favicon or create a new one
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    // Set the href attribute to our generated favicon
    link.href = dataUrl;
    link.type = 'image/png';
  };
  
  // Set favicon when component mounts
  React.useEffect(() => {
    setFavicon();
    // Update favicon when window is focused (in case it was changed by another site)
    const handleFocus = () => setFavicon();
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default Favicon;
