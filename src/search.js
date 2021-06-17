import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };
    return <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Here:  </span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="search github"
            name="s"
        />
        <button type="submit">Go</button>
    </form>
};

export default SearchBar;
