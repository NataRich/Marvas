import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "antd";

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

export function OrderItemCard(props) {
    return (
        <div className="w-[900px] h-[200px] flex font-sans mb-[30px]">
            <Link className="mr-[30px]" to={`/product/${props.id}`} target="_blank" rel="noreferrer">
                <div className="w-[200px] h-full rounded-[2px] flex justify-center items-center hover:bg-neutral-100">
                    <img className="w-[150px] h-[150px] rounded-[2px] object-cover" src={props.img} alt="" />
                </div>
            </Link>
            <div className="w-[470px] h-full flex flex-col justify-between">
                <Link className="mr-[30px]" to={`/product/${props.id}`} target="_blank" rel="noreferrer">
                    <div className="flex">
                        <p className="text-2xl text-neutral-900 mr-[20px]">${props.price}</p>
                    </div>
                </Link>
                <Button 
                    className="w-[150px]" 
                    size="large"
                    type="default" 
                    danger
                    onClick={props.onRemove}
                >
                    Remove
                </Button>
            </div>
        </div>
    )
}

ProductCard.protoTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number
}

OrderItemCard.protoTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    price: PropTypes.number,
    onRemove: () => {}
}