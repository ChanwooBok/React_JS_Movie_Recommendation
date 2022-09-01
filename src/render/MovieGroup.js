import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function MovieGroup({ id, coverImg, title, rating, runtime, year, summary }) {
    
    return (
        <div>
            <Link to={`/movie/${id}`}>
                {(title.length > 35)
                    ? `${title.slice(0,35)}...`
                    : title}
            </Link>

            <p>{year ? `year: ${year}` : null}</p>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>

        </div>
    )
}

MovieGroup.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    download_count: PropTypes.number,
    summary: PropTypes.string
}


export default MovieGroup;
