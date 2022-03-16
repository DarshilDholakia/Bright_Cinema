const SearchByIndex = ({onSearchSubmit}) => {
    return (
        <form onSubmit={onSearchSubmit}>
            <input type="number" id="film-selector" name="quantity" min={0} max={3}/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchByIndex;