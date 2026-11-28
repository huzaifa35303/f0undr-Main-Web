'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-container mx-auto">
        <div className="glass-panel rounded-3xl p-3 sm:p-5 relative overflow-hidden border-accent/20 shadow-2xl">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 py-2.5 mb-3 border-b border-border-subtle text-xs font-mono">
            <div className="flex items-center gap-2 text-accent">
              <Film className="w-4 h-4" />
              <span className="lowercase">commercial production reel // master cut</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>4K H.264 // 60fps</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden bg-bg-card aspect-video group">
            <video
              ref={videoRef}
              src="/videos/ad-showcase.mp4"
              poster="/images/posters/poster-lays-studio.jpg"
              preload="auto"
              className="w-full h-full object-cover cursor-pointer"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Center Play Button when paused */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play showcase video"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-accent/90 text-bg flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform z-10"
              >
                <Play className="w-7 h-7 ml-1 fill-current" />
              </button>
            )}

            {/* Video Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-standard pointer-events-none flex flex-col justify-end p-4 sm:p-6">
              <div className="flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-strong text-text-primary flex items-center justify-center hover:bg-accent hover:text-bg transition-standard"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-strong text-text-primary flex items-center justify-center hover:bg-accent hover:text-bg transition-standard"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-xs font-mono text-text-primary hidden sm:inline-block ml-2">
                    f0undr Commercial Ad Campaign
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-strong text-text-primary flex items-center justify-center hover:bg-accent hover:text-bg transition-standard"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Always visible mute toggle pill in top right corner */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-bg-card/80 backdrop-blur-md border border-border-subtle text-text-primary text-xs font-mono flex items-center gap-1.5 hover:border-accent hover:text-accent transition-standard"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent">sound on</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom video details footer */}
          <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-secondary">
            <p className="max-w-xl">
              Captured and directed by f0undr. We script, shoot, light, and edit high-velocity commercials and digital campaigns designed to maximize product sales.
            </p>
            <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-text-muted">
              <span>deliverables:</span>
              <span className="px-2 py-0.5 rounded bg-tag-bg text-text-primary">tv spot</span>
              <span className="px-2 py-0.5 rounded bg-tag-bg text-text-primary">social cutdowns</span>
              <span className="px-2 py-0.5 rounded bg-tag-bg text-text-primary">key visual</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
