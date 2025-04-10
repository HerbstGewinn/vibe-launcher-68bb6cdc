
import React, { useEffect } from 'react';

const AppleTouchIcon = () => {
  const generateAppleTouchIcon = () => {
    // Create a canvas element to draw our icon
    const canvas = document.createElement('canvas');
    canvas.width = 180; // Apple recommends 180x180 for highest resolution
    canvas.height = 180;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return null;
    
    // Create a slightly different background gradient for Apple icons - more vivid
    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, '#0b0f19');
    gradient.addColorStop(0.5, '#182038');
    gradient.addColorStop(1, '#26304e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 180, 180);
    
    // Draw a slightly thicker "V" shape with stronger glow
    ctx.strokeStyle = '#0bffff';
    ctx.lineWidth = 14; // Thicker than regular favicon
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = '#0bffff';
    ctx.shadowBlur = 20; // More glow for Apple devices
    
    // Draw the "V"
    ctx.beginPath();
    ctx.moveTo(54, 45);
    ctx.lineTo(90, 135);
    ctx.lineTo(126, 45);
    ctx.stroke();
    
    // Convert to data URL and return it
    return canvas.toDataURL('image/png');
  };

  useEffect(() => {
    // Generate the Apple touch icon
    const iconUrl = generateAppleTouchIcon();
    if (!iconUrl) return;
    
    // Create a blob from the data URL
    fetch(iconUrl)
      .then(res => res.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        
        // Create or update all apple-touch-icon links
        const selectors = [
          "link[rel='apple-touch-icon']", 
          "link[rel='apple-touch-icon'][sizes='152x152']",
          "link[rel='apple-touch-icon'][sizes='167x167']",
          "link[rel='apple-touch-icon'][sizes='180x180']",
          "link[rel='apple-touch-icon-precomposed']"
        ];
        
        selectors.forEach(selector => {
          let links = document.querySelectorAll(selector);
          
          // If no links exist, create a new one
          if (links.length === 0) {
            const link = document.createElement('link');
            link.rel = selector.match(/apple-touch-icon(?:-precomposed)?/)?.[0] || 'apple-touch-icon';
            
            // Add size attribute if specified in selector
            const sizeMatch = selector.match(/sizes='(\d+x\d+)'/);
            if (sizeMatch && sizeMatch[1]) {
              link.setAttribute('sizes', sizeMatch[1]);
            }
            
            link.href = objectUrl;
            document.head.appendChild(link);
          } else {
            // Update existing links
            links.forEach(link => {
              link.setAttribute('href', objectUrl);
            });
          }
        });
        
        // Also update the manifest.json icons
        updateManifestIcons(objectUrl);
      });
      
    // Check and update icons periodically to ensure they persist
    const intervalId = setInterval(() => {
      const appleIcons = document.querySelectorAll("link[rel^='apple-touch-icon']");
      if (appleIcons.length === 0 || !appleIcons[0].getAttribute('href').includes('blob:')) {
        // Icons missing or reset, reapply them
        console.log("Reapplying Apple Touch Icons");
        setAppleIcons();
      }
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const setAppleIcons = () => {
    const iconUrl = generateAppleTouchIcon();
    if (!iconUrl) return;
    
    fetch(iconUrl)
      .then(res => res.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        updateAppleIcons(objectUrl);
        updateManifestIcons(objectUrl);
      });
  };
  
  const updateAppleIcons = (iconUrl: string) => {
    const selectors = [
      "link[rel='apple-touch-icon']", 
      "link[rel='apple-touch-icon'][sizes='152x152']",
      "link[rel='apple-touch-icon'][sizes='167x167']",
      "link[rel='apple-touch-icon'][sizes='180x180']",
      "link[rel='apple-touch-icon-precomposed']"
    ];
    
    selectors.forEach(selector => {
      let links = document.querySelectorAll(selector);
      
      // If no links exist, create a new one
      if (links.length === 0) {
        const link = document.createElement('link');
        link.rel = selector.match(/apple-touch-icon(?:-precomposed)?/)?.[0] || 'apple-touch-icon';
        
        // Add size attribute if specified in selector
        const sizeMatch = selector.match(/sizes='(\d+x\d+)'/);
        if (sizeMatch && sizeMatch[1]) {
          link.setAttribute('sizes', sizeMatch[1]);
        }
        
        link.href = iconUrl;
        document.head.appendChild(link);
      } else {
        // Update existing links
        links.forEach(link => {
          link.setAttribute('href', iconUrl);
        });
      }
    });
  };
  
  const updateManifestIcons = (iconUrl: string) => {
    let manifestLink = document.querySelector("link[rel='manifest']") as HTMLLinkElement;
    if (!manifestLink) return;
    
    // Create a new manifest with updated icon URLs
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
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: iconUrl,
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: iconUrl,
          sizes: "180x180",
          type: "image/png",
          purpose: "any"
        },
        {
          src: iconUrl,
          sizes: "152x152",
          type: "image/png",
          purpose: "any"
        },
        {
          src: iconUrl,
          sizes: "167x167",
          type: "image/png",
          purpose: "any"
        }
      ]
    };
    
    // Create a blob from the manifest data
    const blob = new Blob([JSON.stringify(manifestData)], { type: 'application/json' });
    const manifestUrl = URL.createObjectURL(blob);
    
    // Update the manifest link
    manifestLink.href = manifestUrl;
  };
  
  // Component doesn't render anything visible
  return null;
};

export default AppleTouchIcon;
