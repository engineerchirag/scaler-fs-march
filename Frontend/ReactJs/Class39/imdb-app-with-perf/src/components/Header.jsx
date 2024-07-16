import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/favourite">Favourite</Link></li>
                <li><Link to="/terms">TnC</Link></li>
                <li><Link to="/add-movie">Add Movie</Link></li>
            </ul>
        </div>
    )
}

export default Header;