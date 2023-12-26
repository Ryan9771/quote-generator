import DatePicker from "../components/journal/DatePicker";
import getStyles from "../Style";

function Journal() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <DatePicker />
    </div>
  );
}

const styles = {
  ctn: ["w-full", "h-full", "flex", "flex-col", "items-center", "my-12"],
};

export default Journal;
