import { Suspense } from "react"
import { useNavigate, useLocation, useParams, defer, useLoaderData, Await } from "react-router-dom"
import { rootLoader } from "./loaders.js"

export default Works

function loader({ params }) {
    const slugName = params.workSlug
    return utilsFirebase.article('slug', slugName)
}



function Works() {
    const data = useLoaderData()

    function renderElements(data) {
        const items = data.portfolio

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

    const descriptionElement = <section className="description">
        <h1 className="description-header">Lorem, ipsum dolor.</h1>
        <p className="description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, corporis commodi ab enim laborum culpa? Officia provident ratione corrupti rem accusantium, quisquam fuga neque nesciunt hic quos, delectus harum aperiam quasi praesentium nulla?
        </p>
    </section>


    return (
        <>
            {descriptionElement}
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



