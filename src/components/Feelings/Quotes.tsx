import getStyles from "../../Style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AngerQuotes } from "../../quotes/Anger";
import { CuriousQuotes } from "../../quotes/Curious";
import { DepressedQuotes } from "../../quotes/Depressed";
import { HappyQuotes } from "../../quotes/Happy";
import { HeartbreakQuotes } from "../../quotes/Heartbreak";
import { LoveQuotes } from "../../quotes/Love";
import Quote from "./Quote";

function Quotes() {
  const { emotion } = useParams();
  const [quotes, setQuotes] = useState<string[]>([]);

  // TODO: Define callback shuffle function

  useEffect(() => {
    switch (emotion) {
      case "angry":
        setQuotes(AngerQuotes);
        break;
      case "curious":
        setQuotes(CuriousQuotes);
        break;
      case "depressed":
        setQuotes(DepressedQuotes);
        break;
      case "happy":
        setQuotes(HappyQuotes);
        break;
      case "heartbreak":
        setQuotes(HeartbreakQuotes);
        break;
      case "love":
        setQuotes(LoveQuotes);
        break;
    }
  }, [emotion]);

  return (
    <div className={getStyles(styles, "ctn")}>
      {quotes.map((quote, index) => (
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
    "gap-10",
    "h-full",
    "overflow-y-scroll",
  ],
};

export default Quotes;
