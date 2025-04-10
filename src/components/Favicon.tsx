
import React from 'react';

const Favicon = () => {
  const setFavicon = () => {
    // Create a canvas element to draw our favicon
    const canvas = document.createElement('canvas');
    canvas.width = 180; // Increasing size for better quality on high-resolution screens
    canvas.height = 180;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, '#0b0f19');
    gradient.addColorStop(1, '#161b2c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 180, 180);
    
    // Draw the "V" shape with stronger glowing effect
    ctx.strokeStyle = '#0affff';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = '#0affff';
    ctx.shadowBlur = 15;
    
    // Draw the "V" - scaled up for the larger canvas
    ctx.beginPath();
    ctx.moveTo(54, 45);
    ctx.lineTo(90, 135);
    ctx.lineTo(126, 45);
    ctx.stroke();
    
    // Convert to data URL and set as favicon
    const dataUrl = canvas.toDataURL('image/png');
    
    // Set various icon types for cross-browser and device compatibility
    setIconsForAllPlatforms(dataUrl);
  };
  
  const setIconsForAllPlatforms = (iconUrl: string) => {
    // Standard favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = iconUrl;
    link.type = 'image/png';
    
    // Apple touch icon
    let appleIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = iconUrl;
    
    // Apple touch icon precomposed (for older iOS)
    let appleIconPrecomposed = document.querySelector("link[rel='apple-touch-icon-precomposed']") as HTMLLinkElement;
    if (!appleIconPrecomposed) {
      appleIconPrecomposed = document.createElement('link');
      appleIconPrecomposed.rel = 'apple-touch-icon-precomposed';
      document.head.appendChild(appleIconPrecomposed);
    }
    appleIconPrecomposed.href = iconUrl;
    
    // Shortcut icon (for older browsers)
    let shortcutIcon = document.querySelector("link[rel='shortcut icon']") as HTMLLinkElement;
    if (!shortcutIcon) {
      shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      document.head.appendChild(shortcutIcon);
    }
    shortcutIcon.href = iconUrl;
    
    // Also update manifest icon if manifest exists
    let manifest = document.querySelector("link[rel='manifest']") as HTMLLinkElement;
    if (manifest) {
      try {
        const manifestData = {
          icons: [
            { src: iconUrl, sizes: '192x192', type: 'image/png' },
            { src: iconUrl, sizes: '512x512', type: 'image/png' }
          ]
        };
        const blob = new Blob([JSON.stringify(manifestData)], { type: 'application/json' });
        manifest.href = URL.createObjectURL(blob);
      } catch (e) {
        console.error('Failed to update manifest:', e);
      }
    }
    
    // Update mobile web app meta tags
    setMobileMetaTags();
  };
  
  const setMobileMetaTags = () => {
    // Add mobile web app capability meta tags
    const metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Vibelaunch.io' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#0b0f19' },
      { name: 'msapplication-TileColor', content: '#0b0f19' },
      { name: 'msapplication-TileImage', content: document.querySelector("link[rel='icon']")?.getAttribute('href') || '' }
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
    
    // Also periodically check/update the favicon to ensure it persists (some mobile browsers clear it)
    const intervalId = setInterval(setFavicon, 10000); // Check every 10 seconds
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(intervalId);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default Favicon;
