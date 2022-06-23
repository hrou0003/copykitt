interface KeywordProps {
    keyword: string;
}

const Keyword: React.FC<KeywordProps> = ({keyword}) => {
    return (
        <span>
            #{keyword}
        </span>
    )
}


export default Keyword;