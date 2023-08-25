import getStyles from "../../Style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AngerQuotes } from "../../quotes/Anger";
import { CuriousQuotes } from "../../quotes/Curious";
import { DepressedQuotes } from "../../quotes/Depressed";
import { HappyQuotes } from "../../quotes/Happy";
import { HeartbreakQuotes } from "../../quotes/Heartbreak";
import { LoveQuotes } from "../../quotes/Love";
import { SadQuotes } from "../../quotes/Sad";
import Quote from "./Quote";

function Quotes() {
  const { emotion } = useParams();
  const [quotes, setQuotes] = useState<string[]>([]);

  useEffect(() => {
    switch (emotion) {
      case "Angry":
        setQuotes(AngerQuotes);
        break;
      case "Curious":
        setQuotes(CuriousQuotes);
        break;
      case "Depressed":
        setQuotes(DepressedQuotes);
        break;
      case "Sad":
        setQuotes(SadQuotes);
        break;
      case "Happy":
        setQuotes(HappyQuotes);
        break;
      case "Heartbroken":
        setQuotes(HeartbreakQuotes);
        break;
      case "In love":
        setQuotes(LoveQuotes);
        break;
    }
  }, [emotion]);

  return (
    <div className={getStyles(styles, "ctn")}>
      {[...quotes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40)
        .map((quote, index) => (
          <Quote key={index} index={index} quote={quote} />
        ))}
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "items-center",
    "pb-4",
    "gap-10",
    "md:gap-18",
    "md:h-5/6",
    "md:overflow-y-scroll",
    "md:px-5",
    "trans",
  ],
};

export default Quotes;
