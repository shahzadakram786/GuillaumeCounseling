"use client";

export const Representation = ({ data, image }: { data: any, image: string }) => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={image} 
            alt="A Practice Rooted in Representation" 
            className="w-full h-auto object-cover rounded-[2rem] shadow-sm" 
            loading="lazy" 
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold text-gray-900 mb-6 tracking-tight">
            A Practice Rooted in Representation
          </h2>
          
          <div className="text-[16px] text-gray-800 leading-relaxed">
            <p className="mb-4 whitespace-pre-line">
              {data.intro}
            </p>
            
            <ul className="list-disc ml-5 space-y-2 mb-6 text-gray-800 marker:text-gray-600">
              {data.values.map((v: string) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            
            <p className="font-medium text-gray-900">
              {data.closing}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};