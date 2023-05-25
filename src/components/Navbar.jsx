import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
    return (
        <Nav>
            <div className="nav-center">
                <Link to='/'>
                    <h5>the<span>Cocktail</span>DB</h5>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            about
                        </Link>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}
const Nav = styled.nav`
height: 5rem;
display: flex;
align-items: center;
background: var(--gray-50);
box-shadow: var(--shadow-2);
h5 {
    color: var(--gray-900);
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0;
}
span {
    color: var(--primary-600);
}
.nav-center {
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
        text-transform: capitalize;
        letter-spacing: 2px;
        color: var(--primary-600);
        transition: var(--transition);
        padding-bottom: .25rem;
        &:hover {
            color: var(--primary-800);
        }
    }

}
`
export default Navbar