import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <h1>NC NEWS</h1>
        <section>
            <nav id="nav" className="nav">
                <Link >Home</Link>
                <Link>Topics</Link>
            </nav>
        </section>
    </>
    )
}

export default Header;