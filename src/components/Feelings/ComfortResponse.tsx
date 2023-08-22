import getStyles from "../../Style";
import mom from "../../assets/images/mom.svg";

function ComfortReponse() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <img src={mom} className={getStyles(styles, "momIcon")} alt="mom" />
      <p className={getStyles(styles, "comfortQuote")}>
        "Don't worry, we've all been there. Find comfort in these quotes from
        others in the same boat"
      </p>
    </div>
  );
}

const styles = {
  ctn: ["flex", "flex-col", "gap-10", "items-center", "mt-24"],
  momIcon: ["h-40", "sm:h-44"],
  comfortQuote: [
    "text-center",
    "bg-darkerGreen",
    "px-4",
    "py-3",
    "text-white",
    "rounded-lg",
    "w-80",
    "sm:shadow-md",
    "sm:text-lg",
    "sm:w-96",
  ],
};

export default ComfortReponse;
