import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (key) => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(key);

    const setQuery = (newValue) => {
        const newSearchParams = new URLSearchParams(location.search);

        if (!newValue) {
            newSearchParams.delete(key);
        } else {
            newSearchParams.set(key, newValue);
        }

        navigate(`${location.pathname}?${newSearchParams.toString()}`);
    };

    return [query, setQuery];
};