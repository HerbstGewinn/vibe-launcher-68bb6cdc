
import React from 'react';

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

  React.useEffect(() => {
    // Generate the Apple touch icon
    const iconUrl = generateAppleTouchIcon();
    if (!iconUrl) return;
    
    // Create a blob from the data URL
    fetch(iconUrl)
      .then(res => res.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        
        // Update all apple-touch-icon links
        const selectors = [
          "link[rel='apple-touch-icon']", 
          "link[rel='apple-touch-icon'][sizes='152x152']",
          "link[rel='apple-touch-icon'][sizes='167x167']",
          "link[rel='apple-touch-icon'][sizes='180x180']",
          "link[rel='apple-touch-icon-precomposed']"
        ];
        
        selectors.forEach(selector => {
          const links = document.querySelectorAll(selector);
          links.forEach(link => {
            link.setAttribute('href', objectUrl);
          });
        });
      });
  }, []);
  
  // Component doesn't render anything visible
  return null;
};

export default AppleTouchIcon;
