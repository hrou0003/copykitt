import internal from "stream";

interface KeywordProps {
    keyword: string;
}

const Keyword: React.FC<KeywordProps> = ({keyword}) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-teal-500 disabled:opacity-50 w-auto p-2 rounded-md text-lg m-1">
            #{keyword}
        </div>
    )
}


export default Keyword;