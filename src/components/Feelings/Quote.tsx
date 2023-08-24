import getStyles from "../../Style";

interface Props {
  quote: string;
  index: number;
}

function Quote({ quote, index }: Props) {
  return (
    <div
      className={
        getStyles(styles, "ctn") +
        (index % 2 === 0 ? "bg-darkerBlue text-white" : "bg-brown")
      }
    >
      <b className="text-lg">“ </b>
      {`${quote}`}
      <b className="text-lg"> ”</b>
    </div>
  );
}

const styles = {
  ctn: [
    "w-80",
    "md:w-[360px]",
    "px-3",
    "py-2",
    "rounded-lg",
    "shadow-md",
    "font-normal",
    "text-center",
    "cursor-pointer",
    "hover:scale-[102%]",
    "md:px-4",
    "md:snap-start",
    "md:text-base",
    "md:font-normal",
    "trans",
  ],
};

export default Quote;
