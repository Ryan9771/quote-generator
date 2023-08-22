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
    "fixed",
    "top-0",
    "w-full",
    "flex",
    "items-center",
    "justify-start",
    "pt-4",
    "px-1",
    // "md:pt-2",
    "md:px-2",
    "bg-paper",
    "z-20",
  ],
};

export default Navbar;
