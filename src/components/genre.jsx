import { useLoaderData, Await, defer } from "react-router-dom"
import { Suspense } from "react"
export { loader, genreLoader }
import { utilsFirebase } from "../utils"
import Card from "./card"
export default Works

function loader({ params }) {
    return utilsFirebase.article('slug', params.slugName)
}


function genreLoader({ params }) {
    if (params.genre === 'all' ) {
        return ( {article: utilsFirebase.article('genre', params.genre, true) } )
    }
    return defer({article: utilsFirebase.article('genre', params.genre)})  
}


function Works() {
    const dataPromise = useLoaderData()

    function renderElements(data) {
        return data.article.map((props) => <Card {...props}/>)
    }

    return (
        <>
            <section className="mainGrid">
                <Suspense fallback={<h2>Loading artworks...</h2>}>
                    <Await resolve={dataPromise.article}>
                        {renderElements}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}