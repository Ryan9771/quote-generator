import getStyles from "../Style";
import ComfortReponse from "../components/feelings/ComfortResponse";
import Quotes from "../components/feelings/Quotes";

function Feelings() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <ComfortReponse />
      <Quotes />
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "items-center",
    "gap-16",
    "md:gap-0",
    "md:flex-row",
    "md:justify-around",
    "md:h-full",
    "overscroll-none",
    // "sm:overflow-y-scroll",
  ],
};

export default Feelings;
