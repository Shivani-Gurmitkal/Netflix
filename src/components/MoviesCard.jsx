import { Link } from "react-router-dom";

function MoviesCard({img,slug}){
    return (
        <>
        <Link to={`/details/ ${slug}`}>
        <div className="">
            <img src={img} className="w-[140px] h-[140px] object-cover" alt="" />
        </div>
        </Link>
        </>
    )
}

export default MoviesCard;