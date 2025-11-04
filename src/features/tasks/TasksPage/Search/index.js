import { Input } from "../../Input"
import { useQueryParameter } from "../../useQueryParameter";
import { Wrapper } from "./style";

const Search = () => {
    const [query, setQuery] = useQueryParameter("szukaj");

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={(e) => setQuery(e.target.value)}
            />
        </Wrapper>
    );
}

export default Search;