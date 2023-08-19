import getStyles from "../Style";
import paperBackground from "../assets/images/paper-texture.svg";

function Home() {
  return <div className={getStyles(styles, "ctn")}></div>;
}

const styles = {
  ctn: ["bg-paper", "w-full", "h-full"],
};

export default Home;
