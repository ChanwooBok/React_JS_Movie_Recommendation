import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group_key_arr, Group_obj } from '../atom/NavList';
import styles from "./Navbar.module.css";

function Navbar() {

    const [search , setSearch] = useState(null);

    const searchClick = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className={styles.container}>

            {/* page Name */}
            <div className={styles.pageName}>
                <Link to={"/"}>WooFlex</Link>
            </div>

            {/* Group Links */}
            <div className={styles.GroupLink}>
                {
                    Group_key_arr.map( (key) => {
                        return (
                            <div className={styles.Link} key={key}>
                                <div className={styles.Link_sep}>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
                 {/* 🎄 Merry Christmas! */}
                <div className={styles.MerryChristMas}><Link to={`/search/christmas`}>Christmas🎄</Link></div>
            </div>

            {/* Search Bar */}
            <div className={styles.searchBar}>
                <div>
                    <form>
                        {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="Search Movie"
                            value={search}
                            onChange={searchClick}
                            onMouseOut={ () => {setSearch("")}}
                        >
                        </input>
                        {/* Search Button */}
                        <Link to={`/search/${search}`}>
                            <button>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </button>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
        
        
    );
}

export default Navbar;