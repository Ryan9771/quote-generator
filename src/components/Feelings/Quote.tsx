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
      {quote}
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
    "md:snap-start",
    "md:text-lg",
  ],
};

export default Quote;
