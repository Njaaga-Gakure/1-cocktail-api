import axios from "axios"
import { useState, useEffect } from "react"
import {useParams, Link} from "react-router-dom"
import {Loading} from '../components'
import styled from "styled-components"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)
    const {id} = useParams()
    const fetchSingleDrink = async () => {
        setLoading(true)
        try {
            const {data: {drinks}} = await axios(`${url}${id}`)
            if (drinks) {
                const {
                    idDrink: id,
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info, 
                    strGlass: glass,
                    strCategory: category,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                } = drinks[0]
                const ingredients = [
                    strIngredient1, 
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                ]
                const newCocktail = {id, name, image, info, glass, category, instructions, ingredients}
                setCocktail(newCocktail)
            } else {
                setCocktail(null)
            }
            setLoading(false)
        } catch(error) {
            console.log(error.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchSingleDrink()
    }, [id])
    if (loading) {
        return <Loading />
    }
    if(!cocktail) {
        return <h5 className="empty-return">no cocktail to display :(</h5>
    }
    const {name, image, info, glass, category, instructions, ingredients} = cocktail
    return (
        <Wrapper>
            <div className="section-header">
            <Link className='btn' to='/'> 
                    back home
            </Link>
            <h2>{name}</h2>
            </div>
            <div className="container">
                <div className="img-container">
                    <img className="cocktail-img" src={image} alt={name} />
                </div>
                <div className="cocktail-details">
                    <div>
                        <p>
                            <span className="cocktail-detail">name</span>
                            {name}
                        </p>
                        <p>
                            <span className="cocktail-detail">info</span>
                            {info}
                        </p>
                        <p>
                            <span className="cocktail-detail">glass</span>
                            {glass}
                        </p>
                        <p>
                            <span className="cocktail-detail">category</span>
                            {category}
                        </p>
                        <p>
                            <span className="cocktail-detail">instructions</span>
                            {instructions}
                        </p>
                        <p>
                            <span className="cocktail-detail">ingredients</span>
                            {ingredients.map((ingredient, index) => {
                                return ingredient ? <span key={index}>{ingredient.split(" ").join("-")} </span> : null
                            })}
                        </p>
                    </div>

                </div>
            </div>
        </Wrapper>        
    )
}
const Wrapper = styled.section`
    padding: 2rem;
    .section-header {
        text-align: center;
    }
    h2 {
        margin: 1rem auto 2rem;
        color: var(--gray-500);
    }
    .btn {
        margin: 1.5rem 0;
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
    p {
        max-width: 400px;
        color: var(--gray-500);
        letter-spacing: var(--letter-spacing);
       
    }
    .cocktail-detail {
        display: inline-block;
        background: var(--primary-600);
        margin-right: 1rem;
        padding: 0 1rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
        color: #ffffff;
        text-transform: capitalize;
    }

    .img-container,
    .cocktail-details {
        width: 90vw;
        max-width: 600px;
        margin: 0 auto;
        height: 500px;
    }
    .cocktail-img {
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        position: center;
    }

    
    @media(min-width: 992px) {
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
        }
        .cocktail-details {
            display: flex;
            align-items: center;
        }
       

`
export default SingleCocktail