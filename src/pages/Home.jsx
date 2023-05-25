import { CocktailList, SearchForm, Loading} from "../components"
import { useGlobalContext } from "../context/AppProvider"
const Home = () => {
    const { isLoading} = useGlobalContext()
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}

export default Home