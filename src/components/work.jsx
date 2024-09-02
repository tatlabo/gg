import { useLoaderData, useParams, useLocation, Await } from "react-router-dom"
import { Suspense } from "react"
export default Work
export { loader, genreLoader }
import { utilsFirebase } from "../utils"

function loader({ params }) {
    return utilsFirebase.article('slug', params.slugName)
}

function genreLoader({ params }) {
    return utilsFirebase.article('genre', params.genre)  
}

function Work({main}) {
    // const work = useLocation()
    const data = useLoaderData()
    const items = data.article

    function renderElements(data) {
        

        const cards = items.map(({ name, thumbImg, slug, id, description }) => {
            return (
                    <article className="card" key={slug} id={id} data-id={id}>
                        <div className="img-container">
                            <img src={thumbImg} />
                        </div>
                        <h3 className="header">{name}</h3>
                        {/* <p className="description">{description}</p> */}
                    </article>
            )
        })

        return cards
    }



    return (
        <>
            <section className="mainGrid">
                <Suspense>
                    <Await resolve={data.portfolio}>
                        {renderElements}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}