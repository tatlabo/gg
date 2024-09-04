import { useLoaderData, useParams, useLocation, Await, defer } from "react-router-dom"
import { Suspense } from "react"
export default Work
export { loader }
import { utilsFirebase } from "../utils"

function loader({ params }) {
    return defer({ article: utilsFirebase.article('slug', params.slug)})
}



function Work() {
    const data = useLoaderData()

    function renderElements(item) {
        const cards = item.article.map(({ name, thumbImg, slug, id, description }) => {
            return (<>
                    <article className="card" key={slug} id={id} data-id={id}>
                        <div className="img-container">
                            <img src={thumbImg} />
                        </div>
                        <h3 className="header">{name}</h3>
                    </article>
                    <p className="description-paragraph">{description}</p>
            </>
            )
        })
        return cards
    }


    return (
        <>
            <section className="mainGrid">
                <Suspense fallback={<h2>Loading artworks...</h2>}>
                    <Await resolve={data.article}>
                        {renderElements}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}