"use client";

import Link from "next/link";

// 1. Define the exact shape of your video data
export interface FeaturedVideo {
  id: string | number;
  imageSrc: string;
  videoSrc: string;
}

// 2. Reusable Video Card Component
const VideoCard = ({ imageSrc, videoSrc }: { imageSrc: string; videoSrc: string }) => {
  return (
    <div className="relative w-[260px] h-[420px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 bg-black border border-white/10">
      <video 
        className="w-full h-full object-cover"
        controls 
        poster={imageSrc} 
        preload="metadata"
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// 3. Main Showcase Section Component
// Now accepts 'videos' as a dynamic prop!
export const FeaturedVideos = ({ videos }: { videos: FeaturedVideo[] }) => {
  // If no videos are passed, don't render the section at all
  if (!videos || videos.length === 0) return null;

  return (
    <section 
      className="w-full py-16 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(90deg, #093057 0%, #d8008a 100%)" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* 3-Column Video Grid mapped from dynamic props */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-12">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              videoSrc={video.videoSrc}
              imageSrc={video.imageSrc}
            />
          ))}
        </div>

        {/* Action Button */}
        <Link
          href="/contact-us"
          className="inline-block px-8 py-3.5 bg-[#d8008a] text-white rounded font-bold hover:bg-pink-600 transition-colors text-[13px] uppercase tracking-wide shadow-lg border border-white/20"
        >
          Request an Appointment
        </Link>

      </div>
    </section>
  );
};