import getStyles from "../../Style";
import HomeLink from "./HomeLink";

function Navbar() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <HomeLink />
    </div>
  );
}

const styles = {
  ctn: [
    "w-full",
    "flex",
    "items-center",
    "justify-start",
    "py-3",
    "sm:py-5",
    "sm:px-2",
  ],
};

export default Navbar;
