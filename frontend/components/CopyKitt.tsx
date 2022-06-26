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


  const gradientTextStyle = 
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500";

  return (
    <div className="h-screen flex">
      <div className="max-w-md m-auto p-2">
        <div className="bg-slate-800 p-6 rounded-md text-white">
          <div className={gradientTextStyle + " text-center my-6"}>
            <img className="w-32 h-32 mx-auto" src="https://raw.githubusercontent.com/pixegami/copykitt-tutorial/1292a4f55c5d65ccf6dccc4a7a5e21220d8aefc8/copykitt-site/public/copykittLogo.svg" />
            <h1 className="text-3xl">CopyKitt!</h1>
            <div>Your AI branding assistant</div>
          </div>
          {hasResult ?
            <Results prompt={prompt} snippet={snippet} keywords={keywords} onReset={onReset} />
            :
            <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} />
          }

        </div>
      </div>
    </div>
  );
}

export default CopyKitt;