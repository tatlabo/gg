import { defer} from "react-router-dom"
export { rootLoader, genreLoader }
import { utilsFirebase } from "../utils.js"

function rootLoader() {
    return defer({ portfolio: utilsFirebase.rootElements('mainPage') }) 
}
 

function genreLoader({ params }) {
    return defer({ article: utilsFirebase.article('genre', params.genre) }) 
}