import getStyles from "../../Style";
import DateSelector from "./DateSelector";

function TextPage() {
  return (
    <>
      <div className={getStyles(styles, "btns")}>
        <DateSelector title={"Dream"} />
        <DateSelector title={"Rant"} />
      </div>
    </>
  );
}

const styles = {
  ctn: ["flex", "flex-col", "p-3"],
  btns: ["flex", "justify-start", "gap-4", "items-center"],
};

export default TextPage;
