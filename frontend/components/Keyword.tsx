import internal from "stream";

interface KeywordProps {
    keyword: string;
    key: number;
}

const Keyword: React.FC<KeywordProps> = ({keyword, key}) => {
    return (
        <span key={key}>
            #{keyword}
        </span>
    )
}


export default Keyword;