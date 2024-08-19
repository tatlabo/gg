import { Suspense } from "react"
import { useNavigate, useLocation, useParams, defer, useLoaderData, Await } from "react-router-dom"
import { rootLoader } from "./loaders.js"

export { Root }

function Root() {
    const data = useLoaderData()
    
    function renderElements(data) {
        const items = data.portfolio

        const cards = items.map( ({name, thumbImg, slug, id, description}) => {
            return (
                <>
                <article className="card" key={slug} id={id} data-id={id}>
                    <div className="img-container">
                        <img src={thumbImg}/>
                    </div>
                    <h3 className="header">{name}</h3>
                    {/* <p className="description">{description}</p> */}
                </article>
                </>
        )
        })      

        return cards
    }

    return (
        <section className="mainGrid">
            <Suspense>
                <Await resolve={data.portfolio}>
                        { renderElements }
                </Await>
            </Suspense>
        </section>
    )
}



