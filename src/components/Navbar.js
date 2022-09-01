import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group_key_arr, Group_obj } from '../atom/NavList';


function Navbar() {

    const [search , setSearch] = useState(null);

    const searchClick = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>

            {/* page Name */}
            <div>
                <Link to={"/"}>WooFlex</Link>
            </div>

            {/* Group Links */}
            <div>
                {
                    Group_key_arr.map( (key) => {
                        return (
                            <div>
                                <div>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
                 {/* 🎄 Merry Christmas! */}
                <div><Link to={`/search/christmas`}>Christmas🎄</Link></div>
            </div>

            {/* Search Bar */}
            <div>
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
                                search font button
                            </button>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
        
        
    );
}

export default Navbar;