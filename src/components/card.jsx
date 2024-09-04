import { Link } from "react-router-dom"


export default function Card({ name, thumbImg, slug, id }) {
    return (
        <article className="card" id={id} data-id={id}>
            <div className="img-container">
                <img src={thumbImg} />
            </div>
            <h3 className="header">
                <Link to={`/work/${slug}`}>
                    {name}
                </Link>
            </h3>
            {/* <p className="description">{description}</p> */}
        </article>
    )
}