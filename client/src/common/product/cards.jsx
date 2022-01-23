import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ProductCard(props) {
    return (
        <div className="w-[300px] font-sans flex flex-col justify-center items-center hover:bg-neutral-100 transition-all mb-[40px]">
            <Link to={`/product/${props.id}`} target="_blank" rel="noreferrer">
                <div className="w-full h-[180px] flex justify-center items-center mb-[10px]">
                    <img className="w-[150px] h-[150px] objec-cover"  src={props.img} alt="" />
                </div>
                <div className="w-full h-auto flex flex-col justify-center items-center">
                    <p className="text-2xl text-neutral-900 mb-[10px]">${props.price}</p>
                    <p className="max-h-[40px] text-sm text-neutral-600 text-center overflow-hidden overflow-ellipsis">{props.desc}</p>
                </div>
            </Link>
        </div>
    )
}

ProductCard.protoTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number
}