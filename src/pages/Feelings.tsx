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
  ctn: ["flex", "flex-col", "items-center", "gap-16"],
};

export default Feelings;
