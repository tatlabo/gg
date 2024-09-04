import { useLoaderData, useParams, useLocation, Await, defer } from "react-router-dom"
import { Suspense } from "react"
export default Work
export { loader }
import { utilsFirebase } from "../utils"

import { Parser } from 'html-to-react'

function loader({ params }) {
    const docById = utilsFirebase.byId("1")
    return defer({ article: utilsFirebase.article('slug', params.slug), doc: docById})
}



function Work() {
    const data = useLoaderData()

    async function datgaFromPromise(item) {
        try {
            const result = await item
            return { value: result}
        } catch (error) {
            return { status: 'rejected', reason: error }
        }
    }

    // datgaFromPromise(data.doc)
    //     .then( res => console.log(res))

    function renderElements(item) {
        const cards = item.article.map(({ name, thumbImg, slug, id, description, ...rest }) => {
            // if (rest.html) {

            //     for( let [k,v] of Object.entries(rest.html) ) {
            //         console.log(k)
            //         console.log(v)
            //     }
            // }

            // const dSIH_header = {__html: rest.html.header }
            // const dSIH_paragraph = {__html: rest.html.description }


            return (<section key={slug} className="description">
                    <article className="card" key={slug} id={id} data-id={id}>
                        <div className="img-container">
                            <img src={thumbImg} />
                        </div>
                        <h3 className="header">{name}</h3>
                    </article>
                    <p className="description-paragraph">
                        {description}

                    </p>
                        {rest?.html && Parser().parse(rest.html)}
                </section>
            )
        })
        return cards
    }


    return (
        <>
                <Suspense fallback={<h2>Loading artworks...</h2>}>
                    <Await resolve={data.article}>
                        {renderElements}
                    </Await>
                </Suspense>

        </>
    )
}