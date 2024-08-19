import { useLoaderData, defer } from "react-router-dom"
export { Article }

function loader() {
    return 'This is ok'
}


function Article() {
    const article = useLoaderData()

    return <div>{article}</div>
}