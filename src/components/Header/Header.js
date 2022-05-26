import { useState, useEffect } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './header.css';

export default function Header({ currentState, overlay }) {
    const [currentNavbar, setNavbar] = useState(false)

    const showNav = () => {
        setNavbar(!currentNavbar)
        currentState(!currentNavbar)
    }

    useEffect(() => {
        setNavbar(overlay)
    }, [overlay])

    return (
        <div className="header-wrapper" style={currentNavbar ? {zIndex: 100} : {}}>
            <header className={currentNavbar ? "header header-shadow" : "header"}>
                <div className="logo">
                    <Link to="/">Logo</Link>
                </div>
                <div onClick={() => showNav()} className={currentNavbar ? "burger burger-active" : "burger"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={currentNavbar ? 'navbar nav-active' : 'navbar'}>
                    <CustomLink to="/" className='active' onClick={showNav}>HOME</CustomLink>     
                    <CustomLink to="/o-nas" onClick={showNav}>O NAS</CustomLink>     
                    <CustomLink to="/nasza-misja" onClick={showNav}>NASZA WIZJA &#38; MISJA</CustomLink>     
                    <CustomLink to="/kontakt" onClick={showNav}>KONTAKT</CustomLink>     
                </nav>
            </header>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const activePath = useResolvedPath(to)
    const isActive = useMatch({ path: activePath.pathname, end: true })
    return <Link to={to} {...props} className={isActive ? "active" : ""}>{children}</Link>
}