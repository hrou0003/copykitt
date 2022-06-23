import internal from "stream";

interface KeywordProps {
    keyword: string;
}

const Keyword: React.FC<KeywordProps> = ({keyword}) => {
    return (
        <div>
            #{keyword}
        </div>
    )
}


export default Keyword;