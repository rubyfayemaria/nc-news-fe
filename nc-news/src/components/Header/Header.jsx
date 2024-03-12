import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <h1>NC NEWS</h1>
        <section>
            <nav id="nav" className="nav">
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
            </nav>
        </section>
    </>
    )
}

export default Header;