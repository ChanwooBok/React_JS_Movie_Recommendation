import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../components/Load';
import MovieGroup from '../render/MovieGroup';


function Group() {
    const {group , page} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect( () => {
        setLoading(true);
        getMovies();
        return;
    } , [group,page]);

    return (
        <div>
            {
            (loading) 
                ?  <Load />
                :
                <div>
                    {movies.map( (movie) => {
                        <MovieGroup
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            coverImg={movie.medium_cover_image}
                            rating={movie.rating}
                            runtime={movie.runtime}
                            summary={movie.summary}
                            year={movie.year} />
                    })}
                </div>
                }
        </div>
    )
}

export default Group;