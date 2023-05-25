import { Link } from "react-router-dom"
import styled from "styled-components"

const Error = () => {
    return (
        <Wrapper>
            <div className="error">
                <h2 className="error-title">error: <span>404</span></h2>
                <p className="error-info">the page you are looking for can't not be found</p>
                <Link className="btn" to='/'>
                    portal back home
                </Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;
    text-align: center;
    span {
        color: var(--primary-600);
    }
    .error-title,
    .error-info {
        margin: 0;
    }
    .error-title {
        font-size: 3rem;
    }
    .error-info {
        font-size: 1.25rem;
        text-transform: capitalize;
        color: var(--primary-700);
        letter-spacing: var(--letter-spacing);
    }
    .btn {
        display: inline-block;
        border: 1px solid var(--primary-600);
        margin-top: 1rem;
        padding: .75rem 1.5rem;
        color: var(--primary-600);
        letter-spacing: var(--letter-spacing);
        text-transform: uppercase;
        cursor: pointer;
        border-radius: var(--border-radius);
        transition: var(--transition);
        &:hover,
        &:focus {
            background: var(--primary-600);
            color: #ffffff;
        }
    }
`
export default Error