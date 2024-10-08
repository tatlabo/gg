import { useLoaderData, Await, defer } from "react-router-dom"
import { Suspense } from "react"
export { genreLoader }
import { utilsFirebase } from "../utils"
import Card from "./card"
export default Works


function genreLoader({ params }) {
    if (params.genre === 'all' ) {
        return ( {article: utilsFirebase.genre('genre', params.genre, true) } )
    }
    return defer({article: utilsFirebase.genre('genre', params.genre)})  
}


function Works() {
    const dataPromise = useLoaderData()

    function renderElements(data) {
        return data.article.map((props) => <Card {...props} key={props.id}/>).sort((a,b) => b.props.createdAt -a .props.createdAt )
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