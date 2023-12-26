import getStyles from "../../Style";

interface Props {
  title: string;
}
function DateSelector({ title }: Props) {
  return <div className={getStyles(styles, "ctn")}>{title}</div>;
}

const styles = {
  ctn: ["rounded-md", "w-[103px]", "px-[20px]", "py-[8px]"],
};

export default DateSelector;
