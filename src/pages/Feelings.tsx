import getStyles from "../Style";
import ComfortReponse from "../components/feelings/ComfortResponse";
import Quotes from "../components/feelings/Quotes";
import { useParams } from "react-router-dom";

function Feelings() {
  const { emotion } = useParams();

  return (
    <div className={getStyles(styles, "ctn")}>
      <ComfortReponse emotion={emotion ?? ""} />
      <Quotes emotion={emotion ?? ""} />
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
