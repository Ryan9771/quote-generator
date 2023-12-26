import getStyles from "../../Style";

function DatePicker() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <input type="date" />
    </div>
  );
}

const styles = {
  ctn: [
    "bg-brown",
    "rounded-md",
    "shadow-md",
    "w-80",
    "my-2",
    "flex",
    "flex-col",
    "items-center",
  ],
};

export default DatePicker;
