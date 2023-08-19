import getStyles from "../Style";
import mom from "../assets/images/mom.svg";

function Home() {
  return (
    <div className={getStyles(styles, "ctn")}>
      <img src={mom} className={getStyles(styles, "momIcon")} alt="mom" />
      <p className={getStyles(styles, "header")}>Hey, how are you feeling?</p>
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
    "gap-[25px]",
    "sm:gap-[55px]",
    "w-full",
    "h-full",
  ],
  momIcon: ["h-[180px]"],
  header: ["text-xl", "font-medium"],
};

export default Home;
