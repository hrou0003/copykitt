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

    return (
        <>
            <p>
                Tell me what your brand is about and I will generate copy and keywords for you.
            </p>
            <span>
                <input type="text" value={prompt} placeholder="coffee" onChange={e => updatePromptValue(e.currentTarget.value)}></input>
                {isLoading && <TailSpin color="#000" height={"1rem"} width={"1rem"} />}
            </span>
            <div>{prompt.length}/{characterLimit}</div>
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}

export default Form;