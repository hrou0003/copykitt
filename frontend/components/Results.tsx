import Keyword from "./Keyword";

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
        <div>Keywords: {keywords.map((keyword, index) => (<span><Keyword key={index} keyword={keyword}/> </span>))}</div>
        <button onClick={onReset}>go back</button>
      </div>
    </>)
}

export default Results;