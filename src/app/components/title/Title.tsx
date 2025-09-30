export default function Title(props: { text: string; className?: string }) {
  const { text, className } = props;
  return (
    <>
      <h2
        className={
          "font-bold text-2xl text-[#EFEEE0] capitalize mb-5 " + className
        }
      >
        {text}
      </h2>
    </>
  );
}
