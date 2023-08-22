import { useMemo } from "react";
import getStyles from "../../Style";
import { HashLink } from "react-router-hash-link";

function HomeLink() {
  const personIcon = useMemo(
    () => (
      <svg
        className={getStyles(styles, "icon")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z" />
      </svg>
    ),
    []
  );

  return (
    <HashLink to="/#" className={getStyles(styles, "ctn")}>
      {personIcon}
      <p className={getStyles(styles, "text")}>Home</p>
    </HashLink>
  );
}

const styles = {
  ctn: ["flex", "items-center", "gap-2", "cursor-pointer", "hover:scale-105"],
  icon: ["h-5", "w-5"],
  text: ["tracking-wide", "font-semibold"],
};

export default HomeLink;
