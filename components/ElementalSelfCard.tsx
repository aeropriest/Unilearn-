type ElementalSelfCardProps = {
  data: {
    title: string;
    titleColor: string;
    elements: {
      type: string;
      subtitle: string;
      label: string;
      description: string;
      typeColor: string;
      subtitleColor: string;
      labelColor: string;
      descriptionColor: string;
    }[];
  };
};

export default function ElementalSelfCard({ data }: ElementalSelfCardProps) {
  return (
    <div className="w-full max-w-[1140px] p-4 bg-white/40 rounded-xl backdrop-blur-md flex flex-col gap-4 overflow-hidden mt-[15px]">

      <div style={{ color: data.titleColor }} className="text-xs font-bold font-comfortaa">{data.title}</div>

      <div className="flex flex-wrap gap-3 w-full">
        {data.elements.map((el, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)] rounded-xl bg-gradient-to-br from-blue-300/10 to-teal-400/10 p-4 flex flex-col gap-2"
          >
            <p style={{ color: el.typeColor }} className="text-base text-sky-900 font-questrial">{el.type}</p>
            <p style={{ color: el.subtitleColor }} className="text-xs font-bold text-sky-800/60 font-comfortaa">{el.subtitle}</p>
            <p style={{ color: el.labelColor }} className="text-lg text-sky-600 font-didact mt-2">{el.label}</p>
            <p style={{ color: el.descriptionColor }} className="text-base text-gray-600 font-didact">{el.description}</p>
          </div>
        ))}
      </div>

    </div>



  );
}
