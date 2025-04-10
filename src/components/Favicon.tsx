
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
    
    // Apple touch icons - specific sizes for different devices
    setAppleIcon(iconUrl, '');
    setAppleIcon(iconUrl, '152x152');
    setAppleIcon(iconUrl, '167x167');
    setAppleIcon(iconUrl, '180x180');
    
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
    
    // Update manifest
    updateWebAppManifest(iconUrl);
    
    // Update mobile web app meta tags
    setMobileMetaTags(iconUrl);
  };

  const setAppleIcon = (iconUrl: string, size: string) => {
    const selector = size 
      ? `link[rel='apple-touch-icon'][sizes='${size}']` 
      : "link[rel='apple-touch-icon']:not([sizes])";
      
    let appleIcon = document.querySelector(selector) as HTMLLinkElement;
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      if (size) appleIcon.setAttribute('sizes', size);
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = iconUrl;
  };
  
  const updateWebAppManifest = (iconUrl: string) => {
    // Create and update web app manifest dynamically
    const manifestData = {
      name: "Vibelaunch.io - From 0 to 1000 users",
      short_name: "Vibelaunch",
      description: "Launch your product and grow from 0 to 1000 users with Vibelaunch.io",
      start_url: "/",
      display: "standalone",
      background_color: "#0b0f19",
      theme_color: "#0b0f19",
      icons: [
        {
          src: iconUrl,
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: iconUrl,
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: iconUrl,
          sizes: "180x180", // iOS recommended size
          type: "image/png"
        }
      ]
    };
    
    try {
      const blob = new Blob([JSON.stringify(manifestData)], { type: 'application/json' });
      const manifestUrl = URL.createObjectURL(blob);
      
      let manifest = document.querySelector("link[rel='manifest']") as HTMLLinkElement;
      if (!manifest) {
        manifest = document.createElement('link');
        manifest.rel = 'manifest';
        document.head.appendChild(manifest);
      }
      manifest.href = manifestUrl;
    } catch (e) {
      console.error('Failed to update manifest:', e);
    }
  };
  
  const setMobileMetaTags = (iconUrl: string) => {
    // Add mobile web app capability meta tags
    const metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Vibelaunch.io' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#0b0f19' },
      { name: 'msapplication-TileColor', content: '#0b0f19' },
      { name: 'msapplication-TileImage', content: iconUrl }
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

    // Add specific meta tag for apple-touch-startup-image
    let startupImage = document.querySelector("link[rel='apple-touch-startup-image']") as HTMLLinkElement;
    if (!startupImage) {
      startupImage = document.createElement('link');
      startupImage.rel = 'apple-touch-startup-image';
      document.head.appendChild(startupImage);
    }
    startupImage.href = iconUrl;
  };
  
  // Set favicon when component mounts and frequently check it persists
  React.useEffect(() => {
    // Set initial favicon
    setFavicon();
    
    // Update favicon when window is focused or becomes visible
    const handleFocus = () => setFavicon();
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setFavicon();
      }
    };
    
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // More aggressive checking on iOS - check every 2 seconds
    const intervalId = setInterval(setFavicon, 2000);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default Favicon;
