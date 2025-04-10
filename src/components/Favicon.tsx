
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
    
    // Also update apple touch icon for iOS devices
    let appleIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = dataUrl;
    
    // Update mobile web app meta tags for better mobile experience
    setMobileMetaTags();
  };
  
  const setMobileMetaTags = () => {
    // Add mobile web app capability meta tags
    const metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Vibelaunch.io' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#0b0f19' }
    ];
    
    metaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name='${tag.name}']`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
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
