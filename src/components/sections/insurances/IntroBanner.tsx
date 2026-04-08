export const IntroBanner = ({ data }: { data: any }) => {
  return (
    <div className="bg-white rounded-[1.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 max-w-4xl mx-auto mb-20 text-center">
      <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-6 tracking-tight">Psychotherapy Services</h2>
      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8">
        {data.intro}
      </p>
      <div className="inline-block bg-pink-50 text-[#d8008a] font-bold text-[15px] md:text-[16px] px-6 py-3 rounded-xl border border-pink-100 shadow-sm">
        {data.responsibility}
      </div>
    </div>
  );
};