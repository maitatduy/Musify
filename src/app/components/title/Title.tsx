export default function Title(props: { text: string }) {
  const { text } = props;
  return (
    <>
      <h2 className="font-bold text-2xl text-[#EFEEE0] capitalize mb-5">
        {text}
      </h2>
    </>
  );
}
