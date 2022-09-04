import styles from './Group.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Load from '../components/Load';
import MovieGroup from '../render/MovieGroup';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
    const {group , page} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // lst로 넘어온 값이 page로 넘어온다. 그 page값이 아래 fetch에 변수로 주어져서 그 페이지의 정보들을 가져온다.
    
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

    console.log(movies);

    return (
        <div className={styles.container}>
            {
            (loading) 
                ?  <Load />
                :
                <div className={styles.movies}>
                    {movies.map( (movie) => (
                        <MovieGroup
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        coverImg={movie.medium_cover_image}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        summary={movie.summary}
                        year={movie.year} />
                    ))}
                </div>
                }
                {
                    (loading)
                    ? null
                    :
                    <div className={styles.footer}>
                        <div className={styles.list}>
                        {
                            List_arr.map((lst) => {
                            return (
                                <Link
                                key={lst}
                                to={`/page/${group}/${lst}`}
                                >
                                {lst}</Link>
                            )
                            })
                        }
                        </div>
                    </div>
                }
        </div>
    )
}

export default Group;