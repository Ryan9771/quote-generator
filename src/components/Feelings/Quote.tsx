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
    "px-3",
    "py-2",
    "rounded-lg",
    "shadow-sm",
    "font-medium",
    "text-center",
  ],
};

export default Quote;
