import { Suspense } from "react"
import { useLoaderData, Await, Link, defer } from "react-router-dom"
export { Root, rootLoader }
import { utilsFirebase } from "../utils.js"
import Card from "./card.jsx"


function Description() {
    return (
        <section className="description">
        <h1 className="description-header">Lorem, ipsum dolor.</h1>
        <p className="description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, corporis commodi ab enim laborum culpa? Officia provident ratione corrupti rem accusantium, quisquam fuga neque nesciunt hic quos, delectus harum aperiam quasi praesentium nulla?
        </p>
    </section> )
}

// function rootLoader() {
//     return defer( utilsFirebase.article('mainPage', true) ) 
// }

function rootLoader() {
    return defer ({ article: utilsFirebase.article('mainPage', true) })
}

 
function Root({main}) {
    const dataPromise = useLoaderData()

    function renderElements(data) {
        return data.article.map((props) => <Card {...props}/>)
    }

    return (
        <>
            {main && <Description/>}
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



