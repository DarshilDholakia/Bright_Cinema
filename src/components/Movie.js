const Movie = ({movie}) => {



    return (
        
        <div>
            <h3>{movie.title}</h3>
            <p>Duration: {movie.duration}</p>
            <p>Rating: {movie.rating}</p>
            <p>Cast Members: </p>
            <ul>
                {movie.cast.map((cast,index) => {
                    return (
                    <li key={index}>{cast.name}</li>
                    )
                })}
            </ul>
            <p>Director: {movie.director.name}</p>
        </div>
        
    );
}

export default Movie;