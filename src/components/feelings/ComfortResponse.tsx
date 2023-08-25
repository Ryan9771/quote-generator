import getStyles from "../../Style";
import mom from "/mom.svg";
import { getComfortQuote } from "./ComfortQuotes";

interface Props {
  emotion: string;
}

function ComfortReponse({ emotion }: Props) {
  return (
    <div className={getStyles(styles, "ctn")}>
      <img src={mom} className={getStyles(styles, "momIcon")} alt="mom" />
      <p className={getStyles(styles, "comfortQuote")}>
        {getComfortQuote(emotion)}
      </p>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "gap-10",
    "items-center",
    "mt-24",
    "md:mt-[-60px]",
    "justify-start",
    "md:mt-0",
    "md:justify-center",
  ],
  momIcon: ["h-48", "sm:h-52"],
  comfortQuote: [
    "text-center",
    "bg-darkerGreen",
    "px-4",
    "py-2",
    "text-white",
    "rounded-lg",
    "w-80",
    "md:shadow-md",
    "md:text-lg",
    "md:w-96",
    "hover:scale-[102%]",
    "cursor-pointer",
    "trans",
  ],
};

export default ComfortReponse;
