import { TailSpin } from 'react-loader-spinner';

interface FormProps {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
    isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {

    const characterLimit = 32;
    const updatePromptValue = (text: string) => {
        if (text.length <= characterLimit) {
            setPrompt(text);
        }
    };

    const isPromptValid = prompt.length < characterLimit;

    let statusColor = "text-slate-500";
    let statusText = null;


    if (!isPromptValid) {
        statusText = `Input must be less than ${characterLimit}`
        statusColor = "text-red-400"
    }

    return (
        <>
            <div className='mb-6 text-slate-400'>
                <p>
                    Tell me what your brand is about and I will generate copy and keywords for you.
                </p>
            </div>
            <span>
                <input className="p-2 w-full rounded-md focus:outline-teal-400 text-slate-700" type="text" value={prompt} placeholder="coffee" onChange={e => updatePromptValue(e.currentTarget.value)}></input>
                {isLoading && <TailSpin color="#000" height={"1rem"} width={"1rem"} />}
            </span>
            <div className={statusColor + " flex justify-between my-2 mb-6"}>
                <div>{statusText}</div>
                <div>
                    {prompt.length}/{characterLimit}
                </div>
            </div>
            <button className='bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg' onClick={onSubmit} disabled={isLoading || !isPromptValid}>Submit</button>
        </>
    )
}

export default Form;