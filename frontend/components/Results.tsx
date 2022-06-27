import Keyword from "./Keyword";
import { nanoid } from 'nanoid'
import { KeyboardEvent } from 'react';

interface ResultsProps {
  snippet: string;
  keywords: string[];
  onReset: () => void;
  prompt: string;
}

const resultSection = (label: string, body: any) => {
  return (
    <div className="bg-slate-700 rounded-md p-4 my-1">
      <div>
        <div className="text-slate-400 text-sm">{label}</div>
        <div>{body}</div>
      </div>

    </div>
  )

}

const Results: React.FC<ResultsProps> = ({ snippet, keywords, onReset, prompt }) => {

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Backspace") {
      onReset()
    }
  }

  return (<>
    <div 
      tabIndex={0}
      onKeyDown={onKeyDownHandler}
    >
      {resultSection("Prompt", <div className="text-lg font-bold">{prompt}</div>)}
      {resultSection("Snippet", <div >{snippet}</div>)}
      {resultSection("Keywords", <div className="flex flex-wrap">{keywords.map((keyword, index) => (<span key={index}><Keyword keyword={keyword} /></span>))}</div>)}
      <button className='bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg' onClick={onReset}>Back</button>
    </div>
  </>)
}

export default Results;