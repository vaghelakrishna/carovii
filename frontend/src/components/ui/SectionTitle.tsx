type Props = {
  number: number;
  title: string;
};

const SectionTitle = ({ number, title }: Props) => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
        {number}
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;