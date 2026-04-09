"use client";

// DRY HELPER: Function to detect and wrap URLs with a premium link style
const formatReferenceText = (text: string) => {
  // Regex to find URLs starting with http or www
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
  
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part.startsWith("http") ? part : `https://${part}`}
          target="_blank"
          rel="noopener noreferrer"
          // Added break-all for mobile so long URLs don't break the screen width
          className="relative inline-block text-[#17609f] font-medium group/link break-all sm:break-normal"
        >
          {part}
          {/* Premium Animated Underline */}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#d8008a] transition-all duration-300 group-hover/link:w-full" />
        </a>
      );
    }
    return part;
  });
};

export const ServiceReferences = ({ references }: { references: string[] }) => {
  return (
    // Scaled padding for mobile (py-12) and desktop (py-20)
    <section className="py-12 md:py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Scaled heading size and margin */}
        <h2 className="text-2xl md:text-3xl font-marcellus text-gray-900 mb-6 md:mb-10 tracking-tight font-bold">
          References
        </h2>
        
        {/* Scaled spacing between items */}
        <div className="space-y-3 md:space-y-4">
          {references.map((ref, i) => (
            // Scaled text size: 13px on mobile, 14px on md+ screens
            <p key={i} className="text-[13px] md:text-[14px] text-gray-800 leading-relaxed break-words">
              {formatReferenceText(ref)}
            </p>
          ))}
          
          <div className="pt-6 md:pt-8 border-t border-gray-100 mt-6 md:mt-8">
            {/* Scaled footer text size */}
            <p className="text-[11px] md:text-[12px] font-bold text-gray-400 uppercase tracking-[1px] italic">
              Revised May 9, 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};