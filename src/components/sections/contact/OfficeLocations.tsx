"use client";

const locations = [
  { title: "Oregon In-person address by appointment only", mapUrl: "https://www.google.com/maps/embed?..." },
  { title: "Oregon In-person address by appointment only", mapUrl: "https://www.google.com/maps/embed?..." },
  { title: "California In-person address by appointment only", mapUrl: "https://www.google.com/maps/embed?..." },
  { title: "Telehealth only (in-person coming soon in Spring 2026)", mapUrl: "https://www.google.com/maps/embed?..." },
];

export const OfficeLocations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col">
              <div className="bg-[#17609f] py-5 px-8 text-center rounded-b-[2rem] mx-4 shadow-md relative z-10 -mt-2">
                <h3 className="text-white font-bold text-[15px] md:text-[16px] leading-tight">
                  {loc.title}
                </h3>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <div className="rounded-2xl overflow-hidden border border-gray-100 h-[250px]">
                   <iframe src={loc.mapUrl} className="w-full h-full border-0" allowFullScreen loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};