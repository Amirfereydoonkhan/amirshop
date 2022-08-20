import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const { cart } = useSelector((state => state.shoppingCart));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Amir Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={(navData => navData.isActive ? 'nav-link active' : 'nav-link' )} to='/' >Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={(navData => navData.isActive ? 'nav-link active' : 'nav-link' )} to='/products'>Products</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={(navData => navData.isActive ? 'nav-link p-1 me-3 active' : 'nav-link' )} to="/cart">
                                <span className="badge rounded-pill bg-primary me-1">{cart.length}</span>
                                <i className="bi bi-basket-fill fs-4"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;