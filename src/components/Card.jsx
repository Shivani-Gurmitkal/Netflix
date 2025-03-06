import { Link } from "react-router-dom";

function Card({img,slug}){
    return (
        <>

        <Link to={`/videos/${slug}`}>
        <div className="">
            <img src={img} alt="" />
        </div>
        </Link>

        </>
    )
}

export default Card;