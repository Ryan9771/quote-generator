import getStyles from "../Style";

function Home() {
  return <div className={getStyles(styles, "ctn")}></div>;
}

const styles = {
  ctn: ["bg-paper", "w-full", "h-full"],
};

export default Home;
