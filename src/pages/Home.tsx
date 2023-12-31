import getStyles from "../Style";
import mom from "/mom.svg";
import TextFieldGroup from "../components/home/TextfieldGroup";

function Home() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "headingCtn")}>
        <img src={mom} className={getStyles(styles, "momIcon")} alt="mom" />
        <p className={getStyles(styles, "header")}>Hey, how are you feeling?</p>
      </div>
      <TextFieldGroup />
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "mt-24",
    "sm:mt-0",
    "justify-start",
    "sm:justify-center",
    "items-center",
    "gap-14",
    "sm:gap-[55px]",
    "w-full",
    "h-full",
  ],
  headingCtn: ["flex", "flex-col", "items-center", "gap-3"],
  momIcon: ["h-[170px]"],
  header: ["text-xl", "font-medium"],
};

export default Home;
