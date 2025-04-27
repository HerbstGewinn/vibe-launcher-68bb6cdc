
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-neon/20">
        <video
          ref={videoRef}
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
        <button 
          onClick={togglePlayPause}
          className="absolute bottom-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
      </div>
    </section>
  );
};

export default VideoDemo;
