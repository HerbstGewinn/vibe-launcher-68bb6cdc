
import React from 'react';

const VideoDemo = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-neon/20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://xnqbmtsphlduhxrkaopt.supabase.co/storage/v1/object/public/public-files//Auth_preview.png"
        >
          <source
            src="https://xnqbmtsphlduhxrkaopt.supabase.co/storage/v1/object/public/public-files//Deploying%20Your%20App%20with%20Custom%20Domains.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoDemo;
