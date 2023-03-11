import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navContainer">

                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Tarun Bank</span>
                </Link>
                <div className="r-side">
                    <div>
                        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                            <span className="logo">Login</span>
                        </Link>

                    </div>
                    <div>
                        <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
                            <span className="logo"> open Account</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                            <span className="logo"> Contact Us</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;