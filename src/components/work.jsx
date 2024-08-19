import { useLoaderData, useParams, useLocation, Await } from "react-router-dom"
import { Suspense } from "react"
export default Work
export { loader }
import { utilsFirebase } from "../utils"

function loader({ params }) {
    const slugName = params.workSlug
    return utilsFirebase.article('slug', slugName)
}

function Work() {
    // const work = useLocation()
    const articleLoader = useLoaderData()
    const article = articleLoader.article[0]
    console.log(article)
    return (
        <Suspense>
            <Await resolve={article}>
                <h1>{article.name}</h1>
                <div className="img-container">
                        <img src={article.thumbImg}/>
                </div>
                <p>{article.description}</p>
            </Await>
        </Suspense>
    )
}