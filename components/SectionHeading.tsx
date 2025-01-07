type Props = {
  topText: string;
  bottomText: string;
};

export default function SectionHeading({ topText, bottomText }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="text-center text-2xl font-bold uppercase text-accent">
        {topText}
      </h4>
      <hr className="w-72" />
      <h2 className="mb-4 px-2 text-center font-press-start text-xl text-primary-500">
        {bottomText}
      </h2>
    </div>
  );
}
