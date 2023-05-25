import { Link } from "react-router-dom"
import styled from "styled-components"

const Cocktail = ({id, name, image, info, glass}) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-info">
                <h3 className="cocktail-name">{name}</h3>
                <h5 className="cocktail-glass">{glass}</h5>
                <span className="cocktail-alcoholic">{info}</span>
                <Link className='btn' to={`/cocktail/${id}`}>
                    details
                </Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article` 
    background: var(--gray-100);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    position: relative;
    &:hover {
        box-shadow: var(--shadow-3);
    }
    h3,
    h5 {
        margin: 0;
    }
    .cocktail-glass {
        color: var(--gray-500);
    }
    .cocktail-name {
        color: var(--primary-600);
    }
    .img-container {
        img {
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
    }
    .cocktail-info {
        padding: 1rem;
    }
    .cocktail-alcoholic {
        display: inline-block;
        background: var(--primary-600);
        padding: 0 .75rem;
        border-radius: 0 var(--border-radius) 0 var(--border-radius);
        position: absolute;
        top: 0;
        right: 0;
        color: var(--gray-100);
        letter-spacing: var(--letter-spacing);
    }
    .btn {
        display: block;
        margin-top: 1.5rem;
        text-align: center;
        color: var(--primary-600);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing);
        border: 1px solid var(--primary-600);
        padding: .5rem 1rem;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
        &:hover {
            background: var(--primary-600);
            color: var(--gray-100);
        }
        }
`
export default Cocktail