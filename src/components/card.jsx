import { Link } from "react-router-dom"


export default function Card({ name, thumbImg, slug, id, ...rest }) {
    return (
        <article className="card" id={id} data-id={id}>
            <div className="img-container">
                <img src={thumbImg} />
            </div>
            <div className="header">
                <h1>
                    <Link to={`/work/${slug}`}>
                        {name}
                    </Link>
                </h1>
                <h2>
                    {rest.createdAt.seconds}
                </h2>
            </div>
            
            {/* <p className="description">{description}</p> */}
        </article>
    )
}