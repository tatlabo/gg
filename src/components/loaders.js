import { defer} from "react-router-dom"
export { rootLoader }
import { utilsFirebase } from "../utils.js"

function rootLoader() {
    return defer({ portfolio: utilsFirebase.rootElements('mainPage') }) 
}
 