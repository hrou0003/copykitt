import React from "react";
import Form from "./Form";
import Results from "./Results";

const CopyKitt: React.FC = () => {

  const ENDPOINT: string = "https://47evpbtahk.execute-api.ap-southeast-2.amazonaws.com/prod"

  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt)
    setIsLoading(true);
    fetch(`${ENDPOINT}/generate_snippet_and_keywords?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  }

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setHasResult(true);
    setIsLoading(false);
  }

  const onReset = () => {
    setPrompt("");
    setHasResult(false);
  }



  return (
    <div className="h-screen flex">
    <div className="max-w-md m-auto p-2">
      <div className="bg-gray-700 p-6 rounded-md text-white text-center">
        <h1 className="text-white font-bold underline">CopyKitt!</h1>

        {hasResult ?
          <Results snippet={snippet} keywords={keywords} onReset={onReset} />
          :
          <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} />
        }

      </div>
    </div>
    </div>
  );
}

export default CopyKitt;