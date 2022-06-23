import Keyword from "./Keyword";
import { nanoid } from 'nanoid'

interface ResultsProps {
  snippet: string;
  keywords: string[];
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({snippet, keywords, onReset}) => {

    return (<>
      <div>
        Here are your results:
        <div>Snippet: {snippet}</div>
        <div>Keywords: {keywords.map((keyword, index) => (<span key={index}><Keyword keyword={keyword}/> </span>))}</div>
        <button onClick={onReset}>go back</button>
      </div>
    </>)
}

export default Results;