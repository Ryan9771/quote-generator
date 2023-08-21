import { useParams } from "react-router-dom";

function Quotes() {
  const { emotion } = useParams();
  return emotion;
}

export default Quotes;
