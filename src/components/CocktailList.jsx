import Cocktail from "./Cocktail"
import { useGlobalContext } from "../context/AppProvider"
import Loading from "./Loading"
import styled from "styled-components"

const CocktailList = () => {
    const { loading, cocktails} = useGlobalContext()
    // console.log(cocktails)
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return <h5 className="empty-return">sorry! no cocktails matched your search criteria :(</h5>
    }
    return (
        <Wrapper>
            <h2 className="section-title"><span>cock</span>tails</h2>
            <div className="section-center">
                {cocktails.map(cocktail => {
                   return <Cocktail key={cocktail.id} {...cocktail} />
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
margin-bottom: 2rem;
.section-title {
    text-align: center;
    span {
        color: var(--primary-600);
    }
}
.section-center {
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

`
export default CocktailList