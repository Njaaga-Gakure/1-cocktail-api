import axios from 'axios'
import {createContext, useContext, useReducer, useEffect, useCallback} from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const GET_COCKTAILS_BEGIN  = 'GET_COCKTAILS_BEGIN' 
const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS'
const FILTER_COCKTAILS = 'FILTER_COCKTAILS'

const intitialState = {
    loading: false,
    searchTerm: "a",
    cocktails: [],
    cocktail: {}
}
const reducer = (state, action) => {
    if(action.type === GET_COCKTAILS_BEGIN) {
        return {...state, loading: true}
    }
    if (action.type == GET_COCKTAILS_SUCCESS) {

        return {...state, loading: false, cocktails: action.payload}
    }
    if (action.type === FILTER_COCKTAILS) {
        return {...state, searchTerm: action.payload}
    }
}
const AppContext = createContext()
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intitialState)
    const fetchCocktails = async () => {
        dispatch({type: GET_COCKTAILS_BEGIN})
        try {
          const {data : {drinks}} = await axios(`${url}${state.searchTerm}`)
          let cocktails = []
          if (drinks) {
            cocktails = drinks.map(drink => {
                const {
                        idDrink: id,
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info, 
                        strGlass: glass
                    } = drink
                return {id, name, image, info, glass}
            })
          }
          dispatch({type: GET_COCKTAILS_SUCCESS, payload: cocktails})
        
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(()=>{
        fetchCocktails()
    }, [state.searchTerm])

    const filterCocktails = (searchValue) => {
        dispatch({type: FILTER_COCKTAILS, payload: searchValue})
    }
    return (
        <AppContext.Provider value={{...state, filterCocktails}}>
            {children}
        </AppContext.Provider>
    )
} 

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}