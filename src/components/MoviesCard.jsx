import { Link } from "react-router-dom";

function MoviesCard({img,slug}){
    return (
        <>
        <Link to={`/details/${slug}`}>
        <div className="">
            <img src={img} className="object-cover" alt="" />
        </div>
        </Link>
        </>
    )
}

export default MoviesCard;