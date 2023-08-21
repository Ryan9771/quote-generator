import getStyles from "../Style";
import mom from "../assets/images/mom.svg";
import TextField from "../components/Home/Textfield";

function Home() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "headingCtn")}>
        <img src={mom} className={getStyles(styles, "momIcon")} alt="mom" />
        <p className={getStyles(styles, "header")}>Hey, how are you feeling?</p>
      </div>
      <TextField />
    </div>
  );
}

const styles = {
  ctn: [
    "bg-paper",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-10",
    "sm:gap-[55px]",
    "w-full",
    "h-full",
  ],
  headingCtn: ["flex", "flex-col", "items-center", "gap-3"],
  momIcon: ["h-[170px]"],
  header: ["text-xl", "font-medium"],
};

export default Home;
