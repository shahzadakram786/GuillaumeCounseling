export const OurApproach = ({ data }: { data: any }) => {
  return (
    <div className="bg-[#17609f] w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-24 my-16">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-marcellus


 font-bold mb-6">Our Approach</h2>
          
          <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-white/90">
            <p className="font-semibold">{data.intro}</p>
            <p>{data.text}</p>
            
            <div className="pt-2">
              <p className="font-semibold mb-2">{data.goal}</p>
              <p>This means:</p>
            </div>
            
            <ul className="list-disc list-inside space-y-1.5 ml-1 marker:text-white">
              {data.list.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            
            <p className="font-medium pt-2">{data.closing}</p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={data.image} 
            alt="Our Approach" 
            className="w-full max-w-md h-auto object-cover rounded-[2rem] shadow-xl" 
            loading="lazy" 
          />
        </div>
        
      </div>
    </div>
  );
};