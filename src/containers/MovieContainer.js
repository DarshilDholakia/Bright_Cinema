import { useState } from "react";
import Movie from "../components/Movie";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";
import SearchByIndex from "../components/SearchByIndex";

const MovieContainer = () => {

    const [movies, setMovies] = useState([
        {
            title: "Alien",
            duration: 117,
            rating: "18",
            cast: [
                {
                    name: "Sigourney Weaver"
                }
            ],
            director: {
                name: "Ridley Scott"
            }
        },
        {
            title: "The Imitation Game",
            duration: 114,
            rating: "12A",
            cast: [
                {
                    name: "Benedict Cumberbatch"
                }
            ],
            director: {
                name: "Morten Tyldum"
            }
        },
        {
            title: "Iron Man",
            duration: 126,
            rating: "12A",
            cast: [
                {
                    name: "Robert Downey Jr"
                },
                {
                    name: "Gwyneth Paltrow"
                }
            ],
            director: {
                name: "Jon Favreau"
            }
        },
        {
            title: "The Martian",
            duration: 144,
            rating: "12A",
            cast: [
                {
                    name: "Matt Damon"
                },
                {
                    name: "Sean Bean"
                }
            ],
            director: {
                name: "Ridley Scott"
            }
        }
    ])


    const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

    const handlePreviousButtonClick = () => {
        if (currentFilmIndex > 0) {
            setCurrentFilmIndex(currentFilmIndex - 1)
        }
    }

    const handleNextButtonClick = () => {
        if (currentFilmIndex < movies.length-1) {
            setCurrentFilmIndex(currentFilmIndex + 1)
        }
    }

    // why is the id of the input tag needed here?
    const handleSearchFunction = (event) => {
        event.preventDefault();
        const searchedFilm = event.target["film-selector"].value
        setCurrentFilmIndex(searchedFilm)
    }
    

    return (
        <div>
            <Movie movie={movies[currentFilmIndex]}/>
            <PreviousButton onPreviousClick={handlePreviousButtonClick}/>
            <NextButton onNextClick={handleNextButtonClick}/>
            <SearchByIndex 
                onSearchSubmit={handleSearchFunction}/>
        </div>
    )
}

export default MovieContainer;