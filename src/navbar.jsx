import { Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Biblio
        </Link>
        <ul>
            <CustomLink to="/book-entry">Book Entry</CustomLink>
            <CustomLink to="/book-list">Book List</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
            <CustomLink to="/logout">Logout</CustomLink>
        </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
