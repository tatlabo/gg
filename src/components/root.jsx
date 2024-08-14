import { Suspense } from "react"
import { useNavigate, useLocation, useParams, defer, useLoaderData, Await } from "react-router-dom"
import { rootLoader } from "./loaders.js"

export { Root }

function Root() {
    const data = useLoaderData()
    
    
    function renderElements(data) {
        console.log(data)
        const items = data.portfolio

        // let i = 0
        // let cards = []
        
        // while (i < 10 ) {
        //     const {name, thumbImg, slug, id} = i%2 ? items[1] : items[0]
        //     cards.push(
        //     <li className="card" key={i} id={id} data-id={id}>
        //                      <h1>{name}</h1>
        //                     <div className="thumbImage">
        //                          <img src={thumbImg}/>
        //                      </div>
        //     </li>)
        //     i++
        // }
        const cards = items.map( ({name, thumbImg, slug, id}) => {
            return (
                <li className="card" key={slug} id={id} data-id={id}>
                    <h1>{name}</h1>
                    <div className="thumbImage">
                        <img src={thumbImg}/>
                    </div>
                </li>
        )
        })      

        return cards
    }

    return (
        <ul className="mainGrid">
            <Suspense>
                <Await resolve={data.portfolio}>
                        { renderElements }
                </Await>
            </Suspense>
        </ul>
    )
}



