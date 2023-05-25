import styled from "styled-components"
import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context/AppProvider"

const SearchForm = () => {
    const { filterCocktails } = useGlobalContext()
    const searchValue = useRef('')
    
    useEffect(()=> {
        searchValue.current.focus()
    }, [])

    return (
        <Wrapper>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                    <label className="form-label" htmlFor="search">search your favourite cocktail</label>
                    <input ref={searchValue} onChange={() => filterCocktails(searchValue.current.value)} className="form-input" type="text" id="search" />
                </div>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    form {
        width: 90vw;
        max-width: 600px;
        margin: 2rem auto;
        border-radius: var(--border-radius);
        padding: 1.5rem 2rem;
        background: var(--gray-100);
        box-shadow: var(--shadow-1);
        transition: var(--transition);
        &:hover {
            box-shadow: var(--shadow-3);
            transform: scale(1.02);
        }
    }
    .form-label {
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        color: var(--primary-800);
    }
    .form-input {
        display: block;
        margin-top: .5rem;
        padding: .5rem;
        border: 1px solid var(--primary-600);
        background: transparent;
        border-radius: var(--border-radius);
        width: 100%;
    }
`
export default SearchForm